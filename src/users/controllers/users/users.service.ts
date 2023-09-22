import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  // This constructor with InjectRepository decorator is used to interact with the database.
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Create the business logic here
  findUser() {}

  createUser() {}
}
