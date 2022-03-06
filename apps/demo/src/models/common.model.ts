export interface Pagination {
    page: number;
    limit: number;
    total: number;
    offset: number;
}

export interface Response<T> {
    data: T;
    error?: string;
    errorCode?: number;
}

export interface ResponsePageination<T> extends Response<T> {
    data: T;
    pagination: Pagination;
    error?: string;
    errorCode?: number;
}