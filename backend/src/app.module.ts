import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AwConceptsModule } from './aw-concepts/aw-concepts.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [
    // Load .env globally
    ConfigModule.forRoot({ isGlobal: true }),

    // Prisma module for MySQL connection
    PrismaModule,

    // Your feature module for jk_ops_aw_concept
    AwConceptsModule,

    // File upload module
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
