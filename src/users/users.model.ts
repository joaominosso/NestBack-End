/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  userName: String;
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  email: String;
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  password: String;
}