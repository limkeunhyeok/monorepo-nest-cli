import { LibService } from '@common/lib';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class OtherAppController {
  constructor(private readonly otherAppService: LibService) {}

  @Get()
  getHello(): string {
    return this.otherAppService.otherApp();
  }
}
