<template>
    <div> 
        <h1>Album</h1>
        <div v-for="albums in albums" :key="albums.id">
            <h2>{{albums.title}}</h2>
            <p>{{albums.body}}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        albums: {
            type: Array,
            required: true
        }
    },
    methods: {
      FilterByalbumsId(albumsId) {
        return this.users.find( users => users.id === albumsId.userId);
      }
    },
});
</script>

