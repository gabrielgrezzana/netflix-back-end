import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exceptions } from 'src/helpers/exceptions/exceptionClass';
import { Exception } from 'src/helpers/exceptions/exceptions';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserRepository {
  private Select = {
    id: true,
    name: true,
    cpf: false,
    email: true,
    password: false,
  };

  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.prisma.user.findMany({ select: this.Select });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async create(data: UserEntity): Promise<UserEntity> {
    try {
      return await this.prisma.user.create({ data, select: this.Select });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async findOne(id: string): Promise<UserEntity> {
    try {
      return await this.prisma.user.findFirstOrThrow({
        where: { id },
        select: this.Select,
      });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
        select: this.Select,
      });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async delete(id: string): Promise<UserEntity> {
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }
}
