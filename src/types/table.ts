export type Category =
  | 'Stocks'
  | 'Crypto'
  | 'ETFs'
  | 'Real State'
  | 'Fixed Income';

export interface TreeNode {
  key: string;
  data: {
    stockName: string;
    type: Category;
    amount: number;
    currentValue: number;
    purchasePrice: number;
    date: string;
  };
}
