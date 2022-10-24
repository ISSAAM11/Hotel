import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbHotelDataSource} from '../datasources';
import {Room, RoomRelations} from '../models';

export class RoomRepository extends DefaultCrudRepository<
  Room,
  typeof Room.prototype.ID,
  RoomRelations
> {
  constructor(
    @inject('datasources.db_hotel') dataSource: DbHotelDataSource,
  ) {
    super(Room, dataSource);
  }
}
