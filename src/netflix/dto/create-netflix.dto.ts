import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateNetflixDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está Adicionando um filme aos favorito',
    example: 'xxxxxxxxxx',
  })
  userId: string;

  @IsUUID()
  @ApiProperty({
    description: 'ID do filme que esta disponivel no catálogo',
    example: 'xxxxxxxxxxx',
  })
  movieId: string;
}
