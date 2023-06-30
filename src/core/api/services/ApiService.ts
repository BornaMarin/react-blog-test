import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  private _httpClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 120000,
  });

  responseHandler<T = unknown>({ data }: AxiosResponse<T>) {
    return data;
  }

  async get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this._httpClient.get<T>(url, config);
  }

  async post<T = unknown, B = unknown>(
    url: string,
    body: B,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this._httpClient.post<T>(url, body, config);
  }
}

const apiService = new ApiService();

export default apiService;
