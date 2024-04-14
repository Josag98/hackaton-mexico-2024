import { registerEnumType } from '@nestjs/graphql';



export enum estados_proyecto {
  en_progreso,
  finalizado,
  suspendido,
  cancelado
}

type EstadosProyecto = estados_proyecto;
export const EstadosProyecto = { ...estados_proyecto };

registerEnumType(EstadosProyecto, {
  name: 'EstadosProyecto',
});
