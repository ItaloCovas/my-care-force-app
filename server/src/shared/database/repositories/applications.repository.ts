import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class ApplicationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ApplicationsCreateArgs) {
    return this.prismaService.applications.create(createDto);
  }

  findFirst(findUniqueDto: Prisma.ApplicationsFindFirstArgs) {
    return this.prismaService.applications.findFirst(findUniqueDto);
  }

  findAll(findManyDto: Prisma.ApplicationsFindManyArgs) {
    return this.prismaService.applications.findMany(findManyDto);
  }
}
