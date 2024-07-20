import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHealthUnitDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
