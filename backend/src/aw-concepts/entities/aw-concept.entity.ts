import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'jk_ops_aw_concept' })
export class AwConcept {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  requested_by?: number;

  @Column({ type: 'datetime', nullable: true })
  requested_date?: Date;

  @Column({ type: 'datetime', nullable: true })
  required_date?: Date;

  @Column({ type: 'varchar', length: 15, nullable: true })
  artwork_type?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  jobtype?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  previous_design?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  design_category?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  print_category?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  pattern_number?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  pattern_name?: string;

  // MSSQL note: 'text' is deprecated. Use nvarchar(MAX) for long text.
  @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
  client_name?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  template_type?: string;

  @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
  design_description?: string;

  // You had 'name varchar(3)' in the sheet—keeping as-is:
  @Column({ type: 'varchar', length: 3, nullable: true })
  name?: string;

  @Column({ type: 'varchar', length: 3, nullable: true })
  numbers?: string;
}
