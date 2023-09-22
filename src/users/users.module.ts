import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './controllers/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

@Module({
  // TypeOrmModule.forFeature([User]) is used to inject the repository of the User entity into the UsersModule.
  // This will allow us to use the repository in the UsersService. It's mean that we can use the database in the UsersService.
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
