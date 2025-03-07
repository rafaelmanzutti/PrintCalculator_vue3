<script setup>
import { usePrintStore } from '@/stores/print';
import { computed } from 'vue';

const printStore = usePrintStore();

const papers = computed(()=>{
  const printPapers = printStore.papers
  console.log(printPapers)
  return printPapers
})

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
          v-for="paper in papers"
          :key="paper"
        >
          <td
            class="td-body"
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
  tfoot{
    margin-bottom: 20px;
  }
  .td-foot{
    border: 1px solid white;
    padding: 4px 4px 4px 8px ;
    margin-left: 2px;
    font-size: 0.9rem;
  }

</style>
