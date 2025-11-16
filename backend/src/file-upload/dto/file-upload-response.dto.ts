export class FileUploadResponseDto {
  id: number;
  filename: string;
  originalName: string;
  mimeType: string;
  size: string; // Changed from bigint to string for JSON serialization
  url: string;
  storage: string;
  createdAt: Date;
  updatedAt: Date;
}
