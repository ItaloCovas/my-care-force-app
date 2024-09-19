import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { HealthUnitService } from './health-unit.service';
import { CreateHealthUnitDto } from './dto/create-health-unit.dto';

@Controller('health-unit')
export class HealthUnitController {
  constructor(private readonly healthUnitService: HealthUnitService) {}

  @Post()
  create(@Body() createHealthUnitDto: CreateHealthUnitDto) {
    return this.healthUnitService.create(createHealthUnitDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.healthUnitService.findAll({ page, limit });
  }
}
