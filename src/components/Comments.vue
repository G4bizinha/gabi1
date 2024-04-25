<template>
    <div> 
        <h1>Comments</h1>
        <div v-for="comments in comments" :key="comments.id">
            <h2>{{comments.title}}</h2>
            <p>{{comments.body}}</p>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
       comments: {
            type: Array,
            required: true
        }
    }
});
</script>
