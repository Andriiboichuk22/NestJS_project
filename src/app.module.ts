import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { TrackingModule } from './tracking/tracking.module';
import { User } from './users/user.entity';
import { Item } from './items/item.entity';
import { Tracking } from './tracking/tracking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',      // твій логін до PostgreSQL
      password: 'your_password', // твій пароль
      database: 'book_tracker',  // база даних, яку створиш
      entities: [User, Item, Tracking],
      synchronize: true,         // автоматичне створення таблиць (тільки для dev)
    }),
    UsersModule,
    ItemsModule,
    TrackingModule,
  ],
})
export class AppModule {}
