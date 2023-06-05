import { defineStore } from "pinia";

export const usePostsStore = defineStore("filteredPosts", {
  state: () => ({
    posts: [],
    filteredPosts: [],
    checked: [],
  }),
  actions: {
    async getPosts() {
      const result = await fetch("https://dummyjson.com/posts");
      const response = await result.json();
      this.posts = response.posts;
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
    deletePosts(postId) {
      this.filteredPosts = this.filteredPosts.filter(
        (obj) => obj.id !== postId
      );
    },
    addPost(postId, title, body, userId, tags, reactions) {
      // Add validation checks
      if (!title || !postId || !userId) {
        console.log(
          "Invalid data. Please provide a valid title, postId, and userId."
        );
        return;
      }

      const tagsArray = tags.split(",").map((tag) => tag.trim()); // Split the tags string and trim whitespace
      console.log(title, body, userId, tagsArray, reactions);
      this.posts.push({
        id: postId,
        title,
        body,
        userId,
        tags: tagsArray,
        reactions,
      });
      // const checkAddedPost = this.posts.find((obj) => obj.id == postId);
      // console.log( "addedd post" ,checkAddedPost);
      console.log(this.posts);
    },

    updatePost(postId, title, body, userId, tags, reactions) {
      const postIndex = this.posts.findIndex((post) => post.id === postId);
      // console.log(postId);
      // console.log(postIndex);
      if (postIndex !== -1) {

        const tagsArray = tags.split(",").map((tag) => tag.trim()); // Split the tags string and trim whitespace

        const updatedPost = {
          ...this.posts[postIndex],
          title,
          body,
          userId,
          tags: tagsArray,
          reactions,
        };

        this.posts.splice(postIndex, 1, updatedPost);
        // const checkUpdatedPost = this.posts.find((obj) => obj.id == postId);
        // console.log("Updated post",checkUpdatedPost);
      }
    },
  },
});

// import { ref } from 'vue'
// import { defineStore } from 'pinia'
// export const usePostsStore = defineStore("filteredPosts",() => {

//   const posts = ref([]);
//   const filteredPosts = ref([]);
//   const checked = ref([]);

//   async function getPosts() {
//     const result = await fetch('https://dummyjson.com/posts')
//     const response = await result.json()
//     console.log(response);
//     posts.value = response.posts;
//     console.log(posts.value);
//   }

//   function deletePosts(postId) {
//     filteredPosts.value = filteredPosts.filter((obj) => obj.id !== postId);
//   }

//   function addPost(postId, title, body, userId, tags, reactions){
//     console.log(title, body, userId, tags, reactions);
//     if(!userId.length || !title.length || postId.length) return
//     // console.log(title, body, userId, tags, reactions);
//     posts.value.push({
//       id: postId,
//       title,
//       body,
//       userId,
//       tags,
//       reactions
//     })
//     // const checkAddedPost = this.posts.find((obj) => obj.id == postId);
//     // console.log( "addedd post" ,checkAddedPost);
//   }

//   function updatePost(postId, title, body, userId, tags, reactions) {
//     const postIndex = posts.findIndex(post => post.id === postId);
//     console.log(postId);
//     console.log(postIndex);
//     if (postIndex !== -1) {
//       const updatedPost = {
//         ...posts[postIndex],
//         title,
//         body,
//         userId,
//         tags,
//         reactions
//       };

//       posts.splice(postIndex, 1, updatedPost);
//       const checkUpdatedPost = posts.find((obj) => obj.id == postId);
//       console.log("Updated post",checkUpdatedPost);
//     }
//   }

//   return { getPosts, deletePosts, addPost, updatePost  }

// })
