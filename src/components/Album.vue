<template>
    <div>
      <div class="flex justify-center items-center gap-1 mt-4">
        <!-- Adicione a seta esquerda -->
        <button @click="previousPhoto" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <!-- Imagem principal -->
        <div class="relative">
          <Photos :photos="selectedPhoto" :alt="selectedPhoto.title" v-if="selectedPhoto" class="mx-auto rounded-lg shadow-lg"/>
          <!-- Nome do álbum -->
          <div v-if="album.photos" class="absolute bottom-20 left-0 bg-gray-800 text-white p-1 px-2 mb-2 ml-2 rounded">{{ album.album.title }}</div>
          <!-- Adicione o contador -->
          <div class="absolute top-0 right-0 bg-zinc-400 text-white p-1 px-2 mt-2 mr-2 rounded-full">{{ currentPhotoIndex + 1 }} / {{ album.photos ? album.photos.length : 0 }}</div>
        </div>
        <!-- Adicione a seta direita -->
        <button @click="nextPhoto" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Photos from './Photos.vue';
  
  export default defineComponent({
    props: {
      album: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        currentPhotoIndex: 0,
        selectedPhoto: null
      };
    },
    components: {
      Photos
    },
    created() {
      // Atribui a primeira foto como selecionada após um atraso de 500 milissegundos
      setTimeout(() => {
        if (this.album.photos && this.album.photos.length > 0) {
          this.selectedPhoto = this.album.photos[0];
        }
      }, 500);
    },
    methods: {
      nextPhoto() {
        // Avança para a próxima foto
        if (this.album.photos && this.currentPhotoIndex < this.album.photos.length - 1) {
          this.currentPhotoIndex++;
        }
      },
      previousPhoto() {
        // Retrocede para a foto anterior
        if (this.album.photos && this.currentPhotoIndex > 0) {
          this.currentPhotoIndex--;
        }
      }
    },
    watch: {
      currentPhotoIndex() {
        // Define a foto selecionada com base no índice atual
        this.selectedPhoto = this.album.photos[this.currentPhotoIndex];
      }
    }
  });
  </script>
  