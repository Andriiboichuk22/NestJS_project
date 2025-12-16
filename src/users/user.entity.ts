import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tracking } from '../tracking/tracking.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Tracking, tracking => tracking.user)
  trackings: Tracking[];
}
