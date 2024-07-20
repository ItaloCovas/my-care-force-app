import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  shiftId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
