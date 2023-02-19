import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @ApiProperty({
    description: 'Titulo do filme',
    example: 'Aleatório',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do filme',
    example: 'Filme de aventura',
  })
  description: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do filme',
    example: 'https://www.example.com.br/exemple.jpg',
  })
  image: string;
}
