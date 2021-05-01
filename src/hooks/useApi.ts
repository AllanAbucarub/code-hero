import { useState } from 'react';
import { generateUrl } from '../utils/urlGenerator';
import { IConfig, IParam } from './types';

type RequestType<T> = {
  error: string;
  data: T;
  loading: boolean;
};

export default function useApi<T>(): [
  (config: IConfig) => void,
  { error: string; data: T; loading: boolean },
] {
  const initialRequestInfo: RequestType<T> = {
    error: '',
    data: <T>{},
    loading: false,
  };

  const [requestInfo, setRequestInfo] = useState<RequestType<T>>(initialRequestInfo);

  function fetchData({ page = 1, limit = 0, endpoint, params }: IConfig): void {
    const offset = (page - 1) * limit;
    const queryParams: IParam[] = [{ offset }];
    limit && queryParams.push({ limit });
    params && queryParams.push(...params);

    const url = generateUrl(endpoint, queryParams);

    setRequestInfo({
      ...initialRequestInfo,
      loading: true,
    });

    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (!response.data) {
          throw new Error(response.message);
        }
        setRequestInfo({
          ...initialRequestInfo,
          data: response.data,
        });
      })
      .catch(error => {
        setRequestInfo({
          ...initialRequestInfo,
          error: error.message,
        });
      });
  }

  return [fetchData, requestInfo];
}
