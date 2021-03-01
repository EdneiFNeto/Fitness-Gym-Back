import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trainings')
export default class Training {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  type: string;
}
