<template>
    <div> 
        <img :src="photos.url"/>
        <h2>{{photos.title}}</h2>
        <h2 style="font-size:14px ;"  class="font-bold">{{ photos.thumbnailUrl}} </h2>    
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
       photos: {
            type: Array,
            required: true
        }
    },
    methods: {
      FilterByphotosId(photosId) {
        const photos = this.photos.find( users => users.id === photosId);
        const albums = this.albums.find( users => users.id === albums[0].userId);
        return albums + photos;
      }
    },

});
</script>
