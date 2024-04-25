<template>
  <div class="p-12">
    <h1 class="font-black text-2xl">Minha rede.com</h1>
    <Posts :posts="postsData"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Posts from '@/components/Posts.vue'; 
import { getAllPosts } from '@/services/Api';

export default defineComponent({
    components: {
        Posts
    },
    data() {
        return {
            postsData: []
        };
    },
    mounted() {
      this.getPosts();
    },
    methods: {
        async getPosts() {
            try {
                this.postsData = await getAllPosts();
            } catch (error) {
                console.log(error);
            } 
        }
    }
});
</script>




