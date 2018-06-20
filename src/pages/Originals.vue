<template>
  <div class="container">
      <h1 class="is-size-2" style="margin-bottom:.5em">Miniflix Originals</h1>
      <div class="columns is-multiline">
        <div style="margin:auto;padding:8em" v-if="!movies || movies.length < 1">Loading...</div>
        <div class="column is-2" v-else v-for="movie in movies" :key="movie._id" >
            <img src="" alt="" class="image is-4by3">
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import VideoList from '../components/VideoList';

const banner =
  'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt';
const trailer =
  'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4';

export default {
  components: {
    VideoList
  },
  data() {
    return {
      movie: {
        title: 'Spiderman',
        banner: banner,
        trailer: trailer
      },
      movies_: [
        {
          title: 'Black Panther',
          banner: banner,
          trailer: trailer
        },
        {
          title: 'Dead pool',
          banner: banner,
          trailer: trailer
        },
        {
          title: 'Ant man',
          banner: banner,
          trailer: trailer
        },
        {
          title: 'Justice League',
          banner: banner,
          trailer: trailer
        },
        {
          title: 'Star wars',
          banner: banner,
          trailer: trailer
        },
        {
          title: 'Spiderman',
          banner: banner,
          trailer: trailer
        },
        {
          title: 'Spiderman',
          banner: banner,
          trailer: trailer
        },
        {
          title: 'Star wars',
          banner: banner,
          trailer: trailer
        },
        {
          title: 'Spiderman',
          banner: banner,
          trailer: trailer
        },
        {
          title: 'Spiderman',
          banner: banner,
          trailer: trailer
        }
      ],
      url: '<YOUR WEBTASK URL>/movies',
      showModal: false
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
  methods: {
    updatePlayer(movie) {
      this.movie = movie;
    }
  }
};
</script>
