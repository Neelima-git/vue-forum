import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue";
import AddPostView from "../views/AddPostView.vue";
import EditPostView from "../views/EditPostView.vue";

//Create the router instance
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'posts',
            component: PostsView
        },
        {
            path: "/addpost",
            name: "addpost",
            component: AddPostView
        },
        {
            path: "/editpost/:id",
            name: "editpost",
            component: EditPostView
        }
    ]
})

export default router;