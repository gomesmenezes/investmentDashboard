export interface Stock {
  stockName: string;
  stockPriceCurrent: number;
  stockQuantity: number;
  stockValuation: number;
  img?: string;
}

export type tagInvestment =
  | 'ETF'
  | 'STOCKS'
  | 'CRYPTO'
  | 'FIXED INCOME'
  | 'REAL STATE';

export interface Investment {
  id: string;
  name: string;
  tag: tagInvestment;
  value: number;
  priceBuy: number;
  priceCurrent: number;
  porcentageLast24Hours: number;
}
