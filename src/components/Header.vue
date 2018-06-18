<template>
  <nav :class="isTransparent ? 'navbar is-fixed-top navbar-transparent' : 'navbar is-fixed-top'" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png" alt="Netflix" width="112" height="28">
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div :class="isOpen ? 'navbar-menu is-active' : 'navbar-menu'">
            <!-- Upload button here -->
            <!-- <a class="button navbar-item" @click="showModal = !showModal">
              Upload
            </a>
            <a class="button navbar-item">
              <social-sharing
                title="Build a Mini Netflix from scratch"
                url="https://cloudinary.gitbooks.io/build-a-mini-netflix-clone-with-vue/content" inline-template>
                <div>
                  <network network="twitter">
                    Share
                  </network>
                </div>
              </social-sharing>
            </a> -->
          <div class="navbar-start">
            <router-link to="/home" class="navbar-item has-text-white">Home</router-link>
          </div>
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link has-text-white">
                John
              </a>
              <div class="navbar-dropdown" style="background-color: #000000">
                <router-link to="/profile" class="navbar-item has-text-white">
                  Profile
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- <UploadModal :showModal="showModal" @handle-upload="uploadToServer"></UploadModal> -->
</template>

<script>
import UploadModal from '../components/UploadModal.vue';

export default {
  components: {
    UploadModal
  },
  data() {
    return {
      isOpen: false,
      isTransparent: false
    };
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen;
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
  },
  created() {
    document.addEventListener('scroll', () => {
      if (
        window.scrollY < 200 &&
        String(window.location.pathname) === '/home'
      ) {
        this.isTransparent = true;
      } else {
        this.isTransparent = false;
      }
    });
  }
};
</script>
