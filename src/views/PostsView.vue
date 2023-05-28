<template>
  <div>
    <!-- Navbar -->
    <div class="navbar">
      <Navbar />
    </div>

    <!-- Posts -->
    <Post v-for="post in filteredPosts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { usePostsStore } from "../store/posts";

import Navbar from "../components/Navbar.vue";
import Post from "../components/Post.vue";

const postStore = usePostsStore();
const { filteredPosts } = storeToRefs(postStore);

onMounted(async () => {
  await postStore.getPosts();
  filteredPosts.value = postStore.posts;
});
</script>

<style scoped>
.navbar {
  margin-bottom: 5rem;
}
</style>
