
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm";
import { Contribucion } from "./contribucion.entity";

export class ContribucionesRepository extends Repository<Contribucion> {

  constructor(
    @InjectRepository(Contribucion)
    private contribucionesRepository: Repository<Contribucion>,
  ) {
    super(
      contribucionesRepository.target,
      contribucionesRepository.manager,
      contribucionesRepository.queryRunner,
    );
  }

}
