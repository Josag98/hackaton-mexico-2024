import { Args, ID, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
import { FindAllInput } from './dto/findAll.input';
import { Proyecto } from 'src/proyectos/proyecto.entity';
import { ProyectosService } from 'src/proyectos/proyectos.service';
import { ContribucionesService } from 'src/contribuciones/contribuciones.service';
import { Inject, forwardRef } from '@nestjs/common';

@Resolver(Usuario)
export class UsuariosResolver {
  constructor(private readonly usuariosService: UsuariosService,
    private readonly proyectosService: ProyectosService,

    @Inject(forwardRef(() => ContribucionesService))
    private readonly contribucionesService: ContribucionesService) { }

  @Query(() => Usuario, { name: 'usuario' })
  async findOneById(@Args({ name: 'usuario_id', type: () => ID }) usuario_id: string) {

    return await this.usuariosService.findOneById(usuario_id)
  }


  @Query(() => [Usuario], { name: 'usuarios' })
  async findAll(@Args("FindAllInput", { nullable: true }) request: FindAllInput) {

    return await this.usuariosService.findAll(request)
  }

  @ResolveField(() => [Proyecto], { name: 'proyectos_administrados' })
  async getAdminProjects(@Parent() parent: Usuario) {

    return await this.proyectosService.findAll({ usuario_administrador_id: [parent.usuario_id] })
  }

  @ResolveField(() => [Proyecto], { name: 'proyectos_contribuidos' })
  async getContributedProjects(@Parent() parent: Usuario) {

    const proyecto_id = await this.contribucionesService.findAll({ usuario_id: parent.usuario_id }).then((value) => value.map(v => v.proyecto_id))


    return proyecto_id.length == 0 ? [] : await this.proyectosService.findAll({ proyecto_id })

  }
}
