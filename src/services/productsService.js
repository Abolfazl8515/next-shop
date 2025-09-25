import http from "./httpService";

export async function getProductsApi(query = "") {
  return http.get(`/product/list?${query}`).then(({ data }) => data.data);
}

export async function getOneProductBySlugApi(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export async function getOneProductByIdApi(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export async function addOneProductApi(data) {
  return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export async function updateOneProductApi({ id, data }) {
  return http
    .patch(`/admin/product/update/${id}`, data)
    .then(({ data }) => data.data);
}

export async function deleteOneProductApi(id,options) {
  return http
    .delete(`/admin/product/remove/${id}`,options)
    .then(({ data }) => data.data);
}
