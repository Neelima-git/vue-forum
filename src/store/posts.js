// import axios from "axios";
// import { defineStore } from "pinia";
// import { reactive, ref } from "vue";
// const apiUrl = "https://dummyjson.com/posts";

// export const usePostsStore = defineStore("post", () => {
//     const post = reactive({});

//     const getPosts = async () => {
//         try {
//             const res = await axios.get(`${apiUrl}`);
//             return console.log(res.data);
//         } catch (error) {
//             return console.log(error);
//         }
//     }

// })

import { defineStore } from 'pinia'

export const usePostsStore = defineStore('filteredPosts', {
  state: () => ({
    posts: [],
    filteredPosts: [],
    checked: []
  }),
  actions: {
    async getPosts() {
      const result = await fetch('https://dummyjson.com/posts')
      const response = await result.json()
      this.posts = response.posts
    },
    deletePosts(postId) {
      this.filteredPosts = this.filteredPosts.filter((obj) => obj.id !== postId);
    }  
  }
})
