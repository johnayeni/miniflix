<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
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
          <a class="navbar-item has-text-white">Home</a>
          <a class="navbar-item has-text-white">Movies</a>
          <a class="navbar-item has-text-white">Series</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
