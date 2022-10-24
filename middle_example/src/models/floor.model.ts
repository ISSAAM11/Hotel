import {Entity, model, property} from '@loopback/repository';

@model()
export class Floor extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  ID?: number;

  @property({
    type: 'number',
  })
  Floor_ID?: number;

  @property({
    type: 'string',
  })
  Floor_Name?: string;

  @property({
    type: 'number',
  })
  Building_Id?: number;

  constructor(data?: Partial<Floor>) {
    super(data);
  }
}

export interface FloorRelations {
  // describe navigational properties here
}

export type FloorWithRelations = Floor & FloorRelations;
