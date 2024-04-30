<template>
    <div class="lg:px-32 px-2 py-2">
      <h1 class="font-black text-2xl">Minha rede.com</h1>
      <div>
          <div>
              <Posts 
              :users="usersData" 
              :posts="postsData" 
              :comments="commentsData"
              :photos="photosData"
              :albums="albumsData"
              />
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Posts from '@/components/Posts.vue'; 
  import { getAllPosts, getAllComments, getAllAlbums, getAllPhotos, getAllUsers } from '@/services/Api';
  import CommentsCard from '@/components/Comments.vue';
  
  export default defineComponent({
      components: {
          Posts,
          CommentsCard,
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
                  console.log(this.usersData);
              } catch (error) {
                  console.log(error);
              } 
          },
      }
  });
  </script>
  
  
  
  
  