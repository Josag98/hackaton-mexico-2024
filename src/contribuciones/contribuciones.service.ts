import { Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { ContribucionesRepository } from './contribuciones.repository';
import { ProyectosService } from 'src/proyectos/proyectos.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { CreateContribucionInput } from './dto/create-contribucion.input';
import { FindAllContribucionesInput } from './dto/find-all-contribuciones.input';
import { FindOptionsWhere, In } from 'typeorm';

@Injectable()
export class ContribucionesService {
  constructor(
    private readonly repo: ContribucionesRepository,
    private readonly proyectosService: ProyectosService,

    @Inject(forwardRef(() => UsuariosService))
    private readonly usuariosService: UsuariosService
  ) { }


  async create(request: CreateContribucionInput) {
    const { monto, proyecto_id, usuario_id } = request



    await this.usuariosService.findOneById(usuario_id)

    await this.proyectosService.addSaldo(monto, proyecto_id)

    const newContribucion = this.repo.create(request)

    return await this.repo.save(newContribucion)
  }


  async findAll(request: FindAllContribucionesInput) {

    const findOptionsWhere: FindOptionsWhere<any> = { ...request };

    request.contribucion_id?.length > 0
      ? (findOptionsWhere['contribucion_id'] = In(request.contribucion_id))
      : delete findOptionsWhere['contribucion_id'];

    return await this.repo.find({ where: findOptionsWhere })
  }

  async findOneById(contribucion_id: string) {
    try {
      return await this.repo.findOneOrFail({ where: { contribucion_id } })
    } catch (error) {
      throw new NotFoundException(`No se ha encontrado el proyecto con el id ${contribucion_id}`)
    }

  }
}
