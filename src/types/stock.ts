export interface Stock {
  stockName: string;
  stockPriceCurrent: number;
  stockQuantity: number;
  stockValuation: number;
  img?: string;
}

export type TagInvestment =
  | 'ETF'
  | 'STOCKS'
  | 'CRYPTO'
  | 'FIXED_INCOME'
  | 'REAL_ESTATE';

export const tagInvestmentLabels: Record<TagInvestment, string> = {
  ETF: 'ETF',
  STOCKS: 'Stocks',
  CRYPTO: 'Crypto',
  FIXED_INCOME: 'Fixed Income',
  REAL_ESTATE: 'Real Estate',
};

export interface Investment {
  id: string;
  name: string;
  tag: TagInvestment;
  value: number;
  priceBuy: number;
  priceCurrent: number;
  porcentageLast24Hours: number;
}

// Ajuste a estrutura para ser compatível com o MultiSelect
export const tagInvestmentOptions = Object.keys(tagInvestmentLabels).map(
  (key) => ({
    name: tagInvestmentLabels[key as TagInvestment], // Nome exibido no dropdown
    value: key, // Valor associado à opção
  })
);
