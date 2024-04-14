import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsStrongPassword } from "class-validator";



export class LogInDTO {

  @IsEmail()
  email: string

  @IsStrongPassword({ minLength: 8, minNumbers: 1, minSymbols: 1, minLowercase: 1, minUppercase: 1 })
  password: string
}
