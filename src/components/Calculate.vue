<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();
const addSizes = () => {
  console.log(printStore.printShortSide)
}

</script>

<template>
  <div>
    <v-card
      prepend-icon="mdi mdi-playlist-edit"
      title="Simulador de preço"
    >
      <v-text-field
        v-model="printStore.printLongerSide"
        label="Digite o Maior lado"
      />
      <v-text-field
        v-model="printStore.printShortSide"
        label="Digite o Menor lado"
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
    <button @click="addSizes()">
      calcular
    </button>
  </div>
</template>



<style scoped>

</style>
