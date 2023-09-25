import {
  Controller,
  Get,
  Post,
  // Delete,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
import { UsersService } from './users.service';

// Imort injectrepository decorator
@Controller('users')
export class UsersController {
  // Inject the UsersService into the controller
  constructor(private userService: UsersService) {}
  // Comment interagir avec la base de données, il faut injecter le repository de la base de données dans le controller.

  // Define routes here for the users module
  @Get()
  async getUsers() {
    // Si on ne fait rien d'autres, on aura pas besoin de async et await car on ne fait que retourner la valeur de la fonction findUser() du service.
    const users = await this.userService.findUser();
    return users;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Put(':id')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    this.userService.updateUserById(id, updateUserDto);
  }
}
