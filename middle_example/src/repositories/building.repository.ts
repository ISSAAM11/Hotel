import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbHotelDataSource} from '../datasources';
import {Building, BuildingRelations} from '../models';

export class BuildingRepository extends DefaultCrudRepository<
  Building,
  typeof Building.prototype.ID,
  BuildingRelations
> {
  constructor(
    @inject('datasources.db_hotel') dataSource: DbHotelDataSource,
  ) {
    super(Building, dataSource);
  }
}
