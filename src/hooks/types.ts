export interface IParam {
  [key: string]: string | boolean | number;
}

export interface IConfig {
  page?: number;
  limit?: number;
  endpoint: string;
  params?: IParam[];
}
