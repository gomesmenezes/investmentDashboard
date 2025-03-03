export type Category =
  | 'Stocks'
  | 'Crypto'
  | 'ETFs'
  | 'Real State'
  | 'Fixed Income';

export interface TreeNode {
  key: string;
  data: {
    logoUrlStock: string;
    stockName: string;
    type: string;
    amount: number;
    currentValue: number;
    purchasePrice: number;
    date: string;
  };
}
