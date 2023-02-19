import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/helpers/exceptions/exceptionClass';
import { Exception } from 'src/helpers/exceptions/exceptions';
import { AdminRepository } from './admin.repository';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateadminDto } from './dto/update-admin.dto';
import { AdminEntity } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(private readonly repository: AdminRepository) {}

  async findAll(): Promise<AdminEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async create(dto: CreateAdminDto): Promise<AdminEntity> {
    try {
      const adm: AdminEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(adm);
    } catch (err) {
      throw new Exceptions(Exception.InvalidData);
    }
  }

  async findOne(id: string): Promise<AdminEntity> {
    try {
      return await this.repository.findOne(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  async update(id: string, dto: UpdateadminDto): Promise<AdminEntity> {
    try {
      await this.findOne(id);
      const adm: Partial<AdminEntity> = { ...dto };
      return await this.repository.update(id, adm);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async delete(id: string) {
    try {
      await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}
