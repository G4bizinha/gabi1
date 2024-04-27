<template>
  <div class="p-12">
    <h1 class="font-black text-2xl">Minha rede.com</h1>
    <Posts :posts="postsData" :comments="commentsData"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Posts from '@/components/Posts.vue'; 
import { getAllPosts, getAllComments, getAllAlbums, getAllPhotos, getAllUsers } from '@/services/Api';

export default defineComponent({
    components: {
        Posts
    },
    data() {
        return {
            postsData: [],
            commentsData: [],
            albumsData: [],
            photosData: [],
            usersData: []
        };
    },
    mounted() {
      this.getPosts();
      this.getAllComments();
      this.getAllAlbums();
      this.getAllPhotos();
      this.getAllUsers();

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
        },

        async getAllAlbums() {
            try {
                this.albumsData = await getAllAlbums();
            } catch (error) {
                console.log(error);
            } 
        },

        async getAllPhotos() {
            try {
                this.photosData = await getAllPhotos();
            } catch (error) {
                console.log(error);
            } 
        },

        async getAllUsers() {
            try {
                this.usersData = await getAllUsers();
            } catch (error) {
                console.log(error);
            } 
        },
    }
});
</script>




