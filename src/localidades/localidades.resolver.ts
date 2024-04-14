import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocalidadesService } from './localidades.service';
import { Localidad } from './localidad.entity';
import { FindAllLocalidadesInput } from './dto/find-all-localidades.input';
import { CreateLocalidadInput } from './dto/create-localidad.input';

@Resolver()
export class LocalidadesResolver {
  constructor(private readonly localidadesService: LocalidadesService) {

  }


  @Query(() => Localidad, { name: 'localidad' })
  async findOneById(@Args({ name: 'localidad_id', type: () => ID }) localidad_id: string) {

    return await this.localidadesService.findOneById(localidad_id)
  }


  @Query(() => [Localidad], { name: 'localidades' })
  async findAll(@Args("FindAllLocalidadesInput", { nullable: true }) request: FindAllLocalidadesInput) {

    return await this.localidadesService.findAll(request)
  }

  @Mutation(() => Localidad, { name: 'crear_localidad' })
  async create(@Args("CreateLocalidadInput") request: CreateLocalidadInput) {
    return await this.localidadesService.create(request)
  }
}
