import { BadRequestException, Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { ProyectosRepository } from './proyectos.repository';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LocalidadesService } from 'src/localidades/localidades.service';
import { CreateProyectoInput } from './dto/create-proyecto.input';
import { FindAllProyectosInput } from './dto/find-all-proyectos.input';
import { FindOptionsWhere, In } from 'typeorm';

@Injectable()
export class ProyectosService {


  constructor(
    private readonly repo: ProyectosRepository,

    @Inject(forwardRef(() => UsuariosService))
    private readonly usuariosService: UsuariosService,
    private readonly localidadesService: LocalidadesService
  ) { }



  async create(request: CreateProyectoInput) {

    const { nombre, localidad_id, usuario_administrador_id } = request
    const exist = await this.repo.exist({ where: { localidad_id, nombre } })

    if (exist) throw new BadRequestException("Ya existe un proyecto con el mismo nombre en su localidad")


    await this.localidadesService.findOneById(localidad_id)

    await this.usuariosService.findOneById(usuario_administrador_id)

    const newProyecto = this.repo.create(request)

    return await this.repo.save(newProyecto)
  }


  async findAll(request: FindAllProyectosInput) {

    const findOptionsWhere: FindOptionsWhere<any> = { ...request };

    request.proyecto_id?.length > 0
      ? (findOptionsWhere['proyecto_id'] = In(request.proyecto_id))
      : delete findOptionsWhere['proyecto_id'];

    request.usuario_administrador_id?.length > 0
      ? (findOptionsWhere['usuario_administrador_id'] = In(request.usuario_administrador_id))
      : delete findOptionsWhere['usuario_administrador_id'];
    return await this.repo.find({ where: findOptionsWhere })
  }

  async findOneById(proyecto_id: string) {

    try {
      return await this.repo.findOneOrFail({ where: { proyecto_id } })
    } catch (error) {
      throw new NotFoundException(`No se ha encontrado el proyecto con el id ${proyecto_id}`)
    }
  }

  async addSaldo(monto: number, proyecto_id: string) {
    const proyecto = await this.findOneById(proyecto_id)

    proyecto.saldo += monto

    await this.repo.save(proyecto)
  }
}
