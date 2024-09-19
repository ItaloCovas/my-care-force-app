import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class ShiftRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ShiftCreateArgs) {
    return this.prismaService.shift.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.ShiftFindUniqueArgs) {
    return this.prismaService.shift.findUnique(findUniqueDto);
  }

  findMany(findManyDto: Prisma.ShiftFindManyArgs) {
    return this.prismaService.shift.findMany(findManyDto);
  }

  findAll() {
    return this.prismaService.shift.findMany();
  }
}
