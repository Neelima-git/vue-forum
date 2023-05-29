<template>
  <div class="d-flex justify-content-center mt-4">
    <div class="card w-75">
      <div class="card-header bg-secondary bg-opacity-25">
        <!-- Title -->
        <h5 class="card-title my-auto">{{ post.title }}</h5>
      </div>
      <div class="card-body bg-secondary bg-opacity-10">
        <!-- Body -->
        <p class="card-text">
          {{ post.body }}
        </p>
        <!-- Footer -->
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <button
              class="btn btn-outline-secondary me-2"
              style="
                --bs-btn-padding-y: 0.25rem;
                --bs-btn-padding-x: 0.5rem;
                --bs-btn-font-size: 0.75rem;
              "
            >
              <font-awesome-icon icon="fa-solid fa-thumbs-up" class="ml-2" />
              <span>{{ post.reactions }}</span>
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
            <RouterLink :to="`/editpost/${post.id}`">
              <font-awesome-icon icon="fa-solid fa-edit" class="me-2" />
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

<style scoped></style>
