import { Injectable } from '@nestjs/common';
import { CreateHealthUnitDto } from './dto/create-health-unit.dto';
import { HealthUnitRepository } from 'src/shared/database/repositories/health-unit.repository';

interface PaginationParams {
  page: number;
  limit: number;
}

@Injectable()
export class HealthUnitService {
  constructor(private readonly healthUnitRepository: HealthUnitRepository) {}

  create(createHealthUnitDto: CreateHealthUnitDto) {
    return this.healthUnitRepository.create({
      data: createHealthUnitDto,
    });
  }

  findAll({ page, limit }: PaginationParams) {
    const skip = (page - 1) * limit; // Mesmo que offset (no banco temos OFFSET)

    return this.healthUnitRepository.findAll({
      skip,
      take: Number(limit), // ParseIntPipe deu erro, talvez criando a DTO mencionada funcione
      select: {
        id: true,
        name: true,
      },
    });
  }
}
