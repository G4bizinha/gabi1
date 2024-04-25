<template>
    <div> 
        <h1>Users</h1>
        <div v-for="users in users" :key="users.id">
            <h2>{{users.title}}</h2>
            <p>{{users.body}}</p>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        users: {
            type: Array,
            required: true
        }
    }
});
</script>