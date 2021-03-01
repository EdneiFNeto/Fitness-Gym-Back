import Training from '@entities/Training';
import Student from '@entities/Student';
import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('trainings_students')
export default class TrainingStudent {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  student_id: string;

  @Column()
  training_id: string;

  @Column()
  repetitions: string;

  @Column()
  series: string;

  @ManyToOne(() => Student, { eager: true })
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Training, { eager: true })
  @JoinColumn({ name: 'training_id' })
  training: Training;
}
