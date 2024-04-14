
import { Field, ID, InputType } from "@nestjs/graphql";
import { IsDate, IsEmail, IsNotEmpty, IsNumberString, IsPhoneNumber, IsString, IsStrongPassword, IsUUID } from "class-validator";



export class SignInDTO {



  @IsString()
  @IsNotEmpty()
  nombre: string;


  @IsString()
  @IsNotEmpty()
  apellido_materno: string;

  @IsString()
  @IsNotEmpty()
  apellido_paterno: string;


  @IsString()
  @IsNotEmpty()
  usuario: string;


  @IsStrongPassword({ minLength: 8, minNumbers: 1, minSymbols: 1, minLowercase: 1, minUppercase: 1 })
  password: string;

  @IsEmail()
  email: string;


  @IsPhoneNumber('MX')
  telefono: string;


  @IsString()
  @IsNotEmpty()
  calle: string;

  @IsUUID()
  localidad_id: string


  @IsNumberString()
  numero_interior?: string;


  @IsNumberString()
  numero_exterior: string;



  @IsString()
  @IsNotEmpty()
  colonia: string;



  @IsString()
  @IsNotEmpty()
  municipio: string;


  @IsNumberString()
  cp: string;

  @IsDate()
  fecha_nacimiento: Date;

}



