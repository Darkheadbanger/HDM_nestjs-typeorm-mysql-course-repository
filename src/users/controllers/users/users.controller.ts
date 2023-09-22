// Import crud decorators
import { Controller, Get, Post, Delete, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
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
