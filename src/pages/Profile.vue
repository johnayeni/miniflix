<template>
  <div class="bg-white" style="padding-top: 100px; height: 100%">
    <div class="container">
      <h1 class="title is-size-3 has-text-weight-bold">Profile</h1>
      <hr class="hr-dark">
      <p v-show="user.first_name && user.last_name" class="has-text-weight-bold">{{ `${user.first_name} ${user.lastname}`  }}</p>
      <p v-show="user.first_name && user.last_name" class="has-text-weight-bold">Not set</p>
      <br>
      <p class="has-text-weight-bold">{{ user.email || 'Not Set' }}</p>
      <br>
      <p class="has-text-weight-bold">{{ user.phone_no || 'Not Set' }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { getAccessToken } from '../../utils/auth';
export default {

  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        phone_no: ""
      },
      url: process.env.VUE_APP_WEB_TASK_URL
    }
  },
  created() {
    axios.get(`${this.url}/me`,
    { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then( res => {
      this.user = res.data;
    })
  }
};
</script>