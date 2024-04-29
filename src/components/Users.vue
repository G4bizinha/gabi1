<template>
    <div class="flex"> 
        <img :src="this.photo" class="w-12 rounded-full">
        <h2 style="font-size:18px ;"  class="font-bold mt-2 px-2">{{ name }}</h2>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
        }
    }
});
</script>