import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  create(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationsService.create(createApplicationDto);
  }

  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get('/user')
  me(@ActiveUserId() userId: string) {
    return this.applicationsService.findUserById(userId);
  }
}
