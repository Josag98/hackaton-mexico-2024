import { Test, TestingModule } from '@nestjs/testing';
import { HitosResolver } from './hitos.resolver';
import { HitosService } from './hitos.service';

describe('HitosResolver', () => {
  let resolver: HitosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HitosResolver, HitosService],
    }).compile();

    resolver = module.get<HitosResolver>(HitosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
