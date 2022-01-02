export interface IBaseParameter<T = {}> {
  index?: number;
  size?: number;
  condition?: T;
}

export class BaseParameter<T = {}> implements IBaseParameter<T> {
  index?: number;
  size?: number;
  condition?: T;

  /**
   *
   */
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(_: Partial<IBaseParameter<T>>) { }
}
