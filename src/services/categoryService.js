import http from "./httpService";

export async function getCategories(data) {
  return http.get("/category/list", data).then(({ data }) => data.data);
}
