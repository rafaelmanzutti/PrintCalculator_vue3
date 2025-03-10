// Utilities
import { defineStore } from 'pinia'

export const usePaperStore = defineStore('paper', {
  state: () => ({
    papers:[
      {
        id: 1,
        name:"Canvas Canson",
        type: "Canvas",
        margin: 15,
        coilWidth: [61, 111, 152],
        printingPriceMeter: [550, 550, 550],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 2,
        name:"Canvas Nipon",
        type: "Canvas",
        margin: 15,
        coilWidth: [91, 110, 127],
        printingPriceMeter: [430, 430, 430],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 3,
        name:"Tela Poliester",
        type: "Canvas",
        margin: 15,
        coilWidth: [127],
        printingPriceMeter: [330],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 4,
        name:"Hahnemuhle Rag Baryta",
        type: "Algodão",
        margin: 5,
        coilWidth: [110],
        printingPriceMeter: [700],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 5,
        name:"Edition Etching 310",
        type: "Algodão",
        margin: 5,
        coilWidth: [91],
        printingPriceMeter: [700],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 6,
        name:"Rag photographique 310",
        type: "Algodão",
        margin: 5,
        coilWidth: [61, 91],
        printingPriceMeter: [700],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 7,
        name:"Canson Matte",
        type: "Papel Fotográfico",
        margin: 5,
        coilWidth: [91, 152],
        printingPriceMeter: [350],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 8,
        name:"Canson Satin Performance",
        type: "Papel Fotográfico",
        margin: 5,
        coilWidth: [111],
        printingPriceMeter: [380],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 9,
        name:"Satin Pérola",
        type: "Papel Fotográfico",
        margin: 5,
        coilWidth: [111],
        printingPriceMeter: [360],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },


    ],
  }),
})
