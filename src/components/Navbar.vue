<template>
  <nav class="navbar fixed-top navbar-customclass pb-2 px-4">
    <div class="container-fluid">
      <a class="navbar-brand"> <RouterLink to="/"><img src="../assets/logo1.svg" alt="logo" /></RouterLink> </a>
      <div class="d-flex">
        <input
          class="form-control me-3"
          type="search"
          placeholder="Search post by title or tag"
          aria-label="Search"
          v-model.trim="searchQuery"
        />
        <button class="btn btn-delete-custom me-2" @click="deleteCheckedPosts">
          Delete
        </button>
        <button class="btn btn-delete-custom"><RouterLink class="text-decoration-none btn-color-custom" to="/addpost">Add</RouterLink></button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {RouterLink} from "vue-router"
import { ref, watch } from "vue";
import { usePostsStore } from "../store/posts";
import { storeToRefs } from "pinia";

const searchQuery = ref("");
const postStore = usePostsStore();

const { deletePosts, setSearchQuery } = postStore;
const { checked} = storeToRefs(postStore);

const deleteCheckedPosts = () => {
  checked.value.forEach((item) => {
    const postId = item.toDelIds;
    console.log(postId);
    deletePosts(postId);
  });

  // Clear the checked array after deleting the posts
  checked = [];
};

watch(searchQuery, () => {
  setSearchQuery(searchQuery.value);
});

</script>

<style scoped>
  .navbar-customclass{
    background-color: #a9a5d8;

  }
  .btn-delete-custom{
    background-color: #fff;
    color: #625ca0;
    font-weight: 500;
    border-color: #8a82de;
    width: 7rem;
  }
  .btn-delete-custom:hover{
    background-color: #fff;
    color: #625ca0;
  }
  .btn-color-custom{
    color: #625ca0;
  }
  img{
    height: 4rem;
  }
</style>
