import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return `servidor rodando em ${process.env.PORT}`;
  }
}
