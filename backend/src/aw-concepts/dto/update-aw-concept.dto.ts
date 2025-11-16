import { PartialType } from '@nestjs/mapped-types';
import { CreateAwConceptDto } from './create-aw-concept.dto';

export class UpdateAwConceptDto extends PartialType(CreateAwConceptDto) {}
