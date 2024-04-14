import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class CreateLocalidadInput {

  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string

  @Field()
  @IsString()
  @IsNotEmpty()
  estado: string

  @Field()
  @IsString()
  @IsNotEmpty()
  pais: string
}
