import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { HealthUnitRepository } from './repositories/health-unit.repository';
import { ShiftRepository } from './repositories/shift.repository';
import { ApplicationsRepository } from './repositories/applications.repository';

@Global()
@Module({
  providers: [
    PrismaService,

    UsersRepository,
    HealthUnitRepository,
    ShiftRepository,
    ApplicationsRepository,
  ],
  exports: [
    UsersRepository,
    HealthUnitRepository,
    ShiftRepository,
    ApplicationsRepository,
  ],
})
export class DatabaseModule {}
