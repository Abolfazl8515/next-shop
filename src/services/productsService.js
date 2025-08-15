import http from "./httpService";

export async function getProductsApi(query = "") {
  return http.get(`/product/list?${query}`).then(({ data }) => data.data);
}

export async function getOneProductBySlugApi(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}
