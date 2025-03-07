<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <div class="price-selected">
    <div class="title">
      <h3>Papel Selecionado</h3>
    </div>
    <ul>
      <li>Nome: {{ printStore.paperSelected.name }} </li>
      <li>Tipo: {{ printStore.paperSelected.type }} </li>
      <li>Preço da impressão: R$ {{ printStore.paperSelected.printingLowestPrice }} </li>
      <li>Largura da bobina usada: {{ printStore.paperSelected.coilWidthSelected }} cm </li>
      <li
        v-show="printStore.frame"
      >
        Preço da moldura: R$ {{ printStore.totalFramePrice }}
      </li>
    </ul>
    <v-btn
      size="small"
      color="orange-accent-3"
      variant="elevated"
      class="mt-6"
      @click="printStore.uncheckPaper()"
    >
      Desmarcar Papel
    </v-btn>
  </div>
</template>

<style scoped>
.price-selected{
  width: 80%;
  margin: auto;
  margin-top: 20px;
}
.title{
  margin-bottom: 20px;
}
.title, h1{
  text-align: center;
}
li{
  list-style-type: none;
  border: 1px solid white;
  padding: 4px 4px 4px 8px ;
  margin-left: 2px;
}
</style>
