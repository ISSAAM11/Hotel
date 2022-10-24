import {Entity, model, property} from '@loopback/repository';

@model()
export class Building extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  ID?: number;

  @property({
    type: 'number',
  })
  Building_ID?: number;

  @property({
    type: 'string',
  })
  Building_Name?: string;

  @property({
    type: 'number',
  })
  Hotel_Id?: number;


  constructor(data?: Partial<Building>) {
    super(data);
  }
}

export interface BuildingRelations {
  // describe navigational properties here
}

export type BuildingWithRelations = Building & BuildingRelations;
