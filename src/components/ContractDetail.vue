<template>
  <div class="row">
    <div class="col-12 contract-detail">
      <div v-if="isError">Something went wrong, please reload page.</div>
      <div v-else-if="isLoading">loading data...</div>
      <div v-else>{{ post.data }}</div>
    </div>
  </div>
</template>

<script>
import wtftoolsapi from "@/services/wtftoolsapi";
export default {
  props: {
    id: String,
  },
  data: () => ({
    post: null,
    isError: false,
    isLoading: true,
  }),
  async created() {
    try {
      this.isLoading = true;
      this.post = await wtftoolsapi.getContractDetails(this.id);
    } catch (error) {
      console.log(error);
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
