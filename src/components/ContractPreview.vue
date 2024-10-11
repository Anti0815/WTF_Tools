<template>
  <!-- <div class="col-4 contract-preview">
    <div class="p-3 border">{{ props.title }}</div>
  </div> -->

  <div class="col-4 contract-preview">
    <div class="p-3 border">
      <div class="card text-bg-primary mb-3" style="max-width: 18rem">
        <div class="card-header">
          {{ props.faction_name }} [{{ props.faction_id }}]
        </div>
        <div class="card-body">
          <p class="card-text">Status : {{ props.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//const props = defineProps(["title"]);
const props = defineProps({
  title: String,
  css: String,
  id: String,
  faction_id: String,
  faction_name: String,
  status: String,
});
// console.log(props.title);
</script>
