import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProyectosService } from './proyectos.service';
import { Proyecto } from './proyecto.entity';
import { FindAllProyectosInput } from './dto/find-all-proyectos.input';
import { CreateProyectoInput } from './dto/create-proyecto.input';

@Resolver()
export class ProyectosResolver {
  constructor(private readonly proyectosService: ProyectosService) { }



  @Query(() => Proyecto, { name: 'proyecto' })
  async findOneById(@Args({ name: 'proyecto_id', type: () => ID }) proyecto_id: string) {

    return await this.proyectosService.findOneById(proyecto_id)
  }


  @Query(() => [Proyecto], { name: 'proyectos' })
  async findAll(@Args("FindAllProyectosInput", { nullable: true }) request: FindAllProyectosInput) {

    return await this.proyectosService.findAll(request)
  }



  @Mutation(() => Proyecto, { name: 'crear_proyecto' })
  async create(@Args("CreateProyectoInput") request: CreateProyectoInput) {
    return await this.proyectosService.create(request)

  }
}
