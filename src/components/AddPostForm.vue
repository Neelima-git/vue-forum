<script setup>
import { ref } from "vue";
import { usePostsStore } from "../store/posts";

const postStore = usePostsStore();
const { addPost } = postStore;

const postId = ref(Math.floor(Math.random() * 1000000));
const title = ref("");
const body = ref("");
const userId = ref();
const tags = ref("");
const reactions = ref();

const addAPost = () => {
  // console.log(postId.value ,title.value, body.value, userId.value, tags.value, reactions.value);
  addPost(postId.value ,title.value, body.value, userId.value, tags.value, reactions.value);
};
</script>

<template>
  <div class="form container col-6 custom-form ">
    <h3 class="mb-4 custom-title d-flex justify-content-center ">Add Post</h3>
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
    <div class="d-flex justify-content-center">
      <button type="submit" class="btn text-white custom-btn " @click="addAPost" >Add post</button>
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
.custom-title{
    color: #625ca0;
}
.custom-btn{
    background-color: #837dc7;
}
.custom-btn:hover{
    background-color: #645da9; 
}
</style>
