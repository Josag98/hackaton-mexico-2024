import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/signIn.dto';
import { LogInDTO } from './dto/logIn.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }
  @Post('signIn')
  async signIn(@Body() request: SignInDTO) {
    return await this.authService.signIn(request)
  }


  @Post('logIn')
  async logIn(@Body() request: LogInDTO) {
    return await this.authService.logIn(request)
  }

}
