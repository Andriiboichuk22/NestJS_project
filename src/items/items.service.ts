import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  create(dto: CreateItemDto) {
    const item = this.itemsRepository.create(dto);
    return this.itemsRepository.save(item);
  }

  findAll() {
    return this.itemsRepository.find();
  }

  findOne(id: number) {
    return this.itemsRepository.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateItemDto) {
    await this.itemsRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.itemsRepository.delete(id);
  }
}
