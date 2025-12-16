import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tracking } from '../tracking/tracking.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  isCompleted: boolean;

  @OneToMany(() => Tracking, tracking => tracking.item, { cascade: true })
  trackings: Tracking[];
}
