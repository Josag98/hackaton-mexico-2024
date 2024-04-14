import { Repository } from "typeorm"
import { Usuario } from "./usuario.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class UsuariosRepository extends Repository<Usuario> {

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {
    super(
      usuarioRepository.target,
      usuarioRepository.manager,
      usuarioRepository.queryRunner,
    );
  }

}
