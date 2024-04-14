
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('Usuarios')
@ObjectType()
export class Usuario {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'PK_Usuario',
  })
  @Field(() => ID)
  usuario_id: string;

  @Column('text')
  @Field({ description: '' })
  nombre: string;

  @Column('text')
  @Field()
  apellido_materno: string;

  @Column('text')
  @Field()
  apellido_paterno: string;

  @Column('varchar', { unique: true, length: 50 })
  @Field()
  usuario: string;

  @Column('text')
  password: string;

  @Column('varchar', { length: 100 })
  @Field({ description: '' })
  email: string;

  @Column('varchar', { length: 50 })
  @Field()
  telefono: string;

  @Column('bool', { default: false })
  @Field(() => Boolean)
  eliminado: boolean;


  @CreateDateColumn({ type: 'timestamp with time zone' })
  @Field(() => Date)
  fecha_registro: Date;


  @Column('text')
  @Field()
  calle: string;


  @Column('text', { nullable: true })
  @Field(() => String, { nullable: true })
  numero_interior?: string;

  @Column('text')
  @Field()
  numero_exterior: string;


  @Column('text')
  @Field()
  colonia: string;


  @Column('text')
  @Field()
  municipio: string;

  @Column('text')
  @Field()
  cp: string;

  @Column('timestamp with time zone')
  @Field()
  fecha_nacimiento: Date;

  @Column('uuid')
  @Field(() => ID)
  localidad_id: string
}
