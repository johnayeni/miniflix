<template>
  <sweet-modal modal-theme="dark" overlay-theme="dark" ref="modal">
    <form @submit.prevent="handleUpload()" class="has-text-left">
      <div class="field">
        <label class="label has-text-white">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" v-model="title">
        </div>
      </div>
      <div class="field">
        <label class="label has-text-white">Upload Banner</label>
        <button class="button" @click="startUpload('banner')">Upload</button>
        <span class="has-text-white">{{banner}}</span>
      </div>
      <div class="field">
        <label class="label has-text-white">Upload Video</label>
        <button class="button" @click="startUpload('trailer')">Upload</button>
        <span class="has-text-white">{{trailer}}</span>
      </div>
      <button class="button is-danger">Submit</button>
    </form>
  </sweet-modal>
</template>
<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue';
export default {
  components: {
    SweetModal,
    SweetModalTab
  },
  methods: {
    startUpload(type) {
      cloudinary.openUploadWidget(
        { cloud_name: 'christekh', upload_preset: 'idcidr0h' },
        (error, result) => {
          console.log(error, result[0]);
          type === 'banner'
            ? (this.banner = result[0].public_id)
            : (this.trailer = result[0].public_id);
        }
      );
    },
    handleUpload() {
      const data = {
        title: this.title,
        banner: this.banner,
        trailer: this.trailer
      };
      if (data.title && this.banner && this.trailer)
        this.$emit('handle-upload', data);
    }
  }
};
</script>
