import axios from "axios";
import { AxiosError } from "axios";
import $api from "./index";

const handleError = (error: AxiosError<unknown>) => {
  if (error.response?.data.statusCode === 401) {
    // navigateTo('/sign-in')
  }

  if (
    error.response?.data.statusCode === 403 ||
    error.response?.data.statusCode === 404
  ) {
    // navigateTo('/404')
  }
};

export default ({
  url = "/",
  method = "GET",
  headers = {},
  params = {},
  data = {},
}) => {
  url = $api.config.API + url;
  return axios({
    url,
    method,
    headers,
    params,
    withCredentials: true,
    credentials: "include",
    data,
  }).catch((error: AxiosError<unknown>) => {
    handleError(error);
    throw error;
  });
};
