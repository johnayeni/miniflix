<template>
  <div class="list-section">
    <h4 class="is-size-4">{{ category || 'Netflix Originals'}}</h4>
    <div class="row">
    <div class="row__inner">
      <div v-if="movies.length < 1">Loading...</div>
      <div v-else v-for="movie in movies" :key="movie._id" class="tile">
        <img :src="cloudinaryInstance.url(movie.banner)" alt="" class="banner" @click="$emit('choose-movie', movie)">
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: ['cloudinaryInstance', 'movies', 'category']
};
</script>
