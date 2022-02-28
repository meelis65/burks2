<template>
<div class= "row deals"> 

    
          <div class="col-mb-3"
            v-for="burgers in FeaturedFromServer"
            :key="burgers"
            >
            <p> 
            {{ burgers.title }} {{ burgers.price }}€ {{ burgers.stock }} in stock image url: <img :src=" burgers.img  " />
            </p>
           </div>
</div>
</template>

<script>

import { ref } from "vue";
import axios from "axios";

export default {
 name: "burgers",
  props: {
    title: String,
    price: Number,
    stock: String,
    img: String,
  },

  setup(){
    

      const FeaturedFromServer = ref([]);
    async function getFeatured() {
      const result = await axios.get("/api/get-burgers");
      FeaturedFromServer.value = result.data.filter(result => result.featured === true);
      console.log(FeaturedFromServer.value)
    }

getFeatured();

  return {

getFeatured,
FeaturedFromServer,

  };

  },

};

  </script>