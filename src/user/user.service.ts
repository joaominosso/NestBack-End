import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
  async getOne(userName: string): Promise<User> {
    return this.userModel.findOne({ where: { userName: userName } });
  }
  async createUser(user: User) {
    this.userModel.create(user);
    return 'Usuário Criado';
  }
  async updateEvent(user: User) {
    this.userModel.update(user, { where: { id: user.id } });
    return 'Usuário' + user.userName;
  }
  async deleteOne(userName: string) {
    const user = await this.getOne(userName);
    user.destroy();
  }
}
