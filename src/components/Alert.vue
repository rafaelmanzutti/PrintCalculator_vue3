<script setup>
//import 'animate.css';
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();
// class="animate__animated animate__pulse"
</script>

<template>
  <div class="alert-notification">
    <v-alert

      :text="printStore.text"
      :type="printStore.type"
      closable
    />
  </div>
</template>

<style scoped>
.alert-notification {
  position: fixed;
  z-index: 1;
  bottom: 50px;
  width: 300px;
  left: calc(50% - 150px);

}
</style>
