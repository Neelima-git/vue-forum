<template>
  <div>
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
          <div class="d-flex align-items-center">
            <button
              class="btn btn-outline-secondary me-2"
              style="--bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.75rem;"
            >
              <font-awesome-icon icon="fa-solid fa-thumbs-up" />
              <span>{{ post.reactions }}</span>
            </button>
            <div v-for="tag in post.tags" :key="tag.id">
              <a href="#" class="card-link me-2">#{{ tag }}</a>
            </div>
            
            <input class="form-check-input ms-auto" type="checkbox" :value="post.id" v-model="selectedPosts" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { post } = defineProps(['post'])
</script>

<style scoped>

</style>
