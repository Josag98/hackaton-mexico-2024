import { Test, TestingModule } from '@nestjs/testing';
import { HitosService } from './hitos.service';

describe('HitosService', () => {
  let service: HitosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HitosService],
    }).compile();

    service = module.get<HitosService>(HitosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
