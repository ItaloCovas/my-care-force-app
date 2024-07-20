import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class HealthUnitRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.HealthUnitCreateArgs) {
    return this.prismaService.healthUnit.create(createDto);
  }

  findAll(findManyDto: Prisma.HealthUnitFindManyArgs) {
    return this.prismaService.healthUnit.findMany(findManyDto);
  }
}
