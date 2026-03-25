import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('health')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('db')
  getDatabaseHealth() {
    return this.databaseService.getHealth();
  }
}
