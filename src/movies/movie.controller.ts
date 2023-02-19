import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DataProcessing } from 'src/helpers/exceptions/dataprocessing';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MovieService } from './movie.service';

@ApiTags('Movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly service: MovieService) {}

  @ApiOperation({
    summary: 'todos os filmes',
  })
  @Get()
  async findAll(): Promise<MovieEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      DataProcessing(err);
    }
  }

  @ApiOperation({
    summary: 'Adicionar um filme',
  })
  @Post()
  async create(@Body() dto: CreateMovieDto): Promise<MovieEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {
      DataProcessing(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um filme pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MovieEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      DataProcessing(err);
    }
  }

  @ApiOperation({
    summary: 'Editar um filme pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateMovieDto,
  ): Promise<MovieEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      DataProcessing(err);
    }
  }

  @ApiOperation({
    summary: 'deletar um filme pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      await this.service.delete(id);
    } catch (err) {
      DataProcessing(err);
    }
  }
}
