import { ref, computed } from 'vue';
import {
  type Stock,
  mockStocks,
  calculateTotalInvestment,
} from '@/mocks/stocks.js';

export const stocks = ref<Stock[]>(mockStocks);

export const totalInvestment = computed(() =>
  calculateTotalInvestment(stocks.value)
);

// Calcula o valor total investido (comprado)
export const totalInvested = computed(() => {
  return stocks.value.reduce((total, stock) => {
    return total + stock.stockQuantity * stock.stockPriceBuy;
  }, 0);
});

// Calcula o valor total atual
export const totalCurrentValue = computed(() => {
  return stocks.value.reduce((total, stock) => {
    return total + stock.stockQuantity * stock.stockPriceCurrent;
  }, 0);
});

// Calcula o retorno total (valor atual - valor investido)
export const totalReturn = computed(() => {
  return Number((totalCurrentValue.value - totalInvested.value).toFixed(2));
});

// Calcula a porcentagem de retorno
export const returnPercentage = computed(() => {
  if (totalInvested.value === 0) return 0; // Evita divisão por zero.
  if (totalReturn.value === 0) return 0; // Evita resultados inesperados.
  return Number(((totalReturn.value / totalInvested.value) * 100).toFixed(2));
});

export const fetchStockData = async (
  stock: Stock
): Promise<Partial<Stock> | null> => {
  try {
    const response = await fetch(
      `https://brapi.dev/api/quote/${stock.stockName}?range=1d&interval=1d&token=qy8q1WvwrS7bRWhWgsfZi2`
    );
    const data = await response.json();

    if (data.results?.[0]) {
      const stockPriceCurrent = data.results[0].regularMarketPrice ?? 0;
      const stockValuation = data.results[0].regularMarketChangePercent ?? 0;
      const logourl = data.results[0].logourl ?? '';
      return { stockPriceCurrent, stockValuation, logourl };
    }
  } catch (error) {
    console.error(`Erro ao buscar dados de ${stock.stockName}:`, error);
  }
  return null;
};

export const updateStockPrices = async () => {
  const results = await Promise.all(
    stocks.value.map((stock) => fetchStockData(stock))
  );

  stocks.value = stocks.value.map((stock, index) => {
    const updatedData = results[index];
    return updatedData ? { ...stock, ...updatedData } : stock;
  });
};

export const initStocks = async () => {
  await updateStockPrices();
};
