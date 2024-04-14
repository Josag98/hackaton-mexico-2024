import { Field, ID, InputType } from "@nestjs/graphql"
import { IsDate, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID } from "class-validator"



@InputType()
export class CreateProyectoInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string


  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string


  @Field(() => Date)
  @IsDate()
  fecha_limite_recaudacion: Date

  @Field()
  @IsNumber()
  @IsPositive()
  meta_recaudacion: number


  @Field(() => Date)
  @IsDate()
  fecha_limite_implementacion: Date

  @Field(() => ID)
  @IsUUID()
  usuario_administrador_id: string

  @Field(() => ID)
  @IsUUID()
  localidad_id: string
}
