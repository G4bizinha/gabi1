<template>
    <div> 
        <h1>Posts</h1>
        <div v-for="post in posts" :key="post.id" class="">
            <h2 class="text-2xl font-bold">{{ post.title }}</h2>
            <p class="font-mono">{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
});
</script>
