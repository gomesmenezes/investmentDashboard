import { computed } from 'vue';
import { stocks } from '@/service/useStock.js';
import TreeNode from '@/types/table.js';

export const nodes = computed<TreeNode[]>(() => {
  return stocks.value.map((stock, index) => ({
    key: String(index + 1),
    data: {
      logoUrlStock: stock.logourl || '',
      stockName: stock.stockName,
      type: stock.type || 'Stocks',
      quantity: stock.stockQuantity || 0,
      currentValue: stock.stockPriceCurrent || 0,
      purchasePrice: stock.stockPriceBuy || 0,
      date: stock.date || 'N/A',
    },
  }));
});
