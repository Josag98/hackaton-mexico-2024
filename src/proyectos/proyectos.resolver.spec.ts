import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosResolver } from './proyectos.resolver';
import { ProyectosService } from './proyectos.service';

describe('ProyectosResolver', () => {
  let resolver: ProyectosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosResolver, ProyectosService],
    }).compile();

    resolver = module.get<ProyectosResolver>(ProyectosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
