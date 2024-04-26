<template>
    <div>
      <h1>Posts</h1>
      <div v-for="post in posts" :key="post.id" class="p-2">
        <h2 class="text-2xl font-bold">{{ post.title }}</h2>
        <p class="font-mono">{{ post.body }}</p>
        <div class="flex py-2">
          <LikeOff class="w-8 h-8" />
          <Comments class="w-8 h-8" />
        </div>
  
        <div class="px-6 flex">
          <div class="bg-zinc-100 p-1 rounded-full"></div>
          <div>
            <template v-if="comments.some(comment => comment.postId === post.id)">
              <div v-for="comment in comments" :key="comment.id" class="p-2">
                <div v-if="comment.postId === post.id">
                  <p class="font-bold">{{ comment.name }}</p>
                  <p class="font-mono">{{ comment.body }}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LikeOff from "@/assets/LikeOff.vue";
  import Comments from "@/assets/Comments.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    props: {
      posts: {
        type: Array,
        required: true,
      },
      comments: {
        type: Array,
        required: true,
      },
    },
    components: {
      LikeOff,
      Comments,
    },
  });
  </script>
  