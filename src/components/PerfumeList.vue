<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by Name"
          v-model="Name"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Perfume List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(perfume, index) in perfumes"
          :key="index"
          @click="setActivePerfume(perfume, index)"
        >
          {{ perfume.Name }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllperfumes">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentperfume">
        <h4>Perfume</h4>
        <div>
          <label><strong>Perfume Name:</strong></label
          >{{ currentperfume.Name }}
        </div>
        <div>
          <label><strong>Brand:</strong></label
          >{{ currentperfume.Brand }}
        </div>
        <div>
          <label><strong>Notes</strong></label
          >{{ currentperfume.Notes }}
        </div>
        <div>
          <label><strong>Submitted by:</strong></label
          >{{ currentperfume.Entryname }}
        </div>
        <div>
          <label
            ><strong
              >Why {{ currentperfume.Entryname }} loves this fragrance
            </strong></label
          >{{ currentperfume.Content }}
        </div>
        <a class="badge badge-warning" :href="'/perfumes/' + currentperfume.id">
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Perfume...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PerfumeDataService from "../services/PerfumeDataService.js";
export default {
  name: "perfumes-list",
  data() {
    return {
      perfumes: [],
      currentperfume: null,
      currentIndex: -1,
      Name: "",
    };
  },
  methods: {
    retrievePerfumes() {
      PerfumeDataService.getAll()
        .then((res) => {
          this.perfumes = res.data;
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrievePerfumes();
      this.currentperfume = null;
      this.currentIndex = -1;
    },
    setActivePerfume(perfume, index) {
      this.currentperfume = perfume;
      this.currentIndex = index;
    },
    removeAllperfumes() {
      PerfumeDataService.deleteAll()
        .then((res) => {
          console.log(res.data);
          this.refreshList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchName() {
      PerfumeDataService.findByName(this.Name)
        .then((res) => {
          this.perfumes = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.retrievePerfumes();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
