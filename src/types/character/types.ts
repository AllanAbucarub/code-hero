import IData from '../types';

interface ICharacterPhoto {
  path: string;
  extension: string;
}

interface IItem {
  resourceURI: string;
  name: string;
}

interface IItems {
  available: number;
  items: IItem[];
}

interface IUrl {
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: ICharacterPhoto;
  comics: IItems;
  series: IItems;
  stories: IItems;
  events: IItems;
  urls: IUrl[];
}

export interface ICharactersList extends IData {
  results: ICharacter[];
}
