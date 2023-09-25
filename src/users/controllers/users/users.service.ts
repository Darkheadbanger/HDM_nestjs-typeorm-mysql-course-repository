import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams } from 'src/utils/createUser';
import { UpdateUserParams } from 'src/utils/updateUser';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  // This constructor with InjectRepository decorator is used to interact with the database.
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Create the business logic here
  findUser() {
    return this.userRepository.find();
  }

  createUser(userDetails: CreateUserParams) {
    console.log('userDetails', userDetails);
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date().toISOString(),
    });
    return this.userRepository.save(newUser);
    // La variable newUser est un objet de type User. Cela sert à créer un nouvel utilisateur.
  }

  updateUserById(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }
}
