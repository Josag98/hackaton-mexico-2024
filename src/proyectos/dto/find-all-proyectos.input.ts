import { Field, ID, InputType } from "@nestjs/graphql";
import { EstadosProyecto, estados_proyecto } from "../enums/estados-proyecto.enum";
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";


@InputType()
export class FindAllProyectosInput {

  @Field(() => [ID], { nullable: true })
  @IsUUID('all', { each: true })
  @IsOptional()
  proyecto_id?: string[]

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string

  @Field(() => EstadosProyecto, { nullable: true })
  @IsEnum(estados_proyecto)
  @IsOptional()
  estado?: estados_proyecto

  @Field(() => [ID], { nullable: true })
  @IsUUID('all', { each: true })
  @IsOptional()
  usuario_administrador_id?: string[]

  @Field(() => ID, { nullable: true })
  @IsUUID()
  @IsOptional()
  comunidad_id?: string
}
