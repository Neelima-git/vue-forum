<script setup>
import { ref } from "vue";
import { usePostsStore } from "../store/posts";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const postStore = usePostsStore();
const { updatePost } = postStore;
const { posts } = storeToRefs(postStore);
const route = useRoute(); 

const postId = parseInt(route.params.id);
const post = posts.value.find(p => p.id === postId)

const title = ref(post.title);
const body = ref(post.body);
const userId = ref(post.userId);
const tags = ref(post.tags);
const reactions = ref(post.reactions);

const editPost = () => {
  updatePost(postId, title.value, body.value, userId.value, tags.value, reactions.value);
};
</script>

<template>
  <div class="form container col-6 custom-form ">
    <h3 class="custom-title d-flex justify-content-center">Edit Post</h3>
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
    <div class="d-flex justify-content-center">
      <button type="submit" class="btn text-white custom-btn" @click="editPost" >Edit</button>
    </div>
    </form>
    <br />
  </div>
</template>

<style scoped>
.custom-form{
    background: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
}

.custom-title{
    color: #625ca0;
    padding-bottom: 1.5rem;
}
.custom-btn{
    background-color: #837dc7;
}
.custom-btn:hover{
    background-color: #645da9; 
}
</style>
