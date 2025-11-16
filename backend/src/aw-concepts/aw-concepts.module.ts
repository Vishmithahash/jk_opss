import { Module } from '@nestjs/common';
import { AwConceptsService } from './aw-concepts.service';
import { AwConceptsController } from './aw-concepts.controller';

@Module({
  controllers: [AwConceptsController],
  providers: [AwConceptsService],
})
export class AwConceptsModule {}
