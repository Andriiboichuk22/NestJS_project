import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tracking } from './tracking.entity';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { UpdateTrackingDto } from './dto/update-tracking.dto';

@Injectable()
export class TrackingService {
  constructor(
    @InjectRepository(Tracking)
    private repo: Repository<Tracking>,
  ) {}

  create(dto: CreateTrackingDto) {
    const tracking = this.repo.create(dto);
    return this.repo.save(tracking);
  }

  findAll() {
    return this.repo.find({ relations: ['user', 'item'] });
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['user', 'item'],
    });
  }

  update(id: number, dto: UpdateTrackingDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
