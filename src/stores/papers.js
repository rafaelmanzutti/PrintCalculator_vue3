// Utilities
import { defineStore } from 'pinia'

export const usePaperStore = defineStore('paper', {
  state: () => ({
    papers:[
      {
        id: 1,
        name:"",
        type: "",
        margin: "",
        coilWidth: [61, 91, 110, 152],
        printingPriceMeter: [10, 20, 30, 40],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 2,
        name:"",
        type: "",
        margin: "",
        coilWidth: [61, 91, 110],
        printingPriceMeter: [10, 20, 30],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 3,
        name:"",
        type: "",
        margin: "",
        coilWidth: [61, 152],
        printingPriceMeter: [10, 40],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 4,
        name:"",
        type: "",
        margin: "",
        coilWidth: [61, 91],
        printingPriceMeter: [10, 20],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 5,
        name:"",
        type: "",
        margin: "",
        coilWidth: [61],
        printingPriceMeter: [10],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 6,
        name:"",
        type: "",
        margin: "",
        coilWidth: [91, 152],
        printingPriceMeter: [20, 40],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 7,
        name:"",
        type: "",
        margin: "",
        coilWidth: [152],
        printingPriceMeter: [40],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 8,
        name:"",
        type: "",
        margin: "",
        coilWidth: [61, 91, 110, 152],
        printingPriceMeter: [10, 20, 30, 40],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },
      {
        id: 9,
        name:"",
        type: "",
        margin: "",
        coilWidth: [110, 152],
        printingPriceMeter: [30, 40],
        printingPrices: [],
        printingLowestPrice: "",
        coilWidthSelected: ""
      },


    ],
  }),
})
