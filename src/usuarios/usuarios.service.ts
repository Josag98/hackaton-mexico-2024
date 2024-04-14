import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import { Usuario } from './usuario.entity';
import { FindAllInput } from './dto/findAll.input';
import * as bcrypt from 'bcrypt';
import { SignInDTO } from 'src/auth/dto/signIn.dto';
import { LocalidadesService } from 'src/localidades/localidades.service';
@Injectable()
export class UsuariosService {


  constructor(
    private readonly repo: UsuariosRepository,
    private readonly localidadesService: LocalidadesService) {

  }


  async create(request: SignInDTO): Promise<Usuario> {
    const { usuario, email, localidad_id } = request


    if (await this.repo.exists({ where: { usuario } })) throw new BadRequestException("El nombre de usuario ya esta registrado")

    if (await this.repo.exists({ where: { email } })) throw new BadRequestException("El correo ya esta registrado")

    await this.localidadesService.findOneById(localidad_id)

    const newUsuario = this.repo.create(request)

    newUsuario.password = await bcrypt.hash(request.password, 10);

    return await this.repo.save(newUsuario)
  }

  async findAll(request?: FindAllInput) {

    return await this.repo.find({ where: request })
  }

  async findOneById(usuario_id: string) {
    try {
      return await this.repo.findOneOrFail({ where: { usuario_id } })
    } catch (error) {
      throw new NotFoundException(`No se ha encontrado el usuario con el id ${usuario_id}`)
    }
  }

  async findOneByEmail(email: string) {
    return await this.repo.findOne({ where: { email } })
  }

}
