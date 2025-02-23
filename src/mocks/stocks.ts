export interface Stock {
  id: number;
  stockName: string;
  stockQuantity: number;
  stockPriceBuy: number;
  stockPriceCurrent: number;
  stockValuation: number;
  logourl?: string;
}

export const mockStocks: Stock[] = [
  {
    id: 1,
    stockName: 'PETR4',
    stockQuantity: 1,
    stockPriceBuy: 100,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
  },
  {
    id: 2,
    stockName: 'CMIG4',
    stockQuantity: 3,
    stockPriceBuy: 150,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
  },
  {
    id: 3,
    stockName: 'ITSA4',
    stockQuantity: 7,
    stockPriceBuy: 1200,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
  },
  {
    id: 4,
    stockName: 'BBAS3',
    stockQuantity: 2,
    stockPriceBuy: 25,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
  },
  {
    id: 5,
    stockName: 'TAEE11',
    stockQuantity: 1,
    stockPriceBuy: 50,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
  },
  {
    id: 6,
    stockName: 'SPYI11',
    stockQuantity: 1,
    stockPriceBuy: 50,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
  },
];
