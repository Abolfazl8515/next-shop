import http from "./httpService";

export async function addToCartApi(id) {
  return http.post("/cart/add", id).then(({ data }) => data.data);
}
