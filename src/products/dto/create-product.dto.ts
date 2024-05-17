import { IsString, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @Min(0)
  price: number;
}
