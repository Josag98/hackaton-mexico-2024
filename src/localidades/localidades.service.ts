import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { LocalidadesRepository } from './localidades.repository';
import { CreateLocalidadInput } from './dto/create-localidad.input';
import { FindAllLocalidadesInput } from './dto/find-all-localidades.input';

@Injectable()
export class LocalidadesService {
  constructor(
    private readonly repo: LocalidadesRepository
  ) { }


  async create(request: CreateLocalidadInput) {
    const exists = await this.repo.exists({ where: request })

    if (exists) throw new BadRequestException("Ya existe una localidad con los datos proporcionados")

    const newLocalidad = this.repo.create(request)

    return await this.repo.save(newLocalidad)
  }

  async findAll(request?: FindAllLocalidadesInput) {
    return await this.repo.find({ where: request })
  }

  async findOneById(localidad_id: string) {

    try {
      return await this.repo.findOneOrFail({ where: { localidad_id } })
    } catch (error) {
      throw new NotFoundException(`No se ha encontrado el usuario con el id ${localidad_id}`)
    }
  }
}
