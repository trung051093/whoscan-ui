export enum PaginationHeaders {
  size = "X-Pagination-Size",
  index = "X-Pagination-Index",
  pages = "X-Pagination-Pages",
  total = "X-Pagination-Total"
}

export interface IPaginationModel {
  size: number;
  index: number;
  pages: number;
  total: number;
}

export class PaginationModel implements IPaginationModel {
  size: number;
  index: number;
  pages: number;
  total: number;

  /**
   *
   */
  constructor(headers: {
    [key: string]: string
  }) {
    this.size = parseInt(headers[PaginationHeaders.size]);
    this.index = parseInt(headers[PaginationHeaders.index]);
    this.pages = parseInt(headers[PaginationHeaders.pages]);
    this.total = parseInt(headers[PaginationHeaders.total]);
  }
}
