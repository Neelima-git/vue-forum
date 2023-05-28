<template>
    <nav class="navbar bg-secondary bg-opacity-50">
      <div class="container-fluid">
        <a class="navbar-brand">Forum Posts</a>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model.trim="searchQuery"
          />
          <button class="btn btn-outline-danger text-red">Delete</button>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const searchQuery = ref("");
  </script>
  
  <style scoped></style>
  