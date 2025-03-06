<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <div>
    <p>O preço da moldura fica: R$ {{ printStore.framePrice }}</p>
  </div>
</template>

<style scoped>

</style>
