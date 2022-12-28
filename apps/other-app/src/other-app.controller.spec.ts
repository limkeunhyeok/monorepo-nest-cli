import { Test, TestingModule } from '@nestjs/testing';
import { OtherAppController } from './other-app.controller';
import { OtherAppService } from './other-app.service';

describe('OtherAppController', () => {
  let otherAppController: OtherAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OtherAppController],
      providers: [OtherAppService],
    }).compile();

    otherAppController = app.get<OtherAppController>(OtherAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(otherAppController.getHello()).toBe('Hello World!');
    });
  });
});
