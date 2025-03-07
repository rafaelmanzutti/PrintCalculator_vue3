<script setup>
import { usePrintStore } from '@/stores/print';

const printStore = usePrintStore();

</script>

<template>
  <div>
    <table>
      <caption>Tabela de preços na medida selecionada</caption>
      <thead>
        <tr>
          <th>Papel</th><th>Tipo</th><th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="paper in printStore.papers"
          :key="paper"
        >
          <td
            class="td-body"
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
            {{ paper.printingLowestPrice }}
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
            *Preço da moldura: R$ {{ printStore.totalFramePrice }}
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
  .bottom-table-space{
    height: 80px;
    background-color: rgb(19, 19, 19);
  }

</style>
