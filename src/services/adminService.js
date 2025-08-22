import http from "./httpService";

export async function getUsersApi(options) {
  return http.get("/admin/user/list", options).then(({ data }) => data.data);
}
