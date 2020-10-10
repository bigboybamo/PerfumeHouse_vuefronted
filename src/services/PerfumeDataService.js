import http from "../http-common.js";

class PerfumeDataService {
  getAll() {
    return http.get("/perfumes");
  }

  get(id) {
    return http.get(`/perfumes/${id}`);
  }

  create(data) {
    return http.post("/perfumes", data);
  }

  update(id, data) {
    return http.put(`/perfumes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/perfumes/${id}`);
  }

  deleteAll() {
    return http.delete(`/perfumes`);
  }

  findByName(Name) {
    return http.get(`/perfumes?Name=${Name}`);
  }
}

export default new PerfumeDataService();