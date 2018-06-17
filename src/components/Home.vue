<template>
 <div id="app">
   <app-header></app-header>
  <VideoPlayer :cloudinaryInstance="cloudinaryInstance" :movie="movie"></VideoPlayer>
  <div class="container">
    <h2 class="is-size-3">Movies</h2>
    <VideoList :cloudinaryInstance="cloudinaryInstance" :movie="updatePlayer" :movies="movies"></VideoList>
  </div>
  <UploadModal :showModal="showModal" @handle-upload="uploadToServer"></UploadModal>
 </div>
</template>

<script>
import axios from 'axios';
import Header from './Header';
import VideoPlayer from './VideoPlayer.vue';
import VideoList from './VideoList.vue';
import UploadModal from './UploadModal.vue';

export default {
  components: {
    'app-header': Header,
    VideoPlayer,
    VideoList,
    UploadModal
  },
  data() {
    return {
      movie: {
        title: 'Spiderman',
        banner:
          'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt',
        trailer:
          'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4'
      },
      movies: [
        {
          title: 'Spiderman',
          banner:
            'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt',
          trailer:
            'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4'
        },
        {
          title: 'Spiderman',
          banner:
            'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt',
          trailer:
            'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4'
        },
        {
          title: 'Spiderman',
          banner:
            'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt',
          trailer:
            'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4'
        },
        {
          title: 'Spiderman',
          banner:
            'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt',
          trailer:
            'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4'
        },
        {
          title: 'Spiderman',
          banner:
            'https://res.cloudinary.com/christekh/image/upload/y4MBh0EjBlMuOzv9axM4qJlmhzz_vhvcjt',
          trailer:
            'http://res.cloudinary.com/johnayeni/video/upload/v1529271524/Spider-Man_into_the_spider_verse_official_trailer_gasgup.mp4'
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
    },
    uploadToServer(data) {
      axios.post(this.url, data).then(res => {
        this.movies = [...this.movies, res.data];
        this.showModal = false;
      });
    }
  },
  watch: {
    showModal(val) {
      val ? this.$refs.modal.open() : this.$refs.modal.close();
    }
  }
};
</script>
