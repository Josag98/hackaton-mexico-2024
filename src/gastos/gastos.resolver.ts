import { Resolver } from '@nestjs/graphql';
import { GastosService } from './gastos.service';

@Resolver()
export class GastosResolver {
  constructor(private readonly gastosService: GastosService) {}
}
