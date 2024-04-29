<template>
  <div>
    <div v-for="post in displayedPosts" :key="post.id" class="p-2">
        <Users :name="getUserById(post.userId || 1).name" :photo="userPhoto(post.userId)" class="p-1" />
      <h2 class="text-2xl font-bold">{{ post.title }}</h2>
      <p class="font-mono">{{ post.body }}</p>
      <div class="flex py-2">
        <CommentsIcon @click="toggleComments(post.id)" class="w-8 h-8 ml-4 cursor-pointer" />
      </div>

      <div class="px-6 flex">
        <div class="bg-blue-200 p-1 rounded-full"></div>
        <div>
          <div v-for="comment in filterCommentsByPost(post)" :key="comment.id">
            <Comments :title="comment.name" :body="comment.body" v-if="isCommentVisible(post.id)" class="p-2" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-4">
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-2" @click="previousPage" :disabled="currentPage === 1">Anterior</button>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2" @click="nextPage" :disabled="currentPage === totalPages">Próximo</button>
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
      userPhotos: {},
      currentPage: 1,
      postsPerPage: 5, // Número de posts por página
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
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    displayedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.posts.slice(startIndex, endIndex);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
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
    async fetchUserPhotos() {
      for (const user of this.users) {
        const userAlbum = this.albums.find(album => album.userId === user.id);
        if (userAlbum) {
          const firstPhoto = this.photos.find(photo => photo.albumId === userAlbum.id);
          if (firstPhoto) {
            try {
              this.userPhotos[user.id] = await this.loadImage(firstPhoto.url);
            } catch (error) {
              console.error("Erro ao carregar imagem:", error);
            }
          }
        }
      }
    },
    loadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
      });
    },
    userPhoto(userId) {
      return this.userPhotos[userId] || ''; // Retorna uma string vazia se a imagem ainda não estiver carregada
    },
  },
  async mounted() {
    await this.fetchUserPhotos();
  },
});
</script>
