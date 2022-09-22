/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Question extends Model<Question> {
  @Column({
    type: DataType.ARRAY(),
    allowNull: false,
  })
  answers: Array<string>;
  @Column({
    type: DataType.NUMBER(),
    allowNull: false,
  })
  corectResponse: number;
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  question: string;
}
