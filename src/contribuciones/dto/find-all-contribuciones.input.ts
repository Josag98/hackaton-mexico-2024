import { Field, ID, InputType } from "@nestjs/graphql"
import { IsOptional, IsUUID } from "class-validator"



@InputType()
export class FindAllContribucionesInput {

  @Field(() => [ID], { nullable: true })
  @IsUUID('all', { each: true })
  @IsOptional()
  contribucion_id?: string[]


  @Field(() => ID, { nullable: true })
  @IsUUID()
  @IsOptional()
  usuario_id?: string

  @Field(() => ID, { nullable: true })
  @IsUUID()
  @IsOptional()
  proyecto_id?: string
}
