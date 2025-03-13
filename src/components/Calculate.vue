<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

  // prepend-icon="mdi mdi-calculator"
  // title="Simular preço de impressão"
</script>

<template>
  <div>
    <v-card>
      <v-text-field
        v-model="printStore.printLongerSide"
        label="MAIOR lado (cm)"
        class="pt-2"
      />
      <v-text-field
        v-model="printStore.printShortSide"
        label="MENOR lado (cm)"
      />
      <template #actions>
        <v-spacer />
        <div>
          <v-btn
            size="small"
            color="grey-darken-1"
            variant="elevated"
            @click="printStore.resetSizes()"
          >
            Zerar medidas
          </v-btn>
          <v-btn
            v-show="printStore.printLongerSide > 0 && printStore.printShortSide > 0"
            color="grey-darken-1"
            variant="elevated"
            class="ml-2"
            @click="printStore.checkSides()"
          >
            Calcular preço
          </v-btn>
        </div>
      </template>
      <v-container
        fluid
        class="mt-0 mb-0 pt-0 pb-0"
      >
        <v-switch
          v-model="printStore.frame"
          class="color-gray"
          label="Colocar moldura"
          color="grey-lighten-5"
          hide-details="mt-0 mb-0 pt-0 pb-0"
        />
      </v-container>
    </v-card>
  </div>
</template>

<style scoped>
  .color-gray{
    color: rgb(211, 211, 211);
  }
  .v-input--density-default {
    --v-input-control-height: 0px;
  }

</style>
