import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Creme para o rosto' })
  name: string;

  @ApiProperty({ example: 10.75 })
  price: number;

  @ApiProperty({ example: 'https://url/image.jpg' })
  url: string;

  @ApiProperty({ example: 'creme revitalizador das propriedades da face' })
  description: string;
}
