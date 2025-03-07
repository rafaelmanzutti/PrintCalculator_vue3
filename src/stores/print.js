import { defineStore } from 'pinia';
import { usePaperStore } from './papers';

const paperStore = usePaperStore();

export const usePrintStore = defineStore('print', {
  state: () => ({
    papers: [],
    printLongerSide : "",
    printShortSide : "",

    linearFramePrice: 10,
    totalFramePrice: "",
    frame: false,

    papersSelected: [],
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
      const frameMeter = (parseInt(this.printLongerSide) + parseInt(this.printShortSide)) * 2
      const framePrice = parseInt(frameMeter) * parseInt(this.linearFramePrice)
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
          let LongerSideMargin = parseInt(this.printLongerSide) + parseInt(this.papers[i].margin)
          let ShortSideMargin = parseInt(this.printShortSide) + parseInt(this.papers[i].margin)
          // Se o lado maior couber na largura da bobina
          if(LongerSideMargin <= parseInt(this.papers[i].coilWidth[j])) {
            this.papers[i].printLength[j] = parseInt(this.printShortSide);
            this.papers[i].printingPrices[j] = ((this.papers[i].printLength[j] * this.papers[i].coilWidth[j])/100) * this.papers[i].printingPriceMeter[j];
            // console.log("largura bobina" + this.papers[i].coilWidth[j])
            // console.log("lado maior" + this.printLongerSide)
            // console.log("lado menor" + this.printShortSide)
            // console.log("preço" + this.papers[i].printingPrices[j])
            // console.log("comprimento da impressão" + this.papers[i].printLength[j])
          }
          // Se não couber o lado maior mas couber o lado menor na largura da bobina
          else if (LongerSideMargin > this.papers[i].coilWidth[j] && ShortSideMargin <= this.papers[i].coilWidth[j]){
            this.papers[i].printLength[j] = parseInt(this.printLongerSide);
            this.papers[i].printingPrices[j] = ((this.papers[i].printLength[j] * this.papers[i].coilWidth[j])/100) * this.papers[i].printingPriceMeter[j];
            // console.log("largura bobina" + this.papers[i].coilWidth[j])
            // console.log("lado maior" + this.printLongerSide)
            // console.log("lado menor" + this.printShortSide)
            // console.log("preço" + this.papers[i].printingPrices[j])
            // console.log("comprimento da impressão" + this.papers[i].printLength[j])
          }
          else {
            //Se nem o lado menor do impresso couber na largura da bobina preciso passar um "valor muito alto" para o printingPrices. Evitar falha na lógica Math.min de lowestPrice e evitar ser escolhido nela
            this.papers[i].printingPrices[j] = 1000000000
            // console.log("O menor lado é superior a largura desta bobina")
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
        // console.log("o menor preço é: " + this.papers[i].printingLowestPrice)
        // pegar tamanho de bobina responsável pelo menor preço
        for(let k= 0; k < this.papers[i].printingPrices.length; k++){
          if(this.papers[i].printingLowestPrice != "-" && this.papers[i].printingLowestPrice == this.papers[i].printingPrices[k]){
          this.papers[i].coilWidthSelected = this.papers[i].coilWidth[k]
          }
        }
        // console.log("a bobina usada é: " + this.papers[i].coilWidthSelected)
      }
    },

  }
})


