import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams } from 'src/utils/createUser';
import { UpdateUserParams } from 'src/utils/updateUser';
import { CreateUserProfileParams } from 'src/utils/createUserProfile';
import { Repository } from 'typeorm';
import { Profile } from 'src/typeorm/entities/Profile';

@Injectable()
export class UsersService {
  // This constructor with InjectRepository decorator is used to interact with the database.
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
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

  deleteUserById(id: number) {
    return this.userRepository.delete({ id });
  }

  // C'est ici one to one relationship
  async createUserProfile(
    id: number,
    createUserProfileDetails: CreateUserProfileParams,
  ) {
    const user: User = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException(
        'User not found, can not create profile',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newProfile: Profile = this.profileRepository.create(
      createUserProfileDetails,
    );
    const savedProfile: Profile = await this.profileRepository.save(newProfile);
    // user.profile = newProfile;
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }
}
