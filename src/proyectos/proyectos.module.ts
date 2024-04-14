import { Module, forwardRef } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { ProyectosResolver } from './proyectos.resolver';
import { ProyectosRepository } from './proyectos.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { LocalidadesModule } from 'src/localidades/localidades.module';

@Module({
  providers: [ProyectosResolver, ProyectosService, ProyectosRepository],
  imports: [TypeOrmModule.forFeature([Proyecto]), forwardRef(() => UsuariosModule), LocalidadesModule],
  exports: [TypeOrmModule, ProyectosService]
})
export class ProyectosModule { }
