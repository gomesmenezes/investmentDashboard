<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'primevue/chart';
import BarSide from '@/components/organism/BarSide.vue';
import Card from '@/components/moleculas/Card.vue';
import CardSeconde from '@/components/moleculas/CardSeconde.vue';
import Assets from '@/components/moleculas/Assets.vue';
import cryptoCard from '@/components/moleculas/cryptoCard.vue';

// Dados de investimento para dois meses
const investValueLastMonth = [1500, 300, 100]; // Reserva, Ações, Criptomoedas (mês anterior)
const investValueCurrentMonth = [1827.07, 350, 150]; // Reserva, Ações, Criptomoedas (mês atual)

const totalInvestValue = investValueCurrentMonth.reduce((acc, val) => acc + val, 0);

const chartData = ref();
const chartOptions = ref();

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ['Mês Anterior', 'Mês Atual'], // Rótulos dos meses
    datasets: [
      {
        label: 'Reserva de Emergência', // Categoria 1
        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'), // Cor da categoria
        data: [investValueLastMonth[0], investValueCurrentMonth[0]], // Valores para cada mês
      },
      {
        label: 'Ações', // Categoria 2
        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'), // Cor da categoria
        data: [investValueLastMonth[1], investValueCurrentMonth[1]], // Valores para cada mês
      },
      {
        label: 'Criptomoedas', // Categoria 3
        backgroundColor: documentStyle.getPropertyValue('--p-orange-500'), // Cor da categoria
        data: [investValueLastMonth[2], investValueCurrentMonth[2]], // Valores para cada mês
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        position: 'bottom',
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        stacked: true, // Barras empilhadas no eixo X
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        stacked: true, // Barras empilhadas no eixo Y
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>

<template>
  <div class="flex items-start">
    <BarSide />
    <div class="grid grid-cols-2 gap-5 pt-8 px-5 w-fit h-auto self-start">
      <div class="gap-5 pl-5">
        <div class="mb-10 flex gap-5">
          <Card :totalValue="totalInvestValue" />
          <CardSeconde
            title="Increase"
            :percetageOfIncrease="15"
            description="Grow in since last month"
          />
        </div>
        <div class="w-full">
          <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[25rem]" />
        </div>
      </div>
      <div>
        <div class="flex justify-center items-center mx-auto mb-5">
          <cryptoCard />
        </div>
        <Assets />
      </div>
    </div>
  </div>
</template>
