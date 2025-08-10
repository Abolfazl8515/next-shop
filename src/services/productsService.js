import http from "./httpService";

export async function getProductsApi(query = "") {
  return http.get(`/product/list?${query}`).then(({ data }) => data.data);
}
