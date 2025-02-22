<script setup lang="ts">
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
</script>

<template>
  <div>
    <Chart type="pie" :data="chartData" :options="chartOptions" class="mt-10 w-full md:w-[25rem]" />
  </div>
</template>
