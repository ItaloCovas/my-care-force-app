import { Injectable } from '@nestjs/common';
import { CreateHealthUnitDto } from './dto/create-health-unit.dto';
import { HealthUnitRepository } from 'src/shared/database/repositories/health-unit.repository';

@Injectable()
export class HealthUnitService {
  constructor(private readonly healthUnitRepository: HealthUnitRepository) {}

  create(createHealthUnitDto: CreateHealthUnitDto) {
    return this.healthUnitRepository.create({
      data: createHealthUnitDto,
    });
  }

  findAll() {
    return this.healthUnitRepository.findAll({
      select: {
        id: true,
        name: true,
      },
    });
  }
}
