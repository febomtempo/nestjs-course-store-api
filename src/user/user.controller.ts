import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/ListUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.id = uuid();
    userEntity.name = userData.name;
    userEntity.email = userData.email;
    userEntity.password = userData.password;

    this.userRepository.save(userEntity);
    return {
      user: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'User created!',
    };
  }

  @Get()
  async listUsers() {
    const savedUsers = await this.userRepository.list();
    const usersList = savedUsers.map(
      (user) => new ListUserDTO(user.id, user.name),
    );
    return usersList;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, newData);

    return {
      user: updatedUser,
      message: 'User Updated',
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    const deletedUser = await this.userRepository.remove(id);

    return {
      user: deletedUser,
      message: 'User Deleted!',
    };
  }
}
