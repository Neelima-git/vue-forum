<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { usePostsStore } from "./store/posts";

const postStore = usePostsStore();
const { filteredPosts, newPosts } = storeToRefs(postStore);
console.log(newPosts);

onMounted(async () => {
  await postStore.getPosts();
  filteredPosts.value = postStore.posts ;
});
</script>

<template>
  <div>
    <div class="navbar">
      <Navbar />
    </div>
    <div class="custom-page">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  padding-bottom: 4rem;
}
.custom-page {
  background-color: #e0e1f5;
  min-height: 100vh;
}
</style>
