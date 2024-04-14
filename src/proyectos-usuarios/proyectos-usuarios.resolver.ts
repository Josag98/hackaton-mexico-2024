import { Resolver } from '@nestjs/graphql';
import { ProyectosUsuariosService } from './proyectos-usuarios.service';

@Resolver()
export class ProyectosUsuariosResolver {
  constructor(private readonly proyectosUsuariosService: ProyectosUsuariosService) {}
}
