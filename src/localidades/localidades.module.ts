import { Module } from '@nestjs/common';
import { LocalidadesService } from './localidades.service';
import { LocalidadesResolver } from './localidades.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Localidad } from './localidad.entity';
import { LocalidadesRepository } from './localidades.repository';

@Module({
  providers: [LocalidadesResolver, LocalidadesService, LocalidadesRepository],
  imports: [TypeOrmModule.forFeature([Localidad])],
  exports: [TypeOrmModule, LocalidadesService]
})
export class LocalidadesModule { }
