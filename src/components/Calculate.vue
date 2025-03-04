<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <div>
    <v-card
      prepend-icon="mdi mdi-playlist-edit"
      title="Simulador de preço"
    >
      <v-text-field
        v-model="printStore.printLongerSide"
        label="Digite o maior lado em centímetros"
      />
      <v-text-field
        v-model="printStore.printShortSide"
        label="Digite o menor lado em centímetros"
      />
      <template #actions>
        <v-spacer />
        <v-btn
          color="primary-darken-1"
          variant="elevated"
          @click="printStore.calculatePrices()"
        >
          Simular preço
        </v-btn>
      </template>
    </v-card>
  </div>
</template>



<style scoped>

</style>
