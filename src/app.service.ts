import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'servidor rodando em http://localhost:3000';
  }
}
