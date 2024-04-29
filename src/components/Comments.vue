<template>
    <div> 
        <div>
            <h2 class="font-bold">{{title}}</h2>
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
        }
    }
});
</script>
