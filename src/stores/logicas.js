// Utilities
import { defineStore } from 'pinia';
import { usePaperStore } from './papers';

const paperStore = usePaperStore();

export const useLogicasStore = defineStore('logicas', {
  state: () => ({
    papers: [],
    printLongerSide : "",
    printShortSide : "",
    printLength: "",
    coilWidthSelected: "",

    totalPrintPrice: "",

    frameType: "",
    LinearFramePrice: "",
    totalFramePrice: "",

    papersSelected: [],


  }),
  actions: {
    loadPapers(){
      this.papers = paperStore.papers;
    }
  }
})


