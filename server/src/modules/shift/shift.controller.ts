import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Post()
  create(@Body() createShiftDto: CreateShiftDto) {
    return this.shiftService.create(createShiftDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.shiftService.findById(id);
  }

  @Get()
  findAll() {
    return this.shiftService.findAll();
  }
}
