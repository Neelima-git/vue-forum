<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar bg-secondary bg-opacity-50">
        <div class="container-fluid">
          <a class="navbar-brand">Forum Posts</a>
          <div class="d-flex" >
            <input
              class="form-control me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model.trim="searchQuery"
            />
            <button class="btn btn-outline-danger text-red">Delete</button>
          </div>
        </div>
      </nav>
  
      <!-- Posts -->
      <Post v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from "vue";
  import { usePostsStore } from "../store/posts";
  import Post from "../components/Post.vue";
  
  const postStore = usePostsStore();
  const searchQuery = ref("");
  const filteredPosts = ref([]);
  
  onMounted(async () => {
    await postStore.getPosts();
    filteredPosts.value = postStore.posts;
  });
  
  watch(searchQuery, () => {
    if (!searchQuery.value) {
      filteredPosts.value = postStore.posts;
      return;
    }
  
    const searchValue = searchQuery.value.toLowerCase();
  
    filteredPosts.value = postStore.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchValue) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchValue))
    );
  });
  </script>
  
  <style scoped></style>
  