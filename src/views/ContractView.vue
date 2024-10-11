<template>
  <div class="contract">
    <h1>Contract overview</h1>
  </div>
  <div class="container" id="contract-overview">
    <div class="row gx-3 gy-3">
      <div v-if="isError">Something went wrong, please reload page.</div>
      <div v-else-if="isLoading">loading data...</div>
      <div v-else>
        {{ post.data.contracts }}
        <ContractPreview
          class="foo"
          v-for="contract in post.data.contracts"
          :key="contract.id"
          :faction_id="contract.faction_id"
          :faction_name="contract.faction_name"
          :status="contract.status"
          :cssS="foo"
        />
      </div>
      <div class="col-4 contract-preview">
        <div class="p-3 border">1 of two columns</div>
      </div>
      <div class="col-4 contract-preview">C</div>
      <div class="col-4 contract-preview">
        <div class="p-3 border">3 of two columns</div>
      </div>
    </div>
  </div>
  <!-- <div class="container" id="contract-detail">
    <ContractDetail :cssS="'col'" />
  </div> -->
</template>

<script setup>
import ContractPreview from "../components/ContractPreview.vue";
</script>

<script>
// import { ref } from "vue";
import wtftoolsapi from "@/services/wtftoolsapi";
// import ContractDetail from "../components/ContractDetail.vue";
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
      this.post = await wtftoolsapi.getContracts();
      console.log(this.post);
    } catch (error) {
      console.log(error);
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
