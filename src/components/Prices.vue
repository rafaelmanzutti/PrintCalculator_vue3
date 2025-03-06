<script setup>
import FramePrice from '@/components/FramePrice.vue';
import LowestPrices from '@/components/LowestPrices.vue';
import LowestPriceSelected from '@/components/LowestPriceSelected.vue';
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <FramePrice v-if="printStore.frame" />
  <LowestPrices />
  <LowestPriceSelected />
</template>

<style scoped>

</style>
