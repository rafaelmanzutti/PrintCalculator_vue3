// Utilities
import { defineStore } from 'pinia';
import { usePaperStore } from './papers';

const paperStore = usePaperStore();

export const usePrintStore = defineStore('print', {
  state: () => ({
    papers: [],
    printLongerSide : "",
    printShortSide : "",

    printLength: "",

    frameType: "",
    LinearFramePrice: "",
    totalFramePrice: "",

    papersSelected: [],


  }),
  actions: {
    loadPapers(){
      this.papers = paperStore.papers;
    },
    calculatePrices(){
      for (let i= 0; i<=this.papers.length; i++){
        for (let j= 0; j<=this.papers[i].coilWidth.length; j++){
          console.log(this.papers[i].coilWidth[j])
        }
      }


    },
  }
})


