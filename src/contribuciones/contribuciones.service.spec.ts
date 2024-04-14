import { Test, TestingModule } from '@nestjs/testing';
import { ContribucionesService } from './contribuciones.service';

describe('ContribucionesService', () => {
  let service: ContribucionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContribucionesService],
    }).compile();

    service = module.get<ContribucionesService>(ContribucionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
