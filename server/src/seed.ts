import { NestFactory } from '@nestjs/core';
import { SeedModule } from './modules/seed/seed.module';
import { SeedService } from './modules/seed/seed.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(SeedModule);
  const seedService = app.get(SeedService);
  await seedService.runSeed();
  await app.close();
}

bootstrap().catch((e) => {
  console.error(e);
  process.exit(1);
});
