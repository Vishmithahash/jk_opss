import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAwConceptDto } from './dto/create-aw-concept.dto';
import { UpdateAwConceptDto } from './dto/update-aw-concept.dto';

@Injectable()
export class AwConceptsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAwConceptDto) {
    return this.prisma.awConcept.create({
      data: {
        ...dto,
        requested_date: dto.requested_date ? new Date(dto.requested_date) : undefined,
        required_date: dto.required_date ? new Date(dto.required_date) : undefined,
      },
    });
  }

  findAll(search?: string) {
    const where: any = {};

    if (search) {
      where.OR = [
        { client_name: { contains: search } },
        { pattern_name: { contains: search } },
        { artwork_type: { contains: search } },
        { jobtype: { contains: search } },
      ];
    }

    return this.prisma.awConcept.findMany({
      where,
      orderBy: { requested_date: 'desc' },
    });
  }

  async findOne(id: number) {
    const found = await this.prisma.awConcept.findUnique({ where: { id } });
    if (!found) throw new NotFoundException(`AwConcept ${id} not found`);
    return found;
  }

  findByArtworkType(artworkType: string) {
    return this.prisma.awConcept.findMany({
      where: { artwork_type: artworkType },
      orderBy: { requested_date: 'desc' },
    });
  }

  findByClient(clientName: string) {
    return this.prisma.awConcept.findMany({
      where: { client_name: { contains: clientName } },
      orderBy: { requested_date: 'desc' },
    });
  }

  async update(id: number, dto: UpdateAwConceptDto) {
    await this.findOne(id); // Check if exists
    return this.prisma.awConcept.update({
      where: { id },
      data: {
        ...dto,
        requested_date: dto.requested_date ? new Date(dto.requested_date) : undefined,
        required_date: dto.required_date ? new Date(dto.required_date) : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Check if exists
    await this.prisma.awConcept.delete({ where: { id } });
    return { deleted: true };
  }
}
