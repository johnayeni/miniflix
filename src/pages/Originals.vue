<template>
  <div class="container originals" style="margin-bottom:5em">
      <h1 class="is-size-2" style="margin-bottom:.5em">Miniflix Originals</h1>
      <div class="columns is-multiline">
        <div style="margin:auto;padding:8em" v-if="!movies || movies.length < 1">Loading...</div>
        <div class="column is-2" v-else v-for="movie in movies" :key="movie._id" >
            <router-link to="/home">
              <img :src="cloudinaryInstance.url(movie.thumbnail)" :alt="movie.title"
                style="height: 100%; width:100%">
              <p class="has-text-centered">{{ movie.title }}</p>
            </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

const thumbnail =
  'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt';
const trailer =
  'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4';
const slug = 'spider-man-2018';
export default {
  data() {
    return {
      movies: [],
      url: `${process.env.VUE_APP_WEB_TASK_URL}/category/originals/movies`,
    };
  },
  created() {
    this.cloudinaryInstance = window.cloudinary.Cloudinary.new({
      cloud_name: 'johnayeni',
      secure: true
    });
    axios.get(this.url).then(res => {
      this.movies = res.data;
    });
  },
};
</script>
<style scoped>
  .column.is-2 a:hover {
    color: white;
  }
  .column.is-2 {
    height: 150px;
    width: 20%;
    margin-bottom: 4em;
    padding: .1em;
  }
  @media only screen and (max-width: 767px) {
    .column.is-2 {
      width: initial;
      padding: 0.75rem;
    }
    .originals.container {
      padding: 1em;
    }
  }
</style>
