import { ICharactersList } from '../types/character/types';
import useApi from './useApi';

import { IConfig } from './types';

const endpoint = 'characters';
const initialConfig: IConfig = {
  page: 1,
  endpoint,
  limit: 10,
};

export default function useCharacter(): [
  (page: number) => void,
  (name: string) => void,
  { error: string; data: ICharactersList; loading: boolean },
] {
  const [fetchData, requestInfo] = useApi<ICharactersList>();

  function fetchAll(page: number): void {
    fetchData({
      ...initialConfig,
      page,
    });
  }

  function fetchByName(name: string): void {
    fetchData({
      ...initialConfig,
      params: [{ name }],
    });
  }

  return [fetchAll, fetchByName, requestInfo];
}
