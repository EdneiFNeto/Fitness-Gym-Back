import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class CreateTrainingStudents1614615056507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'trainings_students',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'student_id',
            type: 'varchar',
          },
          {
            name: 'training_id',
            type: 'varchar',
          },
          {
            name: 'repetitions',
            type: 'varchar',
          },
          {
            name: 'series',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey('trainings_students', new TableForeignKey({
      columnNames: ['student_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'students',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('trainings_students', new TableForeignKey({
      columnNames: ['training_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'trainings',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('trainings_students');
  }
}
