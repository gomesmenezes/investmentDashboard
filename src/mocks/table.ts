import { computed } from 'vue';
import { stocks } from '@/composable/useStock.js'; // Ajuste o caminho conforme necessário
import TreeNode from '@/types/table.js';

export const nodes = computed<TreeNode[]>(() => {
  return stocks.value.map((stock, index) => ({
    key: String(index + 1),
    data: {
      logoUrlStock: stock.logourl || '',
      stockName: stock.stockName,
      type: stock.type || 'Stocks',
      amount: stock.stockQuantity || 0,
      currentValue: stock.stockPriceCurrent || 0,
      purchasePrice: stock.stockPriceBuy || 0,
      date: stock.date || 'N/A',
    },
  }));
});
