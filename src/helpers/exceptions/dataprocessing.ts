import {
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Exception, IException } from './exceptions';

export function DataProcessing({ message, exception }: IException) {
  if (
    exception === Exception.InvalidData ||
    exception === Exception.NotFoundData
  ) {
    throw new BadRequestException(message ? message : 'dados inválidos');
  }

  if (exception === Exception.DatabaseException) {
    throw new InternalServerErrorException(
      message ? message : 'Erro no banco de dados',
    );
  }

  if (exception === Exception.UnauthorizedException) {
    throw new UnauthorizedException(
      message ? message : 'Você não tem permissão',
    );
  }

  if (exception === Exception.NotFoundException) {
    throw new NotFoundException(message ? message : 'Registro não encontrado');
  }

  if (exception === Exception.UnprocessableEntityException) {
    throw new UnprocessableEntityException(
      message ? message : 'erro de operacao',
    );
  }
}
