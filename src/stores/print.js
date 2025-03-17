import { defineStore } from 'pinia';
import { usePaperStore } from './papers';

const paperStore = usePaperStore();

export const usePrintStore = defineStore('print', {
  state: () => ({
    papers: [],
    printLongerSide : "",
    printShortSide : "",

    linearMeterFramePrice: 95,
    totalFramePrice: "",
    frame: false,

    papersSelected: [],
    paperSelected: {},
    notCalculatedPrices: true,
    notPaperSelected: true,

    showAlert : false,
    type:"",
    text:""

  }),
  actions: {
    loadPapers(){
      this.papers = paperStore.papers;
    },
    notifyAlert(){
      this.showAlert = true
      setTimeout(()=>{
        this.showAlert = false
      }, 4000)
    },
    notifyAlertSides(){
      this.type="warning";
      this.text="Coloque os tamanhos da impressão nos locais correspondentes"
      this.notifyAlert();
    },
    checkSides(){
      if(parseInt(this.printLongerSide) >= parseInt(this.printShortSide)){
        this.calculatePrices();
        this.calculateFramePrice();
      } else {
        this.notifyAlertSides();
      }
    },
    calculateFramePrice(){
      const frameMeter = ((parseFloat(this.printLongerSide)/100) + (parseFloat(this.printShortSide)/100)) * 2
      const framePrice = parseFloat(frameMeter) * parseFloat(this.linearMeterFramePrice)
      this.totalFramePrice = framePrice
    },
    resetSizes(){
      this.printLongerSide = ""
      this.printShortSide = ""
      this.notCalculatedPrices = true
    },
    calculatePrices(){
      this.notCalculatedPrices = false;
      for (let i= 0; i < this.papers.length; i++){
        // verificar qual lado do impresso usar na largura da bobina e calcular todos os preços de todos papéis e bobinas
        for (let j= 0; j < this.papers[i].coilWidth.length; j++){
          let LongerSideMargin = parseFloat(this.printLongerSide) + parseFloat(this.papers[i].margin)
          let ShortSideMargin = parseFloat(this.printShortSide) + parseFloat(this.papers[i].margin)
          // Se o lado maior couber na largura da bobina
          if(LongerSideMargin <= parseFloat(this.papers[i].coilWidth[j])) {
            this.papers[i].printLength[j] = parseFloat(ShortSideMargin);
            this.papers[i].printingPrices[j] = ((parseFloat(this.papers[i].printLength[j])/100) * (parseFloat(this.papers[i].coilWidth[j])/100)) * parseFloat(this.papers[i].printingPriceMeter[j]);
          }
          // Se não couber o lado maior mas couber o lado menor na largura da bobina
          else if (LongerSideMargin > this.papers[i].coilWidth[j] && ShortSideMargin <= this.papers[i].coilWidth[j]){
            this.papers[i].printLength[j] = parseFloat(LongerSideMargin);
            this.papers[i].printingPrices[j] = ((parseFloat(this.papers[i].printLength[j])/100) * (parseFloat(this.papers[i].coilWidth[j])/100)) * parseFloat(this.papers[i].printingPriceMeter[j]);
          }
          else {
            //Se nem o lado menor do impresso couber na largura da bobina preciso passar um "valor muito alto" para o printingPrices. Evitar falha na lógica Math.min de lowestPrice e evitar ser escolhido nela
            this.papers[i].printingPrices[j] = 1000000000;
            this.papers[i].printLength[j] = 0;
          }
        }
        // calcular menor preço de cada papel
        let lowestPrice = Math.min(...this.papers[i].printingPrices)
        if (lowestPrice == 1000000000){
          this.papers[i].printingLowestPrice = "-"
          this.papers[i].printLengthSelected = 0;
        }
        else {
          this.papers[i].printingLowestPrice = lowestPrice
        }
        // pegar tamanho de bobina(coilWidthSelected) responsável pelo menor preço; e comprimento da impresão(printLengthSelected)
        for(let k= 0; k < this.papers[i].printingPrices.length; k++){
          if(this.papers[i].printingLowestPrice != "-" && this.papers[i].printingLowestPrice == this.papers[i].printingPrices[k]){
          this.papers[i].coilWidthSelected = this.papers[i].coilWidth[k]
          this.papers[i].printLengthSelected = this.papers[i].printLength[k]
          }
        }
      }
    },
    selectPaper(id){
      const indice = parseInt(id) - 1
      this.paperSelected = this.papers[indice]
      this.notPaperSelected = false
    },
    uncheckPaper(){
      this.paperSelected = ""
      this.notPaperSelected = true
    }
  }
})


