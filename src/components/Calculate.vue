<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <div>
    <v-card
      prepend-icon="mdi mdi-calculator"
      title="Simular preço de impressão"
    >
      <v-text-field
        v-model="printStore.printLongerSide"
        label="MAIOR lado (cm)"
      />
      <v-text-field
        v-model="printStore.printShortSide"
        label="MENOR lado (cm)"
      />
      <template #actions>
        <v-container
          fluid
          class="mt-0 mb-0 pt-0 pb-0"
        >
          <v-switch
            v-model="printStore.frame"
            label="Colocar moldura"
            color="orange darken-3"
            value="orange darken-3"
            hide-details
            class="mt-0 mb-0 pt-0 pb-0"
          />
        </v-container>

        <v-spacer />
        <v-btn
          color="orange-accent-3"
          variant="elevated"
        >
          Zerar medidas
        </v-btn>
        <v-btn
          color="primary-darken-1"
          variant="elevated"
          @click="printStore.calculatePrices()"
        >
          Calcular preço
        </v-btn>
      </template>
    </v-card>
  </div>
</template>



<style scoped>

</style>
