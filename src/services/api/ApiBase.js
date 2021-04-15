import React from "react";
import axios from "axios";
import { GetAuthentication, RemoveAuthentication } from "../localStorage/LocalStorageService";
import { useHistory } from "react-router-dom";
import { HttpStatus } from "../HttpStatus";
import CreateNotification from "../../utils/CreateNotification";
import NotificationType from "../../enums/NotificationType";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 30000
});

var history = null;

export const setupInterceptors = (_history) => {
  history = _history;
};

axiosInstance.interceptors.request.use(
  request => requestHandler(request)
);

axiosInstance.interceptors.response.use(
  response => onFulfilled(response),
  error => onRejected(error)
);

export const ApiBaseComponent = () => {
  const history = useHistory();
  setupInterceptors(history);
  return <div />;
};

const onFulfilled = (response) => {
  if (response.status === 200) {
  }
  return response;
};

const onRejected = (error) => {
  if (error?.response?.status === 401) {
    RemoveAuthentication();
    history.push("/login");
  }
  return error.response;
};
let shouldUseToken = true;
const requestHandler = (request) => {
  if (shouldUseToken) {
    let authentication = GetAuthentication();
    if (authentication) {
      request.headers["Authorization"] = "Bearer " + authentication.token;
    }
  }
  request.headers["Content-Type"] = "application/json";
  request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
};

export async function get(endPoint, params, timeout) {
  let result = await axiosInstance.get(
    endPoint,
    { params: params, timeout }
  );
  let response = {
    data: result?.data,
    status: result?.status
  };
  return response;
}

export async function post(endPoint, postObject) {
  let result = await axiosInstance.post(
    endPoint,
    postObject
  );
  let response = {
    data: result?.data,
    status: result?.status
  };
  return response;
}

export async function put(endPoint, postObject) {
  let result = await axiosInstance.put(endPoint, postObject)
  let response = { data: result?.data, status: result?.status }
  return (response)
}

export async function remove(endPoint, params) {
  let result = await axiosInstance.delete(endPoint, { params: params })
  let response = { data: result?.data, status: result?.status }
  return (response)
}

export async function postAnonymous(endPoint, postObject) {
  shouldUseToken = false;
  var response = post(endPoint, postObject);
  shouldUseToken = true;
  return response;
}
