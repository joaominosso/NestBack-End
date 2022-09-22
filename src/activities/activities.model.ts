/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Activities extends Model<Activities> {
  @Column({
    type: DataType.ARRAY(),
    allowNull: false,
  })
  students: Array<string>;
  @Column({
    type: DataType.ARRAY(),
    allowNull: false,
  })
  selectedActivities: Array<number>;
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  TeacherName: string;
}
