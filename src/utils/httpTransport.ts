enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  data?: Record<string, unknown>,
  headers?: Record<string, unknown>;
  method?: string;
};

function queryStringify(data: Options['data']): string {
  let str = '?';

  if (data) {
    const lastEl = data[Object.keys(data)[Object.keys(data).length - 1]];

    Object.entries(data).forEach(([key, value]) => {
      if (value === lastEl) {
        str += `${key}=${value}`;
      } else {
        str += `${key}=${value}&`;
      }
    });
  }

  return str;
}

export class HTTPTransport {
  _mainLinkAddress: string;

  readonly TIMEOUT = 5000;

  constructor(mainLinkAddress: string) {
    this._mainLinkAddress = mainLinkAddress;
  }

  get = (url: string, options?: Options): Promise<XMLHttpRequestResponseType> => {
    let handledUrl: string = url;
    const handledOptions: Options = options!;
    if (options && options.data) {
      handledUrl += `?${queryStringify(options.data)}`;
      handledOptions.data = {};
    }
    return HTTPTransport.request(
      this._mainLinkAddress + handledUrl,
      this.TIMEOUT,
      { ...handledOptions, method: Method.GET },
    );
  };

  put = (url: string, options?: Options):
    Promise<XMLHttpRequestResponseType> => HTTPTransport.request(
    this._mainLinkAddress + url,
    this.TIMEOUT,
    { ...options, method: Method.PUT },
  );

  post = (url: string, options?: Options):
    Promise<XMLHttpRequestResponseType> => HTTPTransport.request(
    this._mainLinkAddress + url,
    this.TIMEOUT,
    { ...options, method: Method.POST },
  );

  delete = (
    url: string,
    options?: Options,
  ):
    Promise<XMLHttpRequestResponseType> => HTTPTransport.request(
    this._mainLinkAddress + url,
    this.TIMEOUT,
    { ...options, method: Method.DELETE },
  );

  static request = (
    url: string,
    timeout: number,
    options: Options = { method: Method.GET },
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
