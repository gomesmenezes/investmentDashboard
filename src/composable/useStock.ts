import { type Stock, mockStocks } from '@/mocks/stocks.js';

export const stocks = ref<Stock[]>(mockStocks);

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
