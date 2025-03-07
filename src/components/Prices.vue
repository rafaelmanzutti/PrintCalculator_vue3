<script setup>
import LowestPrices from '@/components/LowestPrices.vue';
import LowestPriceSelected from '@/components/LowestPriceSelected.vue';
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <LowestPrices v-if="printStore.notPaperSelected" />
  <LowestPriceSelected v-else />
</template>

<style scoped>

</style>
