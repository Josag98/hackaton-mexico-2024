import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


@InputType()
export class FindAllLocalidadesInput {
  @Field(() => ID, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  localidad_id?: string

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  estado?: string

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  pais?: string



}



