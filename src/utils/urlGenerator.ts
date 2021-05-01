import md5 from 'md5';

const privateKey = process.env.REACT_APP_PRIVATE_KEY || '';
const publicKey = process.env.REACT_APP_PUBLIC_KEY || '';
const baseUrl = process.env.REACT_APP_BASE_URL;

interface IParam {
  [key: string]: string | boolean | number;
}

function generateHash(dateTime: number): string {
  const hash = md5(dateTime + privateKey + publicKey) as string;
  return hash;
}

export function generateUrl(endpoint: string, params: IParam[]): string {
  const timestamp = Date.now();
  const hash = generateHash(timestamp);

  let aux = '';

  params.forEach(el => {
    for (const key in el) {
      if (Object.prototype.hasOwnProperty.call(el, key)) {
        aux += `&${key}=${el[key]}`;
      }
    }
  });

  const url = `${baseUrl + endpoint}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}${aux}`;

  return url;
}
