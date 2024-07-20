import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { HealthUnitModule } from './modules/health-unit/health-unit.module';
import { ShiftModule } from './modules/shift/shift.module';
import { ApplicationsModule } from './modules/applications/applications.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    AuthModule,
    HealthUnitModule,
    ShiftModule,
    ApplicationsModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
