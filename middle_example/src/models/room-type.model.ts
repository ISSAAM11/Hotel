import {Entity, model, property} from '@loopback/repository';


@model()
export class RoomType extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  ID?: number;

  @property({
    type: 'string',
  })
  Type_Room?: string;

  @property({
    type: 'string',
  })
  Price_Room?: string;


  constructor(data?: Partial<RoomType>) {
    super(data);
  }
}

export interface RoomTypeRelations {
  // describe navigational properties here
}

export type RoomTypeWithRelations = RoomType & RoomTypeRelations;
