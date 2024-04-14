import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContribucionesService } from './contribuciones.service';
import { Contribucion } from './contribucion.entity';
import { FindAllContribucionesInput } from './dto/find-all-contribuciones.input';
import { CreateContribucionInput } from './dto/create-contribucion.input';

@Resolver()
export class ContribucionesResolver {
  constructor(private readonly contribucionesService: ContribucionesService) { }



  @Query(() => Contribucion, { name: 'contribucion' })
  async findOneById(@Args({ name: 'contribucion_id', type: () => ID }) contribucion_id: string) {

    return await this.contribucionesService.findOneById(contribucion_id)
  }


  @Query(() => [Contribucion], { name: 'contribuciones' })
  async findAll(@Args("FindAllContribucionesInput", { nullable: true }) request: FindAllContribucionesInput) {

    return await this.contribucionesService.findAll(request)
  }



  @Mutation(() => Contribucion, { name: 'crear_contribucion' })
  async create(@Args("CreateContribucionInput") request: CreateContribucionInput) {
    return await this.contribucionesService.create(request)

  }
}
