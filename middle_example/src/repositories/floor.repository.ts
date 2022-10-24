import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbHotelDataSource} from '../datasources';
import {Floor, FloorRelations} from '../models';

export class FloorRepository extends DefaultCrudRepository<
  Floor,
  typeof Floor.prototype.ID,
  FloorRelations
> {
  constructor(
    @inject('datasources.db_hotel') dataSource: DbHotelDataSource,
  ) {
    super(Floor, dataSource);
  }
}
