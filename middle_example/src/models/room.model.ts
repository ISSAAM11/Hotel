import {Entity, model, property} from '@loopback/repository';

@model()
export class Room extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  ID: number;

  @property({
    type: 'number',
  })
  Room_ID: number;

  @property({
    type: 'string',
  })
  Room_Number: string;

  @property({
    type: 'string',
  })
  Room_Status: string;

  @property({
    type: 'string',
  })
  Room_Type: string;

  @property({
    type: 'string',
  })
  Room_Price: string;

  @property({
    type: 'string',
  })
  Room_Lock: string;

  @property({
    type: 'number',
  })
  Floor_Id: number;

  @property({
    type: 'number',
  })
  Building_Id: number;

  constructor(data?: Partial<Room>) {
    super(data);
  }
}

export interface RoomRelations {
  // describe navigational properties here
}

export type RoomWithRelations = Room & RoomRelations;
