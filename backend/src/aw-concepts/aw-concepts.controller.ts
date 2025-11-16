import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  Query
} from '@nestjs/common';
import { AwConceptsService } from './aw-concepts.service';
import { CreateAwConceptDto } from './dto/create-aw-concept.dto';
import { UpdateAwConceptDto } from './dto/update-aw-concept.dto';

@Controller('aw-concepts')
export class AwConceptsController {
  constructor(private readonly service: AwConceptsService) {}

  // Helper function to format date to YYYY-MM-DD
  private formatDate(date: Date | string | null): string | null {
    if (!date) return null;
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  // Helper function to format concept object
  private formatConcept(concept: any) {
    return {
      ...concept,
      requested_date: this.formatDate(concept.requested_date),
      required_date: this.formatDate(concept.required_date),
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateAwConceptDto) {
    const concept = await this.service.create(dto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'AW Concept created successfully',
      data: this.formatConcept(concept),
    };
  }

  @Get()
  async findAll(@Query('search') search?: string) {
    const concepts = await this.service.findAll(search);
    return {
      statusCode: HttpStatus.OK,
      message: 'AW Concepts retrieved successfully',
      data: concepts.map(concept => this.formatConcept(concept)),
      count: concepts.length,
    };
  }

  @Get('artwork-type/:type')
  async findByArtworkType(@Param('type') type: string) {
    const concepts = await this.service.findByArtworkType(type);
    return {
      statusCode: HttpStatus.OK,
      message: `AW Concepts with artwork type '${type}' retrieved successfully`,
      data: concepts.map(concept => this.formatConcept(concept)),
      count: concepts.length,
    };
  }

  @Get('client/:name')
  async findByClient(@Param('name') name: string) {
    const concepts = await this.service.findByClient(name);
    return {
      statusCode: HttpStatus.OK,
      message: `AW Concepts for client '${name}' retrieved successfully`,
      data: concepts.map(concept => this.formatConcept(concept)),
      count: concepts.length,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const concept = await this.service.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'AW Concept retrieved successfully',
      data: this.formatConcept(concept),
    };
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAwConceptDto) {
    const concept = await this.service.update(id, dto);
    return {
      statusCode: HttpStatus.OK,
      message: 'AW Concept updated successfully',
      data: this.formatConcept(concept),
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.service.remove(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'AW Concept deleted successfully',
    };
  }
}
