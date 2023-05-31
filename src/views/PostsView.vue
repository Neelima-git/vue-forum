<template>
  <div>
    <Post v-for="post in filteredPosts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
// import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { usePostsStore } from "../store/posts";

import Post from "../components/Post.vue";

const postStore = usePostsStore();
const { filteredPosts } = storeToRefs(postStore);

// onMounted(async () => {
//   await postStore.getPosts();
//   filteredPosts.value = postStore.posts;
// });
</script>

<style scoped>
  div{
    padding-top: 3rem;
  }
</style>
