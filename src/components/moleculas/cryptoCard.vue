<script setup>
import { ref, onMounted } from 'vue';
import { getCryptoPrices } from '@/composable/useCrypto';
import Carousel from 'primevue/carousel';

const prices = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchPrices = async () => {
  loading.value = true;
  try {
    const data = await getCryptoPrices();
    if (data) prices.value = data;
  } catch (err) {
    error.value = 'Erro ao buscar preços das criptomoedas.';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchPrices);
</script>

<template>
  <div
    class="card bg-[#0B1739] px-8 py-5 rounded-2xl w-full max-h-[160px]"
  >
    <Carousel
      :value="prices ? Object.entries(prices) : []"
      :numVisible="1"
      :numScroll="1"
      circular
      :autoplayInterval="1700"
      :showNavigators="false"
      :showIndicators="false"
    >
      <template #item="slotProps">
        <div
          class="flex gap-3 items-center justify-center text-center mx-auto"
        >
          <p class="font-bold">
            {{ slotProps.data[0].toUpperCase() }}: R$
            {{ slotProps.data[1].usd.toFixed(2) }}
          </p>
          <span
            :class="{
              'text-green-500': slotProps.data[1].changePercent >= 0,
              'text-red-500': slotProps.data[1].changePercent < 0,
            }"
          >
            ({{ slotProps.data[1].changePercent.toFixed(2) }}%)
          </span>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style scoped></style>
