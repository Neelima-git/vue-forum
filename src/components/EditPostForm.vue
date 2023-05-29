<script setup>
import { ref } from "vue";
import { usePostsStore } from "../store/posts";
import { RouterLink, useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const postStore = usePostsStore();
const { updatePost } = postStore;
const { posts } = storeToRefs(postStore);
const route = useRoute(); 

const postId = parseInt(route.params.id);
const post = posts.value.find(p => p.id === postId)

const title = ref(post.title);
const body = ref(post.body);
const userid = ref(post.userId);
const tags = ref(post.tags);
const reactions = ref(post.reactions);

const editPost = () => {
  updatePost(postId, title.value, body.value, userid.value, tags.value, reactions.value);
};
</script>

<template>

  <div class="form container col-6">
    <h3 class="text-secondary mb-4">Edit Post</h3>
    <form @submit.prevent >
    <div class="row">
        <div  class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            v-model="title"
            type="text"
            class="form-control"
            id="title"
            placeholder=""
          />
        </div>
        <div  class="mb-3">
          <label for="body"  class="form-label">Body</label>
          <input
            v-model="body"
            type="text"
            class="form-control"
            id="body"
            placeholder=""
          />
        </div>
        <div  class="mb-3">
          <label for="userid" class="form-label">User Id</label>
          <input
            v-model="userid"
            type="number"
            class="form-control"
            id="userid"
            placeholder="Add user Id, e.g 2"
          />
        </div>
        <div  class="mb-3">
          <label for="tags" class="form-label">Tags</label>
          <input
            v-model="tags"
            type="text"
            class="form-control"
            id="tags"
            placeholder="Add tags"
          />
        </div>
        <div  class="mb-3">
          <label for="reactions"  class="form-label">Reactions</label>
          <input
            v-model="reactions"
            type="number"
            class="form-control"
            id="reactions"
            placeholder="Enter number of reactions!"
          />
        </div>
    </div>
      <button type="submit" class="btn btn-primary" @click="editPost" >Edit</button>
    </form>
    <br />

    <RouterLink to="/">View posts</RouterLink>
  </div>
</template>

<style scoped>
.form {
  margin-top: 6rem;
}
</style>
