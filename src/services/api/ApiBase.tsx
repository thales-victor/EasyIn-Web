import React from "react";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse
} from "axios";
import {
  GetAuthentication,
  RemoveAuthentication
} from "../localStorage/LocalStorageService";
import * as H from "history";
import { useHistory } from "react-router-dom";
import { ApiResponse } from "../../interfaces/api/ApiResponse";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 30000
});

var history: H.History<unknown> | null = null;

export const setupInterceptors = (
  _history: H.History<unknown> | null
) => {
  history = _history;
};

axiosInstance.interceptors.request.use(request => requestHandler(request));
axiosInstance.interceptors.response.use(
  response => onFulfilled(response),
  error => onRejected(error)
  );

export const ApiBaseComponent = () => {
  const history = useHistory();
  setupInterceptors(history);
  return <div />;
};

const onFulfilled = (
  response: AxiosResponse
): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
  if (response.status === 200) {
  }
  return response;
};

const onRejected = (error: AxiosError) => {
  if (error?.response?.status === 401) {
    RemoveAuthentication();
    history?.push("/login");
  }
  return error.response;
};
let shouldUseToken = true;
const requestHandler = (request: AxiosRequestConfig) => {
  if (shouldUseToken) {
    let authentication = GetAuthentication();
    if (authentication) {
      request.headers["Authorization"] = "Bearer " + authentication.token;
    }
  }
  request.headers["Content-Type"] = "application/json";
  return request;
};

export async function get<TResponse>(
  endPoint: string,
  params?: any,
  timeout?: number,
): Promise<ApiResponse<TResponse>> {
  let result: AxiosResponse<TResponse> = await axiosInstance.get<TResponse>(
    endPoint,
    { params: params, timeout }
  );
  let response: ApiResponse<TResponse> = {
    data: result?.data,
    status: result?.status
  };
  return response;
}

export async function post<TRequest, TResponse>(
  endPoint: string,
  postObject: TRequest
): Promise<ApiResponse<TResponse>> {
  let result: AxiosResponse<TResponse> = await axiosInstance.post<TResponse>(
    endPoint,
    postObject
  );
  let response: ApiResponse<TResponse> = {
    data: result?.data,
    status: result?.status
  };
  return response;
}

export async function put<TRequest, TResponse>(endPoint: string, postObject: TRequest): Promise<ApiResponse<TResponse>> {
  let result: AxiosResponse<TResponse> = await axiosInstance.put<TResponse>(endPoint, postObject)
  let response: ApiResponse<TResponse> = { data: result?.data, status: result?.status }
  return (response)
}

export async function remove<TResponse>(endPoint: string, params?: any): Promise<ApiResponse<TResponse>> {
  let result: AxiosResponse<TResponse> = await axiosInstance.delete<TResponse>(endPoint, { params: params })
  let response: ApiResponse<TResponse> = { data: result?.data, status: result?.status }
  return (response)
}

export async function postAnonymous<TRequest, TResponse>(
  endPoint: string,
  postObject: TRequest
): Promise<ApiResponse<TResponse>> {

  shouldUseToken = false;
  var response = post<TRequest, TResponse>(endPoint, postObject);
  shouldUseToken = true;
  return response;
}
