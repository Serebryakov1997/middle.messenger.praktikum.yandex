import { DEV_LINK_ADDRESS } from '../../utils/urlSelection';

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

  constructor(mainPath: string) {
    this._mainLinkAddress = DEV_LINK_ADDRESS + mainPath;
  }

  get<Response>(url: string, options?: Options): Promise<Response> {
    let handledUrl: string = url;
    const handledOptions: Options = options!;
    if (options && options.data) {
      handledUrl += `?${queryStringify(options.data)}`;
      handledOptions.data = {};
    }
    return this.request<Response>(
      this._mainLinkAddress + handledUrl,
      this.TIMEOUT,
      { ...handledOptions, method: Method.GET },
    );
  };

  put<Response>(url: string, options?: Options): Promise<Response> {
    return this.request<Response>(
      this._mainLinkAddress + url,
      this.TIMEOUT,
      { ...options, method: Method.PUT },
    );
  }

  post<Response>(url: string, options?: Options): Promise<Response> {
    return this.request<Response>(
      this._mainLinkAddress + url,
      this.TIMEOUT,
      { ...options, method: Method.POST },
    );
  }

  delete<Response>(url: string, options?: Options): Promise<Response> {
    return this.request<Response>(
      this._mainLinkAddress + url,
      this.TIMEOUT,
      { ...options, method: Method.DELETE },
    );
  }

  request<Response>(
    url: string,
    timeout: number,
    options: Options = { method: Method.GET },
  ): Promise<Response> {
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
