import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from './users.service';

// Imort injectrepository decorator
@Controller('users')
export class UsersController {
  // Inject the UsersService into the controller
  constructor(private userService: UsersService) {}
  // Comment interagir avec la base de données, il faut injecter le repository de la base de données dans le controller.

  // Define routes here for the users module
  @Get()
  getUsers() {
    return 'Get all users';
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Put()
  replaceUser() {
    return 'Replace a user';
  }

  @Delete()
  deleteUser() {
    return 'Delete a user';
  }
}
