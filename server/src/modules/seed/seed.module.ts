import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { PrismaService } from '../../shared/database/prisma.service';

@Module({
  providers: [SeedService, PrismaService],
})
export class SeedModule {}
