<template>
  <div class="my-10">
    <div>
      <canvas ref="pieChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import { valueInvestedCrypto, startCryptoUpdates, stopCryptoUpdates } from '@/composobles/useCrypto';
import { fetchDolar } from '@/composobles/useCurrency';
const cryptoValue = ref(null);
import {
  totalCurrentValue
} from '@/service/useStock';

// Registra todos os componentes necessários do Chart.js
Chart.register(...registerables);

// Referência para o elemento <canvas>
const pieChart = ref(null);

async function getCryptoValue() {
  const cryptoData = await valueInvestedCrypto();
  const dolar = await fetchDolar();
  if (cryptoData && dolar) {
    const dolarValue = parseFloat(dolar[0].valor.replace(',', '.'));
    return cryptoValue.value = cryptoData * dolarValue;
  }
}

// Dados mockados
const chartData = computed(() => ({
  labels: ['Ações', 'Reserva de Emergência', 'Cripto'],
  datasets: [
    {
      label: 'Valor Investido',
      data: [1147.55, totalCurrentValue.value, cryptoValue.value || 0],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      borderWidth: 1,
    },
  ],
}));

// Opções do gráfico
const chartOptions = {
  responsive: true, // Torna o gráfico responsivo
  maintainAspectRatio: false, // Permite ajustar a proporção
  plugins: {
    legend: {
      position: 'bottom', // Posição da legenda
    },
  },
};

let chart = null;

// Renderiza o gráfico quando o componente é montado
onMounted(async () => {
  // Busca o valor inicial do crypto
  await getCryptoValue();

  // Cria o gráfico com os dados iniciais
  if (pieChart.value) {
    const ctx = pieChart.value.getContext('2d');
    chart = new Chart(ctx, {
      type: 'pie',
      data: chartData.value,
      options: chartOptions,
    });
  }

  // Inicia as atualizações periódicas
  startCryptoUpdates(async () => {
    await getCryptoValue();
  });
});

// Limpa o intervalo quando o componente é desmontado
onUnmounted(() => {
  stopCryptoUpdates();
  if (chart) {
    chart.destroy();
  }
});

// Watch for changes in cryptoValue and update the chart
watch(cryptoValue, (newValue) => {
  if (chart) {
    chart.data.datasets[0].data[2] = newValue || 0;
    chart.update();
  }
});
</script>

<style scoped>
/* Estilos opcionais para o gráfico */
div {
  max-width: 600px;
}
</style>
