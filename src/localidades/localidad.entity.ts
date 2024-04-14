
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('Localidades')
@ObjectType()
export class Localidad {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'PK_Localidad',
  })
  @Field(() => ID)
  localidad_id: string;

  @Column('text')
  @Field({ description: '' })
  nombre: string;

  @Column('text')
  @Field()
  estado: string;


  @Column('text')
  @Field()
  pais: string;


  @CreateDateColumn({ type: 'timestamp with time zone' })
  @Field(() => Date)
  fecha_registro: Date

}
