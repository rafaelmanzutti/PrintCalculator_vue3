<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <button
    @click="printStore.calculatePrices()"
  >
    calcular
  </button>
</template>

<style scoped>

</style>
