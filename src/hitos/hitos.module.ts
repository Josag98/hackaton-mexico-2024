import { Module } from '@nestjs/common';
import { HitosService } from './hitos.service';
import { HitosResolver } from './hitos.resolver';

@Module({
  providers: [HitosResolver, HitosService],
})
export class HitosModule {}
