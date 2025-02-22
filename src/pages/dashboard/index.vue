<script setup lang="ts">
import Card from '@/components/moleculas/Card.vue';
import Sidebar from '@/components/organism/Sidebar.vue';
import Chart from 'primevue/chart';

const investValue = [1000, 350, 150];
const totalValue = investValue.reduce((acc, val) => acc + val, 0);

const chartData = reactive({
  labels: ['Reserva de Emergência', 'Ações', 'Criptomoedas'],
  datasets: [
    {
      data: investValue,
      backgroundColor: ['#98FB98', '#FF8C00', '#FF3131'],
    },
  ],
});

const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => {
          let value = tooltipItem.raw;
          return `R$ ${value.toLocaleString('pt-BR')}`;
        },
      },
    },
    datalabels: {
      color: '#fff',
      font: {
        weight: 'bold',
      },
      formatter: (value: number) => {
        const percentual = ((value / totalValue) * 100).toFixed(2);
        return ` R$ ${value.toLocaleString()} \n (${percentual}%)`;
      },
    },
  },
});

const stocks = [
  {
    stockName: 'Apple',
    stockQuantity: 10,
    stockPriceBuy: 100,
    stockPriceCurrent: 200,
    stockValuation: 15,
  },
  {
    stockName: 'Microsoft',
    stockQuantity: 15,
    stockPriceBuy: 150,
    stockPriceCurrent: 250,
    stockValuation: 20,
  },
  {
    stockName: 'Google',
    stockQuantity: 8,
    stockPriceBuy: 1200,
    stockPriceCurrent: 1500,
    stockValuation: 12.5,
  },
  {
    stockName: 'Amazon',
    stockQuantity: 5,
    stockPriceBuy: 1700,
    stockPriceCurrent: 1900,
    stockValuation: 11.8,
  },
  {
    stockName: 'Tesla',
    stockQuantity: 12,
    stockPriceBuy: 600,
    stockPriceCurrent: 900,
    stockValuation: 30,
  },
  {
    stockName: 'Nvidia',
    stockQuantity: 20,
    stockPriceBuy: 500,
    stockPriceCurrent: 750,
    stockValuation: 25,
  },
];
</script>

<template>
  <div class="flex text-white gap-5">
    <Sidebar />
    <div>
      <Card />
    </div>

    <div class="flex md:w-[25rem]">
      <Chart
        type="pie"
        :data="chartData"
        :options="chartOptions"
        class="w-full mt-10 ml-10 md:w-[25rem]"
      />
    </div>
  </div>
</template>

<style>
html {
  background-color: #081028;
}
</style>
