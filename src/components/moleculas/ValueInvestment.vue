<script setup lang="ts">
import { type Stock, mockStocks } from '@/mocks/stocks';

const stocks = ref<Stock[]>(mockStocks);

const fetchStockData = async (stock: Stock): Promise<Partial<Stock> | null> => {
  try {
    const response = await fetch(
      `https://brapi.dev/api/quote/${stock.stockName}?range=1d&interval=1d&token=qy8q1WvwrS7bRWhWgsfZi2`
    );
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error('Dados inválidos ou não encontrados');
    }

    return { stockPriceCurrent: data.results[0].regularMarketPrice ?? 0 };
  } catch (error) {
    console.error(`Erro ao buscar dados de ${stock.stockName}:`, error);
    return null;
  }
};

const updateStockPrices = async () => {
  const results = await Promise.all(stocks.value.map((stock) => fetchStockData(stock)));

  stocks.value = stocks.value.map((stock, index) => {
    const updatedData = results[index];
    return updatedData ? { ...stock, ...updatedData } : stock;
  });
};

onMounted(() => {
  updateStockPrices();
});
</script>

<template>
  <div class="bg-[#0B1739] rounded-md w-full mt-5 p-5 h-full">
    <h2 class="text-white text-lg font-semibold mb-3">Total Investido</h2>
    <div class="bg-[#112459] rounded-lg p-4 flex flex-col gap-2">
      <div
        v-for="stock in stocks"
        :key="stock.id"
        class="flex justify-between items-center border-b border-gray-600 pb-2 last:border-b-0"
      >
        <p class="text-white">{{ stock.stockName }}</p>
        <p class="font-bold text-green-400">
          R$ {{ (stock.stockQuantity * stock.stockPriceCurrent).toFixed(2) }}
        </p>
      </div>
    </div>
  </div>
</template>
