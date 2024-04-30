<template>
    <div> 
        <div class="bg-zinc-100 p-2 rounded-md">
            <h2 class="font-bold">{{title}}</h2>
            <h2 style="font-size:14px ;">{{email}}</h2>
            <p>{{body}}</p>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
       title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
});
</script>
