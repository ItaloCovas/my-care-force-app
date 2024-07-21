import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class SeedService {
  constructor(private readonly prisma: PrismaService) {}

  async runSeed() {
    const hashedPassword1 = await hash('fabio12345', 12);

    await this.prisma.user.create({
      data: {
        name: 'Fabio Morais',
        email: 'fabiomorais1@example.com',
        password: hashedPassword1,
      },
    });

    const hashedPassword2 = await hash('joao12345', 12);

    await this.prisma.user.create({
      data: {
        name: 'João Apura',
        email: 'joaoapura@example.com',
        password: hashedPassword2,
      },
    });

    const healthUnit1 = await this.prisma.healthUnit.create({
      data: {
        name: 'Hospital Central',
      },
    });

    const healthUnit2 = await this.prisma.healthUnit.create({
      data: {
        name: 'Clinica do Sul',
      },
    });

    await this.prisma.shift.create({
      data: {
        healthUnitId: healthUnit1.id,
        startDatetime: new Date('2024-07-25T08:00:00Z'),
        endDatetime: new Date('2024-07-30T12:00:00Z'),
      },
    });

    await this.prisma.shift.create({
      data: {
        healthUnitId: healthUnit1.id,
        startDatetime: new Date('2024-07-09T09:00:00Z'),
        endDatetime: new Date('2024-07-25T16:00:00Z'),
      },
    });

    await this.prisma.shift.create({
      data: {
        healthUnitId: healthUnit1.id,
        startDatetime: new Date('2024-07-28T08:00:00Z'),
        endDatetime: new Date('2024-07-29T11:00:00Z'),
      },
    });

    await this.prisma.shift.create({
      data: {
        healthUnitId: healthUnit2.id,
        startDatetime: new Date('2024-07-24T02:00:00Z'),
        endDatetime: new Date('2024-07-30T12:00:00Z'),
      },
    });

    await this.prisma.shift.create({
      data: {
        healthUnitId: healthUnit2.id,
        startDatetime: new Date('2023-08-02T08:00:00Z'),
        endDatetime: new Date('2023-08-02T16:00:00Z'),
      },
    });

    // Não vou criar as aplicações para poderem fazer este fluxo no Front!

    // await this.prisma.applications.create({
    //   data: {
    //     shiftId: shift1.id,
    //     userId: user1.id,
    //   },
    // });

    // await this.prisma.applications.create({
    //   data: {
    //     shiftId: shift2.id,
    //     userId: user2.id,
    //   },
    // });

    console.log('Database seeded!');
  }
}
