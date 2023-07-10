import { Injectable } from '@nestjs/common/decorators';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async isMailExist(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);
    return possibleUser !== undefined;
  }

  private searchById(id: string) {
    const possibleUser = this.users.find((savedUser) => savedUser.id === id);
    if (!possibleUser) {
      throw new Error('User not found!');
    }
    return possibleUser;
  }

  async update(id: string, newData: Partial<UserEntity>) {
    const user = this.searchById(id);
    Object.entries(newData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      user[key] = value;
    });
    return user;
  }

  async remove(id: string) {
    const user = this.searchById(id);
    this.users = this.users.filter((savedUser) => savedUser.id !== id);
    return user;
  }
}
