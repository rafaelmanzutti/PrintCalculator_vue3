import { defineStore } from 'pinia';
import { usePaperStore } from './papers';

const paperStore = usePaperStore();


export const usePrintStore = defineStore('print', {
  state: () => ({
    papers: [],
    printLongerSide : "",
    printShortSide : "",

    LinearFramePrice: "",
    totalFramePrice: "",

    papersSelected: [],


  }),
  actions: {
    loadPapers(){
      this.papers = paperStore.papers;
    },
    calculatePrices(){
      for (let i= 0; i < this.papers.length; i++){
        // verificar qual lado do impresso usar na largura da bobina e calcular todos os preços de todos papéis e bobinas
        for (let j= 0; j < this.papers[i].coilWidth.length; j++){
          if(this.printLongerSide != undefined && this.printLongerSide != 0 && this.printLongerSide != null && this.printLongerSide + this.papers[i].margin <= this.papers[i].coilWidth[j]) {
            this.papers[i].printLength[j] = this.printShortSide;
            this.papers[i].printingPrices[j] = ((this.papers[i].printLength[j] * this.papers[i].coilWidth[j])/100) * this.papers[i].printingPriceMeter[j];
            console.log(this.papers[i].printingPrices[j])
            console.log(this.papers[i].printLength[j])
          }
          else if (this.printShortSide != undefined && this.printLongerSide != 0 && this.printLongerSide != null && this.printLongerSide + this.papers[i].margin > this.papers[i].coilWidth[j] && this.printShortSide+ this.papers[i].margin <= this.papers[i].coilWidth[j]){
            this.papers[i].printLength[j] = this.printLongerSide;
            this.papers[i].printingPrices[j] = ((this.papers[i].printLength[j] * this.papers[i].coilWidth[j])/100) * this.papers[i].printingPriceMeter[j];
            console.log(this.papers[i].printingPrices[j])
            console.log(this.papers[i].printLength[j])
          }
          else {
            //Se nem o lado menor do impresso couber na largura da bobina
            this.papers[i].printingPrices[j] = 1000000000
            console.log("O menor lado é superior a largura desta bobina")
          }
        }
        // calcular menor preço de cada papel
        let lowestPrice = Math.min(...this.papers[i].printingPrices)
        if (lowestPrice == 1000000000){
          this.papers[i].printingLowestPrice = "-"
        }
        else {
          this.papers[i].printingLowestPrice = lowestPrice
        }
        console.log("o menor preço é: " + this.papers[i].printingLowestPrice)
        // pegar tamanho de bobina responsável pelo menor preço
        for(let k= 0; k < this.papers[i].printingPrices.length; k++){
          if(this.papers[i].printingLowestPrice != "-" && this.papers[i].printingLowestPrice == this.papers[i].printingPrices[k]){
          this.papers[i].coilWidthSelected = this.papers[i].coilWidth[k]
          }
          else{
            this.papers[i].coilWidthSelected = "-"
          }
        }
        console.log("a bobina usada é: " + this.papers[i].coilWidthSelected)
      }


    },
  }
})


