<template>
  <div class="row">
    <div class="col-12 contract-detail">
      {{ "X" }}

      {{ result }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      result: [],
    };
  },
  async mounted() {
    const url = "https://api.wtftools.port203.de/revive";
    const { data } = await axios.get(url).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
    this.result = data;
    // this.result = [...data].slice(0, 10)
  },
};
</script>
<!-- <script setup>
//const props = defineProps(["title"]);
const props = defineProps({
  title: String,
  css: String,
  id: String,
}); -->
