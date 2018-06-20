<template>
  <div>
    <h4 class="is-size-4">{{ category || 'Miniflix Originals'}}</h4>
    <div class="row">
      <div style="margin:auto;padding:5em"  v-if="!movies || movies.length < 1">Loading...</div>
      <div class="row__inner" v-else>
        <div v-for="movie in movies" :key="movie._id" class="tile">
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
