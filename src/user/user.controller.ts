import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DataProcessing } from 'src/helpers/exceptions/dataprocessing';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({
    summary: 'Todos usuários',
  })
  @Get()
  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      DataProcessing(err);
    }
  }

  @ApiOperation({
    summary: 'Cadastrar novo usuário',
  })
  @Post()
  async create(@Body() dto: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {
      DataProcessing(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um usuário pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      DataProcessing(err);
    }
  }

  @ApiOperation({
    summary: 'Alterar um usuário pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<UserEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      DataProcessing(err);
    }
  }

  @ApiOperation({
    summary: 'Deletar um usuário pelo ID',
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
