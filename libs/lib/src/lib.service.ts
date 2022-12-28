import { Injectable } from '@nestjs/common';

@Injectable()
export class LibService {
  myApp() {
    return 'myapp';
  }

  otherApp() {
    return 'otherApp';
  }
}
