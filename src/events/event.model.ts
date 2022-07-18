/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Event extends Model<Event> {
  @Column({
    type: DataType.DATE(),
    allowNull: false,
  })
  eventDate: Date;
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  accountable: string;
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  city: string;
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  state: string;
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  address: string;
  @Column({
    type: DataType.STRING(),
  })
  complement?: string;
  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  phone: number;
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  email: string;
}
