import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams } from 'src/utils/createUser';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  // This constructor with InjectRepository decorator is used to interact with the database.
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Create the business logic here
  findUser() {}

  createUser(userDetails: CreateUserParams): Promise<User> {
    console.log(userDetails);
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date().toISOString(),
    });
    return this.userRepository.save(newUser);
    // La variable newUser est un objet de type User. Cela sert à créer un nouvel utilisateur.
  }
}
