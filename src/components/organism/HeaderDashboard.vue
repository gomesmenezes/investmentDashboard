<script setup>
import { ref, onMounted } from 'vue';
import { Bitcoin, Eye, EyeOff } from 'lucide-vue-next';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Drawer from 'primevue/drawer';
import CascadeSelect from 'primevue/cascadeselect';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import {getCryptoPrices, fetchCryptoPrices} from '@/service/useCrypto';

const cryptoPrices = ref([]);
const loading = ref(true);
const visibleLeft = ref(false);
const visible = ref(false);
const selectedTag = ref(null);

const emit = defineEmits(['toggle-visibility']);

defineProps({
  hideValue: Boolean,
});

const toggleVisibility = () => {
  emit('toggle-visibility');
};


// Função para determinar a classe do preço (positivo ou negativo)
const getPriceChangeClass = (change) => {
  return change >= 0 ? 'positive' : 'negative';
};

// Busca os dados quando o componente é montado
onMounted(async () => {
  cryptoPrices.value = await fetchCryptoPrices();
  loading.value = false;
});
</script>

<template>
  <header class="flex justify-between items-center">
    <div class="text">
      <h1 class="text-black font-bold text-2xl">Investment Portfolio</h1>
      <p class="text-black opacity-50 text-lg">
        Track and manage your investments across different asset classes
      </p>
    </div>

    <div class="flex items-center gap-3 justify-center">
      <!-- Botão para alternar visibilidade -->
      <button
        @click="toggleVisibility"
        class="hover:opacity-80 transition-opacity"
        aria-label="Alternar visibilidade do valor">
        <Eye v-if="!hideValue" color="black" class="w-5 h-5" />
        <EyeOff v-else class="w-5 h-5" color="black" />
      </button>

      <Button
        id="btn1"
        variant="outlined"
        @click="visibleLeft = true"
        class="!border-2 !border-[#0b1739] bg-transparent!">
        <Bitcoin color="black" />
      </Button>
    </div>
  </header>

  <Drawer v-model:visible="visibleLeft" header="Crypto Now!" position="right">
    <div class="flex flex-col gap-2">
      <ul v-if="!loading && cryptoPrices.length > 0">
        <li
          v-for="crypto in cryptoPrices"
          :key="crypto.id"
          class="flex items-center justify-between bg-[#0B1739] text-white rounded-lg p-5 gap-3 mb-2 ">
          <img :src="crypto.image" :alt="crypto.name" width="32" />
          <div class="">
            <div>{{ crypto.name }} ({{ crypto.symbol.toUpperCase() }})</div>
            <div class="font-bold">${{ crypto.current_price.toFixed(2) }}</div>
          </div>
          <span
            :class="getPriceChangeClass(crypto.price_change_percentage_24h) > 0 ? 'text-green-400' : 'text-red-400 '">
            {{ crypto.price_change_percentage_24h.toFixed(2) }}%
          </span>
        </li>
      </ul>
      <p v-else-if="loading">Carregando...</p>
      <p v-else>Nenhum dado encontrado.</p>
    </div>
  </Drawer>
</template>

<style>
.p-drawer {
  background-color: #08112a !important;
}

.p-select{
  background-color: #d7d7d7 !important;
  color: black !important;
  border-color: #0b1739 !important;
}

.p-select-label {
  background-color: #d7d7d7 !important;
  color: black !important;
  border-color: #0b1739 !important;
}

.p-select-overlay {
  background-color: #0b1739 !important;
  color: black !important;
  border-color: #0b1739 !important;
}

.p-select-option:hover {
  background-color: #152d6f !important;
}

.p-dialog {
  background-color: white !important;
  color: black !important;
}
.p-inputtext {
  background-color: #d7d7d7 !important;
  color: black !important;
}

.p-inputtext:enabled:focus {
  border-color: #0b1739 !important;
}
</style>
