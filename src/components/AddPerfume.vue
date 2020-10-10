<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="Name">Name</label>
        <input
          type="text"
          class="form-control"
          id="Name"
          required
          v-model="perfume.Name"
          name="Name"
        />
      </div>

      <div class="form-group">
        <label for="Brand">Brand</label>
        <input
          type="text"
          class="form-control"
          id="Brand"
          required
          v-model="perfume.Brand"
          name="Brand"
        />
      </div>

      <div class="form-group">
        <label for="Notes">Notes</label>
        <input
          type="text"
          class="form-control"
          id="Notes"
          required
          v-model="perfume.Notes"
          name="Notes"
        />
      </div>
      <div class="form-group">
        <label for="Content">Content</label>
        <input
          type="text"
          class="form-control"
          id="Content"
          required
          v-model="perfume.Content"
          name="Content"
        />
      </div>
      <div class="form-group">
        <label for="Entryname">Entryname</label>
        <input
          type="text"
          class="form-control"
          id="Entryname"
          required
          v-model="perfume.Entryname"
          name="Entryname"
        />
      </div>
      <button @click="saveperfume" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>Perfume submitted successfully</h4>
      <button class="btn btn-success" @click="newperfume">Add</button>
      <button class="btn btn-success"><a href="/perfumes">Back to perfumes </a></button>
    </div>
  </div>
</template>

<script>
import PerfumeDataService from "../services/PerfumeDataService.js";
export default {
  name: "add-perfume",
  data() {
    return {
      perfume: {
        id: null,
        Name: "",
        Brand: "",
        Notes: "",
        Content: "",
        Entryname: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveperfume() {
      var data = {
        Name: this.perfume.Name,
        Brand: this.perfume.Brand,
        Notes: this.perfume.Notes,
        Content: this.perfume.Content,
        Entryname: this.perfume.Entryname,
      };
      PerfumeDataService.create(data).then((res) => {
        this.perfume.id = res.data.id;
        console.log(res.data);
        this.submitted = true;
      });
    },
    newperfume() {
      this.submitted = false;
      this.perfume = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
