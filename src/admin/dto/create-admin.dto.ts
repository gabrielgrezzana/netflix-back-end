import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @ApiProperty({
    description: 'nome de administrador',
    example: 'Gabriel',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Email',
    example: 'gabriel@email.com.br',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Senha',
    example: '123',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'Confirmação da senha',
    example: '123',
  })
  confirmPassword: string;
}
