export interface Stock {
  id: number;
  stockName: string;
  stockQuantity: number;
  stockPriceBuy: number;
  stockPriceCurrent: number;
  stockValuation: number;
  logourl?: string;
  type?: string;
  purchasePrice?: number;
  date?: string;
}

export const mockStocks: Stock[] = [
  {
    id: 1,
    stockName: 'PETR4',
    stockQuantity: 1,
    stockPriceBuy: 36.12,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
    type: 'Stocks',
    purchasePrice: 100,
    date: '15/03/2023',
  },
  {
    id: 2,
    stockName: 'CMIG4',
    stockQuantity: 11,
    stockPriceBuy: 11.03,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
    type: 'Stocks',
    purchasePrice: 150,
    date: '10/04/2023',
  },
  {
    id: 3,
    stockName: 'ITSA4',
    stockQuantity: 15,
    stockPriceBuy: 9.48,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
    type: 'Stocks',
    purchasePrice: 200,
    date: '05/05/2023',
  },
  {
    id: 4,
    stockName: 'BBAS3',
    stockQuantity: 3,
    stockPriceBuy: 27.38,
    stockPriceCurrent: 0,
    stockValuation: 0,
    date: '05/05/2023',
  },
  {
    id: 5,
    stockName: 'TAEE11',
    stockQuantity: 1,
    stockPriceBuy: 32.82,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
    type: 'Stocks',
    purchasePrice: 100,
    date: '15/03/2023',
  },
  {
    id: 6,
    stockName: 'SPYI11',
    stockQuantity: 1,
    stockPriceBuy: 120.89,
    stockPriceCurrent: 0,
    stockValuation: 0,
    logourl: '',
    type: 'ETF',
    purchasePrice: 100,
    date: '15/03/2023',
  },
];

export function calculateTotalInvestment(stocks: Stock[]): number {
  return stocks.reduce((total, stock) => {
    return total + stock.stockQuantity * stock.stockPriceCurrent;
  }, 0);
}
