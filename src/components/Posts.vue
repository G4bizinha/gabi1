<template>
  <div class="px-2">
    <div v-if="currentPost" class="p-2 flex">
      <div>
        <div class="flex-none">
          
          <Album :album="getFilteredAlbum(currentPost.userId, currentPost.id)" class="p-1"/>
        </div>
      </div>
      <!-- Comentários -->
      <div class="w-6/12 px-6 flex flex-col flex-grow">
        <div class="flex-grow overflow-y-auto">
          <div class="flex-grow pl-2 py-1">
            <Users :user="getUserById(currentPost.userId)" :photo="userPhoto(currentPost.userId)" class="p-1" />
            <div class="bg-gray-100 p-2 rounded-lg mt-2">
              <h2 class="text-2xl font-bold">{{ currentPost.title }}</h2>
            <p class="font-mono">{{ currentPost.body }}</p>
            <div class="flex mt-2">
              <div class="flex py-2">
                <CommentsIcon @click="toggleComments(currentPost.id)" class="w-8 h-8 ml-4" />
              </div>
            </div>
            </div>
          </div>
          <div v-for="comment in filterCommentsByPost(currentPost)" :key="comment.id">
            <Comments :title="comment.name" :body="comment.body" :email="comment.email" v-if="isCommentVisible(currentPost.id)" class="p-1" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <button @click="previousPost" class="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span class="mx-4">{{ currentIndex + 1 }} / {{ posts.length }}</span>
      <button @click="nextPost" class="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import CommentsIcon from "@/assets/Comments.vue";
import Comments from "@/components/Comments.vue";
import Users from "@/components/Users.vue";
import Album from "@/components/Album.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      visibleComments: [],
      userPhotos: {},
      currentIndex: 0,
    };
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    comments: {
      type: Array,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
    photos: {
      type: Array,
      required: true,
    },
    albums: {
      type: Array,
      required: true,
    },
  },
  components: {
    Comments,
    CommentsIcon,
    Users,
    Album,
  },
  computed: {
    currentPost() {
      return this.posts[this.currentIndex];
    },
  },
  methods: {
    getFilteredAlbum(userId, postId) {
      const userAlbums = this.albums.filter(album => album.userId === userId);
      const postIndex = this.posts.findIndex(post => post.id === postId);
      const albumIndex = postIndex % userAlbums.length;
      if (userAlbums.length === 0) return {};
      const selectedAlbum = userAlbums[albumIndex];
      const albumPhotos = this.photos.filter(photo => photo.albumId === selectedAlbum.id);
      return { album: selectedAlbum, photos: albumPhotos };
    },
    filterCommentsByPost(post) {
      return this.comments.filter(comment => comment.postId === post.id);
    },
    getUserById(userId) {
      return this.users.find(user => user.id === userId) || {};
    },
    toggleComments(postId) {
      const index = this.visibleComments.indexOf(postId);
      if (index === -1) {
        this.visibleComments.push(postId);
      } else {
        this.visibleComments.splice(index, 1);
      }
    },
    isCommentVisible(postId) {
      return this.visibleComments.includes(postId);
    },
    previousPost() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextPost() {
      if (this.currentIndex < this.posts.length - 1) {
        this.currentIndex++;
      }
    },
    async fetchUserPhotos() {
      for (const user of this.users) {
        const userAlbum = this.albums.find(album => album.userId === user.id);
        if (userAlbum) {
          const firstPhoto = this.photos.find(photo => photo.albumId === userAlbum.id);
          if (firstPhoto) {
            this.userPhotos[user.id] = firstPhoto.url;
          }
        }
      }
    },
    userPhoto(userId) {
      return this.userPhotos[userId];
    },
  },
  mounted() {
    this.fetchUserPhotos();
    setTimeout(() => {
      this.fetchUserPhotos();
    }, 500);
  },
});
</script>