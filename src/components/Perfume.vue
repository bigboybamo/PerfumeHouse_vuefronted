<template>
  <div v-if="currentPerfume" class="edit-form">
    <h4>Perfume</h4>
    <form>
      <div class="form-group">
        <label for="Name">Name</label>
        <input
          type="text"
          class="form-control"
          id="Name"
          v-model="currentPerfume.Name"
        />
      </div>
      <div class="form-group">
        <label for="Brand">Brand</label>
        <input
          type="text"
          class="form-control"
          id="Brand"
          v-model="currentPerfume.Brand"
        />
      </div>
      <div class="form-group">
        <label for="Name">Noted</label>
        <input
          type="text"
          class="form-control"
          id="Note"
          v-model="currentPerfume.Notes"
        />
      </div>
      <div class="form-group">
        <label for="Entryname">Submitted by</label>
        <input
          type="text"
          class="form-control"
          id="Entryname"
          v-model="currentPerfume.Entrynaame"
        />
      </div>
      <div class="form-group">
        <label for="Content">Why do you love this scent</label>
        <input
          type="text"
          class="form-control"
          id="Content"
          v-model="currentPerfume.Content"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2" @click="deletePerfume">
      Delete
    </button>
    <button type="submit" class="badge badge-success" @click="updatePerfume">
      Update
    </button>
    <button class="badge badge-success">
      <a href="/perfumes">cancel</a>
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Perfume...</p>
  </div>
</template>

<script>
import PerfumeDataService from "../services/PerfumeDataService.js";
export default {
  name: "perfume",
  data() {
    return {
      currentPerfume: null,
      message: "",
    };
  },
  methods: {
    getPerfume(id) {
      PerfumeDataService.get(id)
        .then((res) => {
          this.currentPerfume = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updatePerfume() {
      PerfumeDataService.update(this.currentPerfume.id, this.currentPerfume)
        .then((res) => {
          console.log(res.data);
          this.message = "Update done successfully";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deletePerfume() {
      PerfumeDataService.delete(this.currentPerfume.id)
        .then((res) => {
          console.log(res.data);
          this.$router.push({ name: "perfumes" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getPerfume(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
