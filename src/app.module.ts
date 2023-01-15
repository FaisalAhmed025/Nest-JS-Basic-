import { Profile } from './typeorm/entities/profile';
import { User } from './typeorm/entities/User';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'b2b',
      entities: [User, Profile],
      synchronize:true
    }),
  ],
})

export class AppModule {}
