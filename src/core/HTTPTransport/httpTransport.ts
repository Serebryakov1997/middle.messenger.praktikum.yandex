enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const MESSAGE = {
  0: 'abort',
  100: 'Information',
  200: 'Ok',
  300: 'Redirect failed',
  400: 'Access error',
  500: 'Internal server error',
};

type Options = {
  data?: Record<string, unknown> | FormData,
  headers?: Record<string, unknown>;
  method?: string;
  withCredentials?: boolean;
};

function queryStringify(data: Record<string, unknown>): string {
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
  baseUrl: string;

  readonly TIMEOUT = 5000;

  constructor(mainPath: string) {
    this.baseUrl = `https://ya-praktikum.tech/api/v2${mainPath}`;
  }

  get<Response>(url: string, options?: Options, path?: string): Promise<Response> {
    let handledUrl: string = url;
    const handledOptions: Options = options!;
    if (options && options.data) {
      handledUrl += `?${queryStringify(<Record<string, unknown>>options.data)}`;
      handledOptions.data = {};
    }
    return this.request<Response>(
      path ? this.baseUrl + handledUrl + path : this.baseUrl + handledUrl,
      this.TIMEOUT,
      { ...handledOptions, method: Method.GET },
    );
  }

  put<Response>(url: string, options?: Options): Promise<Response> {
    return this.request<Response>(
      this.baseUrl + url,
      this.TIMEOUT,
      { ...options, method: Method.PUT },
    );
  }

  post<Response>(url: string, options?: Options): Promise<Response> {
    return this.request<Response>(
      this.baseUrl + url,
      this.TIMEOUT,
      { ...options, method: Method.POST },
    );
  }

  delete<Response>(url: string, options?: Options): Promise<Response> {
    return this.request<Response>(
      this.baseUrl + url,
      this.TIMEOUT,
      { ...options, method: Method.DELETE },
    );
  }

  /* eslint class-methods-use-this: "off" */
  request<Response>(
    url: string,
    timeout: number,
    options: Options = { method: Method.GET },
  ): Promise<Response> {
    const {
      data,
      headers,
      method,
      withCredentials = true,
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method as string, url);

      Object.keys(headers ?? {}).forEach((key) => {
        xhr.setRequestHeader(key, headers![key] as string);
      });

      xhr.timeout = timeout;
      xhr.withCredentials = withCredentials;

      xhr.onload = () => {
        const status = xhr.status || 0;
        if (status >= 200 && status < 300) {
          resolve(xhr.response);
        } else {
          reject({ status, reason: xhr.response?.reason || MESSAGE });
        }
      };

      xhr.onabort = () => reject({ reason: 'abort' });
      xhr.onerror = () => reject({ reason: 'network error' });
      xhr.ontimeout = () => reject({ reason: 'timeout' });

      if (method === Method.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
