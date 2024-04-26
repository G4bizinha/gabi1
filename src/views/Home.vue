<template>
  <div class="p-12">
    <h1 class="font-black text-2xl">Minha rede.com</h1>
    <Posts :posts="postsData" :comments="commentsData"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Posts from '@/components/Posts.vue'; 
import { getAllPosts, getAllComments } from '@/services/Api';

export default defineComponent({
    components: {
        Posts
    },
    data() {
        return {
            postsData: [],
            commentsData: []
        };
    },
    mounted() {
      this.getPosts();
      this.getAllComments();
    },
    methods: {
        async getPosts() {
            try {
                this.postsData = await getAllPosts();
            } catch (error) {
                console.log(error);
            } 
        },
        async getAllComments() {
            try {
                this.commentsData = await getAllComments();
            } catch (error) {
                console.log(error);
            } 
        }
    }
});
</script>




