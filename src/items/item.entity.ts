import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tracking } from '../tracking/tracking.entity';

export enum ItemType {
  BOOK = 'book',
  ARTICLE = 'article',
}

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'enum', enum: ItemType })
  type: ItemType;

  @OneToMany(() => Tracking, tracking => tracking.item)
  trackings: Tracking[];
}
