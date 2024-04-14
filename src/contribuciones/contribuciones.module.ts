import { Module, forwardRef } from '@nestjs/common';
import { ContribucionesService } from './contribuciones.service';
import { ContribucionesResolver } from './contribuciones.resolver';
import { ContribucionesRepository } from './contribuciones.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contribucion } from './contribucion.entity';
import { ProyectosModule } from 'src/proyectos/proyectos.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  providers: [ContribucionesResolver, ContribucionesService, ContribucionesRepository],
  imports: [TypeOrmModule.forFeature([Contribucion]), ProyectosModule, forwardRef(() => UsuariosModule)],
  exports: [TypeOrmModule, ContribucionesService]
})
export class ContribucionesModule { }
