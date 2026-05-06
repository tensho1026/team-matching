import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function createTypeOrmOptions(
  configService: ConfigService,
): TypeOrmModuleOptions {
  const databaseUrl = configService.get<string>('DATABASE_URL');

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is required to connect to Neon.');
  }

  const normalizedDatabaseUrl = new URL(databaseUrl);

  if (normalizedDatabaseUrl.searchParams.get('sslmode') === 'require') {
    normalizedDatabaseUrl.searchParams.set('sslmode', 'verify-full');
  }

  return {
    type: 'postgres',
    url: normalizedDatabaseUrl.toString(),
    autoLoadEntities: true,
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}
