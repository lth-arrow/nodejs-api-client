import { AbstractClient } from '../src';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { URL, URLSearchParams } from 'url';

export type ExpectFunctionParameters = {
  queryParameters?: URLSearchParams;
  config?: AxiosRequestConfig;
};

export const MOCK_URL = 'https://localhost';
export const TEST_ENDPOINT = '/test';

export class TestClient extends AbstractClient {
  constructor(client?: AxiosInstance) {
    super(client);
    this.url = MOCK_URL;
  }

  get(): Promise<AxiosResponse['data']> {
    return super.get();
  }

  getTest(): Promise<AxiosResponse> {
    this.path = TEST_ENDPOINT;
    return super.get();
  }

  getTestAdmin(): Promise<AxiosResponse> {
    this.path = TEST_ENDPOINT;
    return super.get({}, {}, { isAdmin: true });
  }

  getTestCamel(): Promise<AxiosResponse> {
    this.path = TEST_ENDPOINT;
    this.isCamelPagination = true;
    return super.get().then((res) => {
      this.isCamelPagination = false;
      return res;
    });
  }

  postTest(): Promise<AxiosResponse> {
    this.path = TEST_ENDPOINT;
    return super.post();
  }

  postTestAdmin(): Promise<AxiosResponse> {
    this.path = TEST_ENDPOINT;
    return super.post({}, {}, {}, { isAdmin: true });
  }

  putTest(): Promise<void> {
    this.path = TEST_ENDPOINT;
    return super.put();
  }

  putTestAdmin(): Promise<void> {
    this.path = TEST_ENDPOINT;
    return super.put({}, {}, {}, { isAdmin: true });
  }
}

export const axiosExpectInterceptor = (
  expectation: (params: ExpectFunctionParameters) => void,
) => (config: AxiosRequestConfig): AxiosRequestConfig => {
  const urlObject = new URL(config.url || '');
  const queryParameters = urlObject.searchParams;

  try {
    expectation({ config, queryParameters });
  } catch (error) {
    console.error(error);
    throw error;
  }

  return config;
};
