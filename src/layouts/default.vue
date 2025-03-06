<script setup>
import View from './View.vue';
import Alert from '@/components/Alert.vue';
import AppFooter from '@/components/AppFooter.vue';
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <v-app>
    <Alert v-if="printStore.showAlert" />
    <View />
    <AppFooter />
  </v-app>
</template>


