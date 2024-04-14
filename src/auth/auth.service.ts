import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { SignInDTO } from './dto/signIn.dto';
import { LogInDTO } from './dto/logIn.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService
  ) { }



  async signIn(request: SignInDTO) {
    const newUsuario = await this.usuariosService.create(request)

    const payload = {
      usuario_id: newUsuario.usuario_id,
      localidad: newUsuario.localidad_id
    }

    const token = await this.jwtService.signAsync(payload, {
      audience: newUsuario.usuario_id,
      subject: newUsuario.usuario_id,
    });




    return {
      usuario: newUsuario,
      token
    }
  }

  async logIn(request: LogInDTO) {
    const { email, password } = request

    const usuario = await this.usuariosService.findOneByEmail(email)

    const isMatch = usuario != null ? await bcrypt.compare(password, usuario.password) : false

    if (!isMatch) throw new BadRequestException('El usuario o la contrasena son incorrectos')

    const payload = {
      usuario_id: usuario.usuario_id,
      localidad: usuario.localidad_id
    }

    const token = await this.jwtService.signAsync(payload, {
      audience: usuario.usuario_id,
      subject: usuario.usuario_id,
    });

    return {
      token,
      usuario
    }

  }
}
