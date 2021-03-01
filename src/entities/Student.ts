import {
  Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('students')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  register_date: Date;
}
