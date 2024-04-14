import { Module, forwardRef } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosResolver } from './usuarios.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { UsuariosRepository } from './usuarios.repository';
import { ProyectosModule } from 'src/proyectos/proyectos.module';
import { LocalidadesModule } from 'src/localidades/localidades.module';
import { ContribucionesModule } from 'src/contribuciones/contribuciones.module';

@Module({
  providers: [UsuariosResolver, UsuariosService, UsuariosRepository],
  imports: [TypeOrmModule.forFeature([Usuario]), forwardRef(() => ProyectosModule), LocalidadesModule, forwardRef(() => ContribucionesModule)],
  exports: [TypeOrmModule, UsuariosService]
})
export class UsuariosModule { }
