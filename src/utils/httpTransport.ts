import { CustomType } from './types';

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  data?: CustomType['HeadersOrDataType'],
  headers?: CustomType['HeadersOrDataType'];
  method?: string;
};

function queryStringify(data: CustomType['HeadersOrDataType']): string {
  let str = '?';
  const lastEl = data[Object.keys(data)[Object.keys(data).length - 1]];

  Object.entries(data).forEach(([key, value]) => {
    if (value === lastEl) {
      str += `${key}=${value}`;
    } else {
      str += `${key}=${value}&`;
    }
  });

  return str;
}

export class HTTPTransport {
  _mainLinkAddress: string;

  readonly TIMEOUT = 5000;

  constructor(mainLinkAddress: string) {
    this._mainLinkAddress = mainLinkAddress;
  }

  get = (url: string, options?: Options): Promise<XMLHttpRequestResponseType> => {
    if (options && options.data) {
      url += `?${queryStringify(options.data)}`;
      options.data = {};
    }
    return HTTPTransport.request(
      this._mainLinkAddress + url,
      { ...options, method: Method.GET },
      this.TIMEOUT,
    );
  };

  put = (url: string, options?: Options):
    Promise<XMLHttpRequestResponseType> => HTTPTransport.request(
    this._mainLinkAddress + url,
    { ...options, method: Method.PUT },
    this.TIMEOUT,
  );

  post = (url: string, options?: Options):
    Promise<XMLHttpRequestResponseType> => HTTPTransport.request(
    this._mainLinkAddress + url,
    { ...options, method: Method.POST },
    this.TIMEOUT,
  );

  delete = (
    url: string,
    options?: Options,
  ):
    Promise<XMLHttpRequestResponseType> => HTTPTransport.request(
    this._mainLinkAddress + url,
    { ...options, method: Method.DELETE },
    this.TIMEOUT,
  );

  static request = (
    url: string,
    options: Options = { method: Method.GET },
    timeout: number,
  ): Promise<XMLHttpRequestResponseType> => {
    const { data, headers = { 'Content-type': 'application/json' }, method } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method as string, url);

      Object.keys(headers!).forEach((key) => {
        xhr.setRequestHeader(key, headers![key] as string);
      });

      xhr.timeout = timeout;

      xhr.onload = () => {
        if (xhr.status === 200) {
          return resolve(xhr.response);
        }
        const error: any = new Error(xhr.statusText);
        error.code = xhr.status;
        return reject(error);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === Method.GET) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
