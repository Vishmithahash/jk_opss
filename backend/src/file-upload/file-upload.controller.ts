import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  BadRequestException,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import type { Response } from 'express';
import { extname } from 'path';
import { FileUploadService } from './file-upload.service';
import { FileUploadResponseDto } from './dto/file-upload-response.dto';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  /**
   * Upload a file (image or document)
   * POST /file-upload
   */
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
      fileFilter: (req, file, callback) => {
        // Accept images and documents
        const allowedMimeTypes = [
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'text/plain',
        ];

        if (allowedMimeTypes.includes(file.mimetype)) {
          callback(null, true);
        } else {
          callback(
            new BadRequestException(
              'Invalid file type. Only images and documents are allowed.',
            ),
            false,
          );
        }
      },
      limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
      },
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<FileUploadResponseDto> {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const url = `/uploads/${file.filename}`;
    return this.fileUploadService.saveFileMetadata(file, url);
  }

  /**
   * Get all uploaded files
   * GET /file-upload
   */
  @Get()
  async findAll(): Promise<FileUploadResponseDto[]> {
    return this.fileUploadService.findAll();
  }

  /**
   * Get file details by ID
   * GET /file-upload/:id
   */
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<FileUploadResponseDto> {
    return this.fileUploadService.findOne(id);
  }

  /**
   * Download file by ID
   * GET /file-upload/:id/download
   */
  @Get(':id/download')
  async downloadFile(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<void> {
    const filePath = await this.fileUploadService.getFilePath(id);
    const fileMetadata = await this.fileUploadService.findOne(id);

    // Set headers for download
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${fileMetadata.originalName}"`,
    );
    res.setHeader('Content-Type', fileMetadata.mimeType);

    // Send file
    res.sendFile(filePath);
  }

  /**
   * Delete file by ID
   * DELETE /file-upload/:id
   */
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    return this.fileUploadService.remove(id);
  }
}
