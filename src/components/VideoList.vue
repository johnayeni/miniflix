<template>
  <div>
    <h4 class="is-size-4">{{ category || 'Miniflix Originals'}}</h4>
    <div class="row">
      <div style="margin:auto;padding:5em"  v-if="!movies || movies.length < 1">Loading...</div>      
      <div v-for="movie in movies" :key="movie._id" v-else>
        <Movie :cloudinaryInstance="cloudinaryInstance" :movie="movie"
          @click="$emit('choose-movie', movie)"></Movie>
        <!-- cloudinaryInstance.url(movie.thumbnail)" -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Movie from "./Movie";
export default {
  components: {
    Movie
  },
  props: ["cloudinaryInstance", "movies", "category"]
};
</script>
