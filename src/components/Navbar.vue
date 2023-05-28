<template>
  <nav class="navbar bg-secondary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand text-white">Forum Posts</a>
      <div class="d-flex">
        <input
          class="form-control me-3"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model.trim="searchQuery"
        />
        <button class="btn btn-danger text-red" @click="deleteCheckedPosts">
          Delete
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { usePostsStore } from "../store/posts";
import { storeToRefs } from "pinia";

const searchQuery = ref("");
const postStore = usePostsStore();

const { deletePosts } = postStore;
const { checked, filteredPosts } = storeToRefs(postStore);

const deleteCheckedPosts = () => {
  checked.value.forEach((item) => {
    const postId = item.toDelIds;
    console.log(postId);
    deletePosts(postId);
  });

  // Clear the checked array after deleting the posts
  postStore.checked = [];
};

watch(searchQuery, () => {
  if (!searchQuery.value) {
    filteredPosts.value = postStore.posts;
    return;
  }

  const searchValue = searchQuery.value.toLowerCase();

  filteredPosts.value = postStore.filteredPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchValue) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchValue))
  );
});
</script>

<style scoped></style>
