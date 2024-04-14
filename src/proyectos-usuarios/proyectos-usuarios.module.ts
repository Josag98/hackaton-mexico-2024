import { Module } from '@nestjs/common';
import { ProyectosUsuariosService } from './proyectos-usuarios.service';
import { ProyectosUsuariosResolver } from './proyectos-usuarios.resolver';

@Module({
  providers: [ProyectosUsuariosResolver, ProyectosUsuariosService],
})
export class ProyectosUsuariosModule {}
