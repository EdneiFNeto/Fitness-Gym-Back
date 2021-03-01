import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class CreateStatusPayts1614626227621 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('payts', new TableColumn({
      name: 'state',
      type: 'boolean',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('payts', 'state');
  }
}
