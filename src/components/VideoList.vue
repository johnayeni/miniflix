<template>
  <div>
    <div class="columns" v-for="i in Math.ceil(movies.length / 6)" :key="i">
      <div v-if="movies.length < 1">Loading...</div>
      <div v-else v-for="movie in movies.slice((i - 1) * 6, i * 6)" :key="movie._id" class="column">
        <img :src="cloudinaryInstance.url(movie.banner)" alt="" class="banner" @click="$emit('choose-movie', movie)">
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: ['cloudinaryInstance', 'movies']
};
</script>
<style>
.banner {
  max-width: 204px;
  height: auto;
}
.banner:hover {
  cursor: pointer;
}
</style>
