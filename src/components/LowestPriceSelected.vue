<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <div class="price-selected">
    <div class="title">
      <h4 class="select-title mb-5">Material Selecionado no tamanho {{ printStore.printShortSide }} cm x {{ printStore.printLongerSide }} cm </h4>
    </div>
    <ul>
      <li>Nome: {{ printStore.paperSelected.name }} </li>
      <li>Tipo de material: {{ printStore.paperSelected.type }} </li>
      <li>Preço da impressão: {{ printStore.paperSelected.printingLowestPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </li>
      <li>Largura da bobina usada: {{ printStore.paperSelected.coilWidthSelected }} cm </li>
      <li
        v-show="printStore.frame"
      >
        Preço da moldura: {{ printStore.totalFramePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
      </li>
    </ul>
    <v-btn
      size="small"
      color="grey-darken-1"
      variant="elevated"
      class="mt-6"
      @click="printStore.uncheckPaper()"
    >
      Desmarcar Seleção
    </v-btn>
  </div>
</template>

<style scoped>
.price-selected{
  width: 80%;
  margin: auto;
  margin-top: 20px;
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
.select-title{
  font-weight: 400;
}
</style>
