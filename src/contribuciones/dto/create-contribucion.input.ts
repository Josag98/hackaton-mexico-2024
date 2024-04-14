import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNumber, IsPositive, IsUUID } from "class-validator";


@InputType()
export class CreateContribucionInput {

  @Field(() => ID)
  @IsUUID()
  usuario_id: string

  @Field()
  @IsNumber()
  @IsPositive()
  monto: number

  @Field(() => ID)
  @IsUUID()
  proyecto_id: string

}
