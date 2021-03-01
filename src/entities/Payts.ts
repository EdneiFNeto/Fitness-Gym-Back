import Student from '@entities/Student';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('payts')
export default class Payts {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  type: string;

  @Column()
  student_id: string;

  @Column()
  register_date: Date;

  @Column()
  state: boolean;

  @ManyToOne(() => Student, { eager: true })
  @JoinColumn({ name: 'student_id' })
  student: Student;
}
