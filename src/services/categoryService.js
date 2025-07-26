import http from "./httpService";

export async function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}
