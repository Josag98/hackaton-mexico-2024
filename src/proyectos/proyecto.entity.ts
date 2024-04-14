

import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { EstadosProyecto, estados_proyecto } from './enums/estados-proyecto.enum';



@Entity('Proyectos')
@ObjectType()
export class Proyecto {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'PK_Proyecto',
  })
  @Field(() => ID)
  proyecto_id: string;

  @Column('text')
  @Field({ description: '' })
  nombre: string;

  @Column('text')
  @Field()
  descripcion: string;


  @Column('enum', { enum: estados_proyecto, default: estados_proyecto.en_progreso })
  @Field(() => EstadosProyecto)
  estado: estados_proyecto;


  @CreateDateColumn({ type: 'timestamp with time zone' })
  @Field(() => Date)
  fecha_registro: Date

  @Column('timestamp with time zone')
  @Field(() => Date)
  fecha_limite_recaudacion: Date

  @Column('float')
  @Field(() => Float)
  meta_recaudacion: number

  @Column('float', { default: 0 })
  @Field(() => Float)
  saldo: number

  @Column('timestamp with time zone')
  @Field(() => Date)
  fecha_limite_implementacion: Date


  @Column('uuid')
  @Field(() => ID)
  usuario_administrador_id: string


  @Column('uuid')
  @Field(() => ID)
  localidad_id: string

}
