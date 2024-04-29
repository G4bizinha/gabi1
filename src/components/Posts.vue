<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="p-2">
      <Users :name="getUserById(post.userId || 1).name" :photo="userPhoto(post.userId)" class="p-1" />
      <h2 class="text-2xl font-bold">{{ post.title }}</h2>
      <p class="font-mono">{{ post.body }}</p>
      <div class="flex py-2">
        <CommentsIcon @click="toggleComments(post.id)" class="w-8 h-8 ml-4" />
      </div>

      <div class="px-6 flex">
        <div class="bg-blue-200 p-1 rounded-full"></div>
        <div>
          <div v-for="comment in filterCommentsByPost(post)" :key="comment.id">
            <Comments :title="comment.name" :body="comment.body" v-if="isCommentVisible(post.id)" class="p-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentsIcon from "@/assets/Comments.vue";
import Comments from "@/components/Comments.vue";
import Users from "@/components/Users.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      visibleComments: [],
      userPhotos: {}, // Usaremos um objeto para armazenar as fotos de perfil por userId
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
  },
  methods: {
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
    async fetchUserPhotos() {
      // Iterar sobre os usuários para obter as fotos de perfil
      for (const user of this.users) {
        // Encontre o álbum do usuário
        const userAlbum = this.albums.find(album => album.userId === user.id);
        if (userAlbum) {
          // Encontre a primeira foto do álbum
          const firstPhoto = this.photos.find(photo => photo.albumId === userAlbum.id);
          if (firstPhoto) {
            // Use a URL da primeira foto como foto de perfil e armazene no objeto userPhotos
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
  },
});
</script>
