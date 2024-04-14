import { Test, TestingModule } from '@nestjs/testing';
import { ContribucionesResolver } from './contribuciones.resolver';
import { ContribucionesService } from './contribuciones.service';

describe('ContribucionesResolver', () => {
  let resolver: ContribucionesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContribucionesResolver, ContribucionesService],
    }).compile();

    resolver = module.get<ContribucionesResolver>(ContribucionesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
