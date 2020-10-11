<template>
  <div class="wrapper">
    <div class="img">
      <h2>Perfume Place</h2>
      <img src="/images/perfnew.jpg" /><br />
      <h3>The best place to smell</h3>
      <p>
        <router-link to="/perfumeslist">See all Submitted perfumes</router-link>
      </p>
      <p><router-link to="/add">Submit A fragrance</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.img {
  margin-left: 30%;
  margin-top: 9%;
}

h2 {
  margin-left: 15%;
  font-family: Arial, Helvetica, sans-serif;
}
h3 {
  margin-left: 15%;
  font-family: Arial, Helvetica, sans-serif;
}
p {
  margin-left: 15%;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
