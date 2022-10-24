import {Entity, model, property} from '@loopback/repository';


@model()
export class Guest extends Entity {

  @property({
    type: 'string',
  })
  Name?: string;

  @property({
    type: 'string',
  })
  Email?: string;

  @property({
    type: 'string',
  })
  Phone_Key?: string;
  
  @property({
    type: 'string',
  })
  Phone?: string;
   
  @property({
    type: 'boolean',
  })
  Email_OR_Phone?: boolean;
   
  @property({
    type: 'string',
  })
  Start_Date?: string;
   
  @property({
    type: 'string',
  })
  Start_Hour?: string;
   
  @property({
    type: 'string',
  })
  End_Date?: string;
   
  @property({
    type: 'string',
  })
  End_Hour?: string;
   
  @property({
    type: 'boolean',
  })
  Card?: boolean;
   
  @property({
    type: 'boolean',
  })
  Key?: boolean;
   
  @property({
    type: 'boolean',
  })
  App?: boolean;
   
  @property({
    type: 'string',
  })
  Number_Card?: string;
   
  @property({
    type: 'string',
  })
  UID_Card?: string;
    
  constructor(data?: Partial<Guest>) {
    super(data);
  }
}

export interface GuestRelations {
  // describe navigational properties here
}

export type GuestWithRelations = Guest & GuestRelations;
