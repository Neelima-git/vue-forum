<template>
  <div class="d-flex justify-content-center pt-4">
    <div class="card w-75 custom-card">
      <div class="card-header custom-header">
        <!-- Title -->
        <h5 class="card-title my-auto custom-title">{{ post.title }}</h5>
      </div>
      <div class="card-body custom-body">
        <!-- Body -->
        <p class="card-text">
          {{ post.body }}
        </p>
        <!-- Footer -->
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <button
              class="btn btn-outline-secondary me-2 custom-reactions"
              style="
                --bs-btn-padding-y: 0.25rem;
                --bs-btn-padding-x: 0.5rem;
                --bs-btn-font-size: 0.75rem;
              "
            >
              <font-awesome-icon icon="fa-solid fa-thumbs-up" class="me-2 custom-icon" />
              <span class="custom-icon fw-bold">{{ post.reactions }}</span>
            </button>
            <div>
              <a
                v-for="tag in post.tags"
                :key="tag.id"
                href="#"
                class="card-link"
              >
                #{{ tag }}
              </a>
            </div>
          </div>
          <div>
            <RouterLink :to="`/editpost/${post.id}`" class="text-black">
              <font-awesome-icon icon="fa-solid fa-edit" class="me-2 custom-icon" />
            </RouterLink>

            <input
              class="form-check-input"
              type="checkbox"
              :value="{ toDelIds: post.id }"
              v-model="checked"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
const { post } = defineProps(["post"]);
import { usePostsStore } from "../store/posts";

const postStore = usePostsStore();
const { checked } = storeToRefs(postStore);
</script>

<style scoped>
.custom-card {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.fa-edit{
  color: black;
}
.custom-title{
  color: #625ca0;
}
.custom-icon{
  color: #625ca0;
}
.custom-reactions:hover{
  background-color: #e0e1f5;
}
</style>
