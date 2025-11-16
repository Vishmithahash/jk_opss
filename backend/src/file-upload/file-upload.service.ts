import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FileUploadResponseDto } from './dto/file-upload-response.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileUploadService {
  constructor(private prisma: PrismaService) {}

  /**
   * Save file metadata to database after file is uploaded
   */
  async saveFileMetadata(
    file: Express.Multer.File,
    url: string,
  ): Promise<FileUploadResponseDto> {
    const fileUpload = await this.prisma.fileUpload.create({
      data: {
        filename: file.filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: BigInt(file.size),
        url: url,
        storage: 'LOCAL',
      },
    });

    return {
      ...fileUpload,
      size: fileUpload.size.toString(), // Convert BigInt to string
      storage: fileUpload.storage,
    };
  }

  /**
   * Get all uploaded files
   */
  async findAll(): Promise<FileUploadResponseDto[]> {
    const files = await this.prisma.fileUpload.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return files.map((file) => ({
      ...file,
      size: file.size.toString(), // Convert BigInt to string
      storage: file.storage,
    }));
  }

  /**
   * Get file by ID
   */
  async findOne(id: number): Promise<FileUploadResponseDto> {
    const file = await this.prisma.fileUpload.findUnique({
      where: { id },
    });

    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }

    return {
      ...file,
      size: file.size.toString(), // Convert BigInt to string
      storage: file.storage,
    };
  }

  /**
   * Get file path for download
   */
  async getFilePath(id: number): Promise<string> {
    const file = await this.findOne(id);
    const filePath = path.join(
      process.cwd(),
      'public',
      'uploads',
      file.filename,
    );

    // Check if file exists on disk
    if (!fs.existsSync(filePath)) {
      throw new NotFoundException(`File not found on disk`);
    }

    return filePath;
  }

  /**
   * Delete file from database and disk
   */
  async remove(id: number): Promise<{ message: string }> {
    const file = await this.findOne(id);
    const filePath = path.join(
      process.cwd(),
      'public',
      'uploads',
      file.filename,
    );

    // Delete from disk if exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete from database
    await this.prisma.fileUpload.delete({
      where: { id },
    });

    return { message: `File ${file.originalName} deleted successfully` };
  }
}
