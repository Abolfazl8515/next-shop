import http from "./httpService";

export async function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}

export async function getCategoryByIdApi(id) {
  return http.get(`/category/${id}`).then(({ data }) => data.data);
}

export async function addCategoryApi(data) {
  return http.post("/admin/category/add", data).then(({ data }) => data.data);
}

export async function deleteCategoryApi(id, options) {
  return http
    .delete(`/admin/category/remove/${id}`, options)
    .then(({ data }) => data.data);
}
export async function editCategoryApi({ id, data }) {
  return http
    .patch(`/admin/category/update/${id}`, data)
    .then(({ data }) => data.data);
}
