import { Injectable } from '@nestjs/common';

@Injectable()
export class OtherAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
