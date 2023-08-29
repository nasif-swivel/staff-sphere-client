export const BASE_URL = "https://busy-bass-shift.cyclic.app";

const axios = require("axios").default;

export function sendHttpRequest(
  method: string,
  endpoint: string,
  params: unknown = null,
  data: unknown = null,
  contentType: string = "application/json",
  headers: unknown = null
) {
  const constructedURL = BASE_URL + endpoint;
  const url = params
    ? constructedURL + "?" + constructUrlWithParams(params)
    : constructedURL;

  const request = axios({
    method: method,
    headers: headers ? headers : { "Content-Type": contentType },
    url: url,
    data: data,
  });
  return request;
}

function constructUrlWithParams(params: any) {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");
  return query;
}
