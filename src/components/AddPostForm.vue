<script setup>
import { ref } from "vue";
import { usePostsStore } from "../store/posts";
import { RouterLink } from "vue-router";

const postStore = usePostsStore();
const { addPost } = postStore;

const postId = ref(Math.floor(Math.random() * 1000000));
const title = ref("");
const body = ref("");
const userId = ref();
const tags = ref("");
const reactions = ref();

const addAPost = () => {
  console.log("addAPost method called");
  console.log(
    postId.value,
    title.value,
    body.value,
    userId.value,
    tags.value,
    reactions.value
  );
  addPost(postId.value ,title.value, body.value, userid.value, tags.value, reactions.value);
};
</script>

<template>

  <div class="form container col-6">
    <h3 class="text-secondary mb-4">Add Post</h3>
    <form @submit.prevent >
    <div class="row">
        <div  class="mb-3">
          <label for="title"  class="form-label">Title</label>
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
          <label for="userId" class="form-label">User Id</label>
          <input
            v-model="userId"
            type="number"
            class="form-control"
            id="userId"
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
      <button type="submit" class="btn btn-primary" @click="addAPost" >Add post</button>
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
