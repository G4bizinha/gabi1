<template>
    <div> 
        <h1>Photos</h1>
        <div v-for="photos in photos" :key="photos.id">
            <h2>{{photos.title}}</h2>
            <p>{{photos.body}}</p>
        </div>
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
    }
});
</script>
