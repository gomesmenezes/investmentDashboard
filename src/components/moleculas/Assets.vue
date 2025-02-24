<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { type Stock, mockStocks } from '@/mocks/stocks';

const stocks = ref<Stock[]>(mockStocks);

const fetchStockData = async (stock: Stock): Promise<Partial<Stock> | null> => {
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
  <div class="bg-[#0B1739] rounded-md w-full">
    <div class="assets flex flex-col p-3 gap-5 mx-auto w-full h-full">
      <div
        v-for="stock in stocks"
        :key="stock.id"
        class="row bg-[#112459] flex gap-5 items-center rounded-lg w-full max-w-2xl px-6 py-3 justify-between"
      >
        <div class="flex flex-row gap-2 items-center">
          <div
            class="h-[35px] w-[35px] rounded-md bg-white overflow-hidden flex items-center justify-center"
          >
            <img :src="stock.logourl" class="aspect-square object-contain" loading="lazy" />
          </div>
          <div class="flex flex-col">
            <p class="font-semibold">{{ stock.stockName }}</p>
            <p class="opacity-50">{{ stock.stockQuantity }}</p>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <p>R$ {{ stock.stockPriceCurrent.toFixed(2) }}</p>
          <p v-if="stock.stockValuation > 0" class="flex text-end text-green-400">
            {{ stock.stockValuation.toFixed(2) }}%
          </p>
          <p v-if="stock.stockValuation < 0" class="flex text-end text-red-400">
            {{ stock.stockValuation.toFixed(2) }}%
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
