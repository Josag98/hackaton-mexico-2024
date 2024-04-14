

import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm";
import { Proyecto } from "./proyecto.entity";

export class ProyectosRepository extends Repository<Proyecto> {

  constructor(
    @InjectRepository(Proyecto)
    private proyectosRepository: Repository<Proyecto>,
  ) {
    super(
      proyectosRepository.target,
      proyectosRepository.manager,
      proyectosRepository.queryRunner,
    );
  }

}
