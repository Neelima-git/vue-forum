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
    },
    addPost(postId, title, body, userId, tags, reactions){
      console.log(title, body, userId, tags, reactions);
      if(!userId.length || !title.length || postId.length) return
      // console.log(title, body, userId, tags, reactions);
      this.posts.push({
        id: postId,
        title,
        body,
        userId,
        tags,
        reactions
      })
      // const checkAddedPost = this.posts.find((obj) => obj.id == postId);
      // console.log( "addedd post" ,checkAddedPost);
    },
    updatePost(postId, title, body, userId, tags, reactions) {
      const postIndex = this.posts.findIndex(post => post.id === postId);
      console.log(postId);
      console.log(postIndex);
      if (postIndex !== -1) {
        const updatedPost = {
          ...this.posts[postIndex],
          title,
          body,
          userId,
          tags,
          reactions
        };

        this.posts.splice(postIndex, 1, updatedPost);
        const checkUpdatedPost = this.posts.find((obj) => obj.id == postId);
        console.log(checkUpdatedPost);
      }
    }
  }
})
