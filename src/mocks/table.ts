import TreeNode from '@/types/table';

export const nodes = ref<TreeNode[]>([
  {
    key: '1',
    data: {
      stockName: 'BBAS3',
      type: 'Stocks',
      amount: 150,
      currentValue: 34.9,
      purchasePrice: 28.5,
      date: '15/03/2023',
    },
  },
  {
    key: '2',
    data: {
      stockName: 'PETR4',
      type: 'Stocks',
      amount: 200,
      currentValue: 27.45,
      purchasePrice: 22.8,
      date: '10/04/2023',
    },
  },
  {
    key: '3',
    data: {
      stockName: 'CMIG4',
      type: 'Stocks',
      amount: 80,
      currentValue: 12.75,
      purchasePrice: 10.9,
      date: '22/05/2023',
    },
  },
  {
    key: '4',
    data: {
      stockName: 'TAEE11',
      type: 'Real State',
      amount: 120,
      currentValue: 40.2,
      purchasePrice: 35.0,
      date: '05/06/2023',
    },
  },
  {
    key: '5',
    data: {
      stockName: 'SPYI11',
      type: 'ETFs',
      amount: 300,
      currentValue: 105.0,
      purchasePrice: 98.5,
      date: '18/07/2023',
    },
  },
  {
    key: '6',
    data: {
      stockName: 'ITSA4',
      type: 'Stocks',
      amount: 7,
      currentValue: 9.47,
      purchasePrice: 20.9,
      date: '30/08/2023',
    },
  },
]);
