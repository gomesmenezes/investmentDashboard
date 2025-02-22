<script setup lang="ts">
import Card from '@/components/moleculas/Card.vue';
import Sidebar from '@/components/organism/Sidebar.vue';
import { mockStocks } from '@/mocks/stocks';
import ChartDashboard from '@/components/moleculas/ChartDashboard.vue';

const stocks = ref(mockStocks);

const investValue = [1000, 350, 150];
const totalValue = investValue.reduce((acc, val) => acc + val, 0);
</script>

<template>
  <div class="flex text-white gap-5">
    <Sidebar />
    <div>
      <div class="flex gap-5">
        <Card :totalValue="totalValue" />
        <Card :totalValue="totalValue" />
      </div>

      <div class="flex">
        <ChartDashboard />

        <div class="w-[400px]">
          <div class="assets flex flex-col p-3 gap-5 mx-auto w-full max-w-5xl">
            <div
              v-for="stock in stocks"
              :key="stock.stockName"
              class="row bg-[#0B1739] flex gap-5 items-center rounded-lg w-full max-w-2xl px-6 py-3 justify-between"
            >
              <div class="flex flex-row gap-2 items-center">
                <div
                  class="h-[35px] w-[35px] rounded-full bg-white overflow-hidden flex items-center justify-center"
                >
                  <img
                    :src="stock.img || 'https://via.placeholder.com/28'"
                    class="h-full w-full p-1 aspect-square object-contain"
                    loading="lazy"
                  />
                </div>
                <div class="flex flex-col">
                  <p class="font-semibold">{{ stock.stockName }}</p>
                  <p class="opacity-50">{{ stock.stockQuantity }}</p>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <p>R$ {{ stock.stockPriceCurrent }}</p>
                <p class="flex text-end">{{ stock.stockValuation }}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  background-color: #081028;
}
</style>
