import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async getHealth() {
    await this.dataSource.query('SELECT 1');

    return {
      status: 'ok',
      provider: 'neon',
    };
  }
}
