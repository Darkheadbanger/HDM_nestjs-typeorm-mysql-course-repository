// Import crud decorators
import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
// Imort injectrepository decorator

@Controller('users')
export class UsersController {
  // Comment interagir avec la base de données, il faut injecter le repository de la base de données dans le controller.

  // Define routes here for the users module
  @Get()
  getUsers() {
    return 'Get all users';
  }

  @Post()
  createUser() {
    return 'Create a user';
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
