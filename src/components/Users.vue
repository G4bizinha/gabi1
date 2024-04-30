<template>
<div class="bg-gray-100 p-2 rounded-lg">
    <div class="flex"> 
        <img :src="this.photo" class="w-12 rounded-full">
        <div>
            <h2 style="font-size:18px ;"  class="font-bold px-2">{{ user.name }} ({{ user.username }})</h2>
            <h2 style="font-size:14px ;"  class="px-2">{{ user.company.name }} | {{ user.company.catchPhrase }} </h2>
        </div>
    </div>
    <div class="px-12">
        <h2 style="font-size:14px ;"  class="px-2 ">{{ user.company.bs }}</h2>
        <h2 style="font-size:14px ;"  class="px-2 ">{{ user.email }} | {{ user.phone }} | {{ user.website}}</h2>
        <div class="flex">
            <img src="https://img.icons8.com/?size=512&id=1wZ7O7ctGOe4&format=png" alt="Location Icon" class="w-4 h-4 mt-1 ml-2" />
            <h2 style="font-size:14px ;"  class="px-2 ">{{ user.address.street }} | {{ user.address.suite }} | {{ user.address.city }}</h2>
        </div>
        <h2 style="font-size:14px ;"  class="px-2 ">{{ user.address.zipcode }} | {{ user.address.geo.lat }} | {{ user.address.geo.lng }}</h2>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        user: {
            type: Array,
            required: true
        },
        photo: {
            type: String,
            required: true
        }
    }
});
</script>