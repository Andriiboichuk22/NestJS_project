import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { TrackingModule } from './tracking/tracking.module';
import { Item } from './items/item.entity';
import { User } from './users/user.entity';
import { Tracking } from './tracking/tracking.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'book_tracker',
      entities: [User, Item, Tracking],
      synchronize: true, 
    }),
    UsersModule,
    ItemsModule,
    TrackingModule,
  ],
})
export class AppModule {}
