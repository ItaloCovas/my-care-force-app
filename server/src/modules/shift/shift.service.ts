import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { ShiftRepository } from 'src/shared/database/repositories/shift.repository';

@Injectable()
export class ShiftService {
  constructor(private readonly shiftRepository: ShiftRepository) {}

  create(createShiftDto: CreateShiftDto) {
    return this.shiftRepository.create({
      data: createShiftDto,
      include: {
        healthUnit: true,
        Applications: true,
      },
    });
  }

  findAll() {
    return this.shiftRepository.findAll();
  }
}
