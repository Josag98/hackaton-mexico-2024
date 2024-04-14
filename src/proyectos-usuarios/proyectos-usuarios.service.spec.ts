import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosUsuariosService } from './proyectos-usuarios.service';

describe('ProyectosUsuariosService', () => {
  let service: ProyectosUsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosUsuariosService],
    }).compile();

    service = module.get<ProyectosUsuariosService>(ProyectosUsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
