// Utilities
import { defineStore } from 'pinia'

export const usePaperStore = defineStore('paper', {
  state: () => ({
    papers:[
      {
        id: 1,
        name:"A",
        type: "Fotográfico",
        margin: 5,
        coilWidth: [61, 91, 110, 152],
        printingPriceMeter: [10, 20, 30, 40],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 2,
        name:"B",
        type: "Fotográfico",
        margin: 5,
        coilWidth: [61, 91, 110],
        printingPriceMeter: [10, 20, 30],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 3,
        name:"C",
        type: "Fotográfico",
        margin: 5,
        coilWidth: [61, 152],
        printingPriceMeter: [10, 40],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 4,
        name:"D",
        type: "Canvas",
        margin: 5,
        coilWidth: [61, 91],
        printingPriceMeter: [10, 20],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 5,
        name:"E",
        type: "Canvas",
        margin: 5,
        coilWidth: [61],
        printingPriceMeter: [10],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 6,
        name:"F",
        type: "Canvas",
        margin: 5,
        coilWidth: [91, 152],
        printingPriceMeter: [20, 40],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 7,
        name:"G",
        type: "Algodão",
        margin: 5,
        coilWidth: [152],
        printingPriceMeter: [40],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 8,
        name:"H",
        type: "Algodão",
        margin: 5,
        coilWidth: [61, 91, 110, 152],
        printingPriceMeter: [10, 20, 30, 40],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 9,
        name:"I",
        type: "Algodão",
        margin: 5,
        coilWidth: [110, 152],
        printingPriceMeter: [30, 40],
        printLength: [],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },


    ],
  }),
})
