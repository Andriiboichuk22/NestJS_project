import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Item } from '../items/item.entity';

@Entity()
export class Tracking {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => User, user => user.trackings, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Item, item => item.trackings, { onDelete: 'CASCADE' })
  item: Item;

  @Column({ type: 'int', default: 0 })
  progress: number; // % або сторінки

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
  
}
