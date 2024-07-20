import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class Environment {
  @IsString()
  @IsNotEmpty()
  jwtSecret: string;
}

export const environment: Environment = plainToInstance(Environment, {
  jwtSecret: process.env.JWT_SECRET,
});

const errors = validateSync(environment);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
