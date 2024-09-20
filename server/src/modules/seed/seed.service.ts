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

    const healthUnits = [];
    for (let i = 1; i <= 30; i++) {
      const healthUnit = await this.prisma.healthUnit.create({
        data: {
          name: `Hospital-${i}`,
        },
      });
      healthUnits.push(healthUnit);
    }

    for (const healthUnit of healthUnits) {
      // Shifts valid under the specified conditions
      const futureDate1 = new Date();
      futureDate1.setDate(futureDate1.getDate() + 1); // start 1 day from now
      const futureDate2 = new Date(futureDate1);
      futureDate2.setDate(futureDate2.getDate() + 2); // end 3 days from now

      const futureDate3 = new Date();
      futureDate3.setDate(futureDate3.getDate() + 4); // start 4 days from now
      const futureDate4 = new Date(futureDate3);
      futureDate4.setDate(futureDate4.getDate() + 1); // end 5 days from now

      await this.prisma.shift.create({
        data: {
          healthUnitId: healthUnit.id,
          startDatetime: futureDate1,
          endDatetime: futureDate2,
        },
      });

      await this.prisma.shift.create({
        data: {
          healthUnitId: healthUnit.id,
          startDatetime: futureDate3,
          endDatetime: futureDate4,
        },
      });
    }

    console.log('Database seeded with users, health units, and valid shifts!');
  }
}
