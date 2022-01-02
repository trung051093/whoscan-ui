import { IPaginationModel, PaginationModel } from './pagination.model';

export interface IBaseListingModel<T = never> {
  data: T[];
  pagination: IPaginationModel;
}

export class BaseListingModel<T = never> implements IBaseListingModel<T> {
  data: T[];
  pagination: IPaginationModel;

  /**
   *
   */
  constructor(headers: any, data?: T[]) {
    this.data = data!;
    this.pagination = new PaginationModel(headers);
  }
}
