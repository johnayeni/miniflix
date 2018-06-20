<template>
 <div>
  <VideoPlayer :cloudinaryInstance="cloudinaryInstance" :movie="movie"></VideoPlayer>
  <div class="container home">
    <VideoList category="Movies" :cloudinaryInstance="cloudinaryInstance" @choose-movie="updatePlayer" :movies="movies"></VideoList>
    <VideoList category="Series" :cloudinaryInstance="cloudinaryInstance" @choose-movie="updatePlayer" :movies="movies"></VideoList>
    <VideoList category="Originals" :cloudinaryInstance="cloudinaryInstance" @choose-movie="updatePlayer" :movies="movies"></VideoList>
  </div>
 </div>
</template>

<script>
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import VideoList from '../components/VideoList';

const banner =
  'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt';
const trailer =
  'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4';

export default {
  components: {
    VideoPlayer,
    VideoList
  },
  data() {
    return {
      movie: {
        title: 'Spiderman',
        banner: banner,
        trailer: trailer
      },
      movies: [
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

<style>
  @media only screen and (max-width: 767px) {
    .home.container {
      padding: 1em;
    }
  }
</style>