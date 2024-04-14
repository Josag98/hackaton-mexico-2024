import { Test, TestingModule } from '@nestjs/testing';
import { LocalidadesResolver } from './localidades.resolver';
import { LocalidadesService } from './localidades.service';

describe('LocalidadesResolver', () => {
  let resolver: LocalidadesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalidadesResolver, LocalidadesService],
    }).compile();

    resolver = module.get<LocalidadesResolver>(LocalidadesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
