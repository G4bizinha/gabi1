<template>
    <div> 
        <h1>Album</h1>
        <div v-for="albuns in albuns" :key="albuns.id">
            <h2>{{albuns.title}}</h2>
            <p>{{albuns.body}}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        albuns: {
            type: Array,
            required: true
        }
    }
});
</script>

