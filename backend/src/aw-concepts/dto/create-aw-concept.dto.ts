import { IsInt, IsOptional, IsDateString, IsString, Length, MaxLength } from 'class-validator';

export class CreateAwConceptDto {
  @IsOptional() @IsInt()
  requested_by?: number;

  @IsOptional() @IsDateString()
  requested_date?: string;

  @IsOptional() @IsDateString()
  required_date?: string;

  @IsOptional() @IsString() @Length(0, 15)
  artwork_type?: string;

  @IsOptional() @IsString() @Length(0, 15)
  jobtype?: string;

  @IsOptional() @IsString() @Length(0, 15)
  previous_design?: string;

  @IsOptional() @IsString() @Length(0, 15)
  design_category?: string;

  @IsOptional() @IsString() @Length(0, 15)
  print_category?: string;

  @IsOptional() @IsString() @Length(0, 15)
  pattern_number?: string;

  @IsOptional() @IsString() @Length(0, 15)
  pattern_name?: string;

  @IsOptional() @IsString() @MaxLength(4000) // practical limit
  client_name?: string;

  @IsOptional() @IsString() @Length(0, 15)
  template_type?: string;

  @IsOptional() @IsString() @MaxLength(20000)
  design_descript?: string;

  @IsOptional() @IsString() @Length(0, 3)
  name?: string;

  @IsOptional() @IsString() @Length(0, 3)
  numbers?: string;

  @IsOptional() @IsString() @MaxLength(20000)
  design_descripti?: string;
}
