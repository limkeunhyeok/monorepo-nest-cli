import { LibModule } from '@common/lib';
import { Module } from '@nestjs/common';
import { OtherAppController } from './other-app.controller';
import { OtherAppService } from './other-app.service';

@Module({
  imports: [LibModule],
  controllers: [OtherAppController],
  providers: [OtherAppService],
})
export class OtherAppModule {}
