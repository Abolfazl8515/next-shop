import http from "./httpService";

export async function addToCartApi(id) {
  return http.post("/cart/add", id).then(({ data }) => data.data);
}

export async function deleteFromCartApi(id) {
  return http.post("/cart/remove", id).then(({ data }) => data.data);
}
