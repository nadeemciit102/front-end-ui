<template>
  <div class="topnav">
    <router-link class="nav-link active" to="/">Home</router-link>
    <router-link class="nav-link" to="/search">Search</router-link>
    <router-link class="nav-link" to="/about-us">About Us</router-link>
    <router-link class="nav-link" to="/todo">Todo</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.topnav {
  overflow: hidden;
  background-color: #333;
}
.topnav .nav-link {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav .nav-link:hover {
  background-color: #ddd;
  color: black;
}
.topnav .nav-link .active {
  background-color: #04aa6d;
  color: white;
}
</style>
