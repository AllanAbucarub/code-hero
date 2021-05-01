import IData from '../types';

interface IComicPhoto {
  path: string;
  extension: string;
}

interface IUrl {
  url: string;
}

export interface IComic {
  id: number;
  title: string;
  thumbnail: IComicPhoto;
  urls: IUrl[];
}

export interface IComicsList extends IData {
  results: IComic[];
}
