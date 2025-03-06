<script setup>
import Calculate from '@/components/Calculate.vue';
import Introduction from '@/components/Introduction.vue';
import Prices from '@/components/Prices.vue';
import { usePrintStore } from '@/stores/print';
import { onMounted } from 'vue';


const printStore = usePrintStore();

onMounted(()=>{
  printStore.loadPapers()
})

</script>

<template>
  <Calculate />
  <Introduction v-if="printStore.notCalculatedPrices" />
  <Prices v-else />
</template>

<style scoped>

</style>
