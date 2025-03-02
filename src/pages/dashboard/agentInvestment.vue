<script setup lang="ts">
import BarSide from '@/components/organism/SideBar.vue';
import Card from '@/components/moleculas/Cards/CInvested.vue';
import CardSeconde from '@/components/moleculas/Cards/CGrowIncome.vue';
import Assets from '@/components/moleculas/Assets.vue';

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
  <div class="flex">
    <BarSide />
    <div class="grid grid-cols-2 gap-5 pt-8 px-5"></div>
    <div></div>
  </div>
</template>
