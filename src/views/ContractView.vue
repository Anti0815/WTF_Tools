<script setup>
import { ref } from "vue";

import ContractPreview from "../components/ContractPreview.vue";

const contracts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
]);
</script>

<template>
  <div class="contract">
    <h1>Contract overview</h1>
  </div>
  <div class="container" id="contract-overview">
    <div class="row gx-3 gy-3">
      <div class="col-4 contract-preview">
        <div class="p-3 border">1 of two columns</div>
      </div>
      <div class="col-4 contract-preview">
        C
      </div>
      <div class="col-4 contract-preview">
        <div class="p-3 border">3 of two columns</div>
      </div>

      <ContractPreview
        v-for="contract in contracts"
        :key="contract.id"
        :title="contract.title"
        :cssS="'col-4'"
      />
    </div>
  </div>
</template>
