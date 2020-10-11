<template>
  <div id="app">
    <div class="wrapper">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/perfumeslist" class="nav-link">All Fragrances</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add</router-link>
          </li>
        </div>
      </nav>

      <div class="container mt-3">
        <router-view />
      </div>
    </div>
      </div>
</template>

<script>

export default {
  name: "app",
 
};
</script>

<style scoped>
.app{
  position: relative;
  min-height: 100vh;
}

.wrapper{
   padding-bottom: 2.5rem; 
}
</style>