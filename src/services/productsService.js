import http from "./httpService";

export async function getProducts(options, query = "") {
  return http
    .get(`/product/list?${query}`, options)
    .then(({ data }) => data.data);
}
