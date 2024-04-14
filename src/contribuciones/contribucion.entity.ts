

import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('Contribuciones')
@ObjectType()
export class Contribucion {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'PK_Contribucion',
  })
  @Field(() => ID)
  contribucion_id: string;

  @Column('uuid')
  @Field(() => ID)
  usuario_id: string

  @Column('float')
  @Field()
  monto: number

  @Column('uuid')
  @Field(() => ID)
  proyecto_id: string


  @CreateDateColumn({ type: 'timestamp with time zone' })
  @Field(() => Date)
  fecha_registro: Date

}
