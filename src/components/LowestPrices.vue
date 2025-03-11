<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <div>
    <table>
      <caption>Tabela de preços no tamanho {{ printStore.printShortSide }} cm x {{ printStore.printLongerSide }} cm </caption>
      <thead>
        <tr>
          <th>Nome</th><th>Tipo de Material</th><th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="paper in printStore.papers"
          :key="paper"
        >
          <td
            class="td-body td-link"
            @click="printStore.selectPaper(paper.id)"
          >
            {{ paper.name }}
          </td>
          <td
            class="td-body"
          >
            {{ paper.type }}
          </td>
          <td
            class="td-body"
          >
            {{ paper.printingLowestPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td
            v-show="printStore.frame"
            colspan="3"
            class="td-foot"
          >
            *Preço da moldura: {{ printStore.totalFramePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
          </td>
        </tr>
      </tfoot>
    </table>
    <div
      class="bottom-table-space"
    />
  </div>
</template>

<style scoped>
  table{
    width: 80%;
    margin: auto;
    margin-top: 20px;
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
  .td-link{
    cursor: pointer;
  }
  .td-foot{
    border: 1px solid white;
    padding: 4px 4px 4px 8px ;
    margin-left: 2px;
    font-size: 0.9rem;
  }
  .bottom-table-space{
    height: 80px;
    background-color: rgb(19, 19, 19);
  }

</style>
