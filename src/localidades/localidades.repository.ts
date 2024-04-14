
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm";
import { Localidad } from "./localidad.entity";

export class LocalidadesRepository extends Repository<Localidad> {

  constructor(
    @InjectRepository(Localidad)
    private localidadRepository: Repository<Localidad>,
  ) {
    super(
      localidadRepository.target,
      localidadRepository.manager,
      localidadRepository.queryRunner,
    );
  }

}
