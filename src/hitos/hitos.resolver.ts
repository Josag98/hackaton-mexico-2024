import { Resolver } from '@nestjs/graphql';
import { HitosService } from './hitos.service';

@Resolver()
export class HitosResolver {
  constructor(private readonly hitosService: HitosService) {}
}
