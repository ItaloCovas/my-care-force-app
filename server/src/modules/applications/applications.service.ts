import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ApplicationsRepository } from 'src/shared/database/repositories/applications.repository';
import { ShiftRepository } from 'src/shared/database/repositories/shift.repository';

@Injectable()
export class ApplicationsService {
  constructor(
    private readonly applicationsRepository: ApplicationsRepository,
    private readonly shiftRepository: ShiftRepository,
  ) {}

  async create(createApplicationDto: CreateApplicationDto) {
    const { shiftId, userId } = createApplicationDto;

    const existingApplication = await this.applicationsRepository.findFirst({
      where: {
        shiftId: shiftId,
        userId: userId,
      },
    });

    if (existingApplication) {
      throw new ConflictException('User is already registered for this shift.');
    }

    const shift = await this.shiftRepository.findUnique({
      where: {
        id: shiftId,
      },
    });

    if (!shift) {
      throw new BadRequestException('Shift not found.');
    }

    if (shift.endDatetime <= new Date()) {
      throw new BadRequestException(
        'Cannot register for a shift that has already finished.',
      );
    }

    if (shift.startDatetime <= new Date()) {
      throw new BadRequestException(
        'Cannot register for a shift that has already started.',
      );
    }

    return this.applicationsRepository.create({
      data: createApplicationDto,
      include: {
        shift: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }

  findUserById(userId: string) {
    return this.applicationsRepository.findAll({
      where: {
        userId,
      },
      include: {
        shift: {
          include: {
            healthUnit: true,
          },
        },
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.applicationsRepository.findAll({
      include: {
        shift: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }
}
