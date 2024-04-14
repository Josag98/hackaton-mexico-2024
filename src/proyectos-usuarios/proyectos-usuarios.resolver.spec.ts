import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosUsuariosResolver } from './proyectos-usuarios.resolver';
import { ProyectosUsuariosService } from './proyectos-usuarios.service';

describe('ProyectosUsuariosResolver', () => {
  let resolver: ProyectosUsuariosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosUsuariosResolver, ProyectosUsuariosService],
    }).compile();

    resolver = module.get<ProyectosUsuariosResolver>(ProyectosUsuariosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
