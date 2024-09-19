import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { ShiftRepository } from 'src/shared/database/repositories/shift.repository';

@Injectable()
export class ShiftService {
  constructor(private readonly shiftRepository: ShiftRepository) {}

  create(createShiftDto: CreateShiftDto) {
    return this.shiftRepository.create({
      data: {
        startDatetime: createShiftDto.startDatetime,
        endDatetime: createShiftDto.endDatetime,
        healthUnit: {
          connect: { id: createShiftDto.healthUnitId },
        },
      },
      include: {
        healthUnit: true,
        Applications: true,
      },
    });
  }

  findById(id: string) {
    return this.shiftRepository.findMany({
      where: { healthUnitId: id },
    });
  }

  findAll() {
    return this.shiftRepository.findAll();
  }
}
