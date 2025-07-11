import http from "./httpService";

export async function getUserOtpApi(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export async function checkUserOtpApi(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export async function completeUserProfileApi(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export async function logoutApi() {
  return http.post(`/user/logout`).then(({ data }) => data.data);
}
