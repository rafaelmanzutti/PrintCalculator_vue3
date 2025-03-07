<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();
</script>

<template>
  <div>
    <h1>Lowest Prices</h1>
    <!-- <div class="table">
      <div class="header-table">
        <div>Nome Papel</div>
        <div>Tipo</div>
        <div>Preço</div>
      </div>
      <div
        v-for="(paper, i) in printStore.papers"
        :key="i"
        class="row-table"
      >
        <div>{{ paper[i].name }}</div>
        <div>{{ paper[i].type }}</div>
        <div>{{ paper[i].printingLowestPrice }}</div>
      </div>
    </div> -->
    <table>
      <caption>Tabela de preços na medida selecionada</caption>
      <thead>
        <tr>
          <th>Papel</th><th>Tipo</th><th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="td-body">Canson</td><td class="td-body">Fotográfico</td><td class="td-body">R$ 1000</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td v-if="printStore.frame" colspan="3" class="td-foot">
            *Preço da moldura: R$ 90
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
  table{
    width: 80%;
    margin: auto;
  }
  th{
    border: 1px solid white;
    padding: 2px;
  }
  .td-body{
    border: 1px solid white;
    padding: 4px 4px 4px 8px ;
    margin-left: 2px;
  }
  .td-foot{
    border: 1px solid white;
    padding: 4px 4px 4px 8px ;
    margin-left: 2px;
    font-size: 0.9rem;
  }
</style>
