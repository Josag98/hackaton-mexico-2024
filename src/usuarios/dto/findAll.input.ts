import { Field, ID, InputType } from "@nestjs/graphql";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsPhoneNumber, IsString, IsUUID } from "class-validator";


@InputType()
export class FindAllInput {

  @Field(() => ID, { nullable: true })
  @IsUUID()
  @IsOptional()
  usuario_id?: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @Field({ nullable: true })

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  apellido_materno?: string;


  @Field({ nullable: true })

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  apellido_paterno?: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  usuario?: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  correo?: string;

  @Field({ nullable: true })
  @IsPhoneNumber('MX')
  @IsOptional()
  telefono?: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  eliminado?: boolean;


  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  calle?: string;


  @Field({ nullable: true })
  @IsNumberString()
  @IsOptional()
  numero_interior?: string;

  @Field({ nullable: true })
  @IsNumberString()
  @IsOptional()
  numero_exterior?: string;


  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  colonia?: string;


  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  municipio?: string;

  @Field({ nullable: true })
  @IsNumberString()
  @IsOptional()
  cp?: string;

}
