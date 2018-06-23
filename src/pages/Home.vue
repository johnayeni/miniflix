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

const thumbnail =
  'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt';
const trailer =
  'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4';
const slug = 'spider-man-2018';

export default {
  components: {
    VideoPlayer,
    VideoList
  },
  data() {
    return {
      movie: {
          title: 'Spider Man',
          description: '',
          year: 2018,
          trailer: trailer,
          thumbnail: thumbnail,
          slug: slug,
          category: { name: 'Originals'}
      },
      movies : [],
      url: `${process.env.VUE_APP_WEB_TASK_URL}/movies`,
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
<style scoped>
  @media only screen and (max-width: 767px) {
    .home.container {
      padding: 1em;
    }
  }
</style>