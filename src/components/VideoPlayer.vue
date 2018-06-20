<template>
  <div class="trailer-bg">
      <video
        id="trailer"
        autoplay
        controls
        class="cld-video-player trailer-bg__video">
      </video>
      <div class="trailer-content">
        <p class="has-text-weight-bold ">{{movie.category || 'Miniflix Original'}}</p>
        <h1 class="title is-size-1  has-text-weight-bold has-text-warning">{{movie.title || 'Black Panther' | toUpperCase}}</h1>
      </div>
  </div>
</template>
​
<script>
export default {
  props: ['cloudinaryInstance', 'movie'],
  mounted() {
    this.player = this.cloudinaryInstance.videoPlayer('trailer', {
      transformation: {
        crop: 'crop',
        width: 1200,
        aspect_ratio: '16:9',
        x: 100,
        y: 100,
        gravity: 'center'
      }
    });
    this.player.source(
      this.movie.trailer ||
        'Marvel_Studios_Black_Panther_-_Official_Trailer_nmrtr7'
    );
    // Mute on blur
    document.hidden && this.player.mute();
    window.onfocus = () => this.player.unmute();
    window.onblur = () => this.player.mute();
  },
  watch: {
    movie(newMovie, oldMovie) {
      this.player.source(newMovie.trailer);
    }
  },
  filters: {
    toUpperCase(str) {
      return str.toUpperCase();
    }
  }
};
</script>
