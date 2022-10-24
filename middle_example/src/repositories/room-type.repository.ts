import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbHotelDataSource} from '../datasources';
import {RoomType, RoomTypeRelations} from '../models';

export class RoomTypeRepository extends DefaultCrudRepository<
  RoomType,
  typeof RoomType.prototype.ID,
  RoomTypeRelations
> {
  constructor(
    @inject('datasources.db_hotel') dataSource: DbHotelDataSource,
  ) {
    super(RoomType, dataSource);
  }
}
