import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateShiftDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  healthUnitId: string;

  @IsDateString()
  @IsNotEmpty()
  startDatetime: Date;

  @IsDateString()
  @IsNotEmpty()
  endDatetime: Date;
}
