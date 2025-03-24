<script setup lang="ts">
import NewSideBar from '@/components/NewSideBar.vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { ref, onMounted } from 'vue';
import {
  initStocks,
  returnPercentage,
  totalCurrentValue,
  totalInvested,
} from '@/service/useStock';
import { valueInvestedCrypto } from '@/composobles/useCrypto';
const isDarkMode = ref(false);
const cryptoValue = ref<number | null>(null);
import { mockCrypto } from '@/mocks/crypto';
import TableInvestment from '@/components/moleculas/TableInvestment.vue';
import ChartPizza from '@/components/moleculas/ChartPizza.vue';
import { fetchDolar } from '@/composobles/useCurrency';

onMounted(async () => {
  cryptoValue.value = await valueInvestedCrypto();
  initStocks();
  const dolar = await fetchDolar();
  console.log(dolar);
});
</script>

<template>
  <NewSideBar />

  <main class="min-h-screen bg-[#242424] lg:ml-72">
    <div class=" p-4 lg:p-6">
      <div class="topHeader flex justify-between">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <div class="flex gap-4">
          <Button
            v-if="isDarkMode === true"
            icon="pi pi-sun"
            severity="secondary"
            rounded
            aria-label="Sun theme"
            class="!bg-white" />
          <Button
            v-if="isDarkMode === false"
            icon="pi pi-moon"
            severity="secondary"
            rounded
            aria-label="Moon theme"
            class="!bg-[#000000]" />
          <Button
            class="!bg-[#121212] !text-white"
            label="Adicionar Investimento" />
          <Button
            class="!bg-[#121212] !text-white"
            label="Remover Investimento" />
        </div>
      </div>
      <div class="cards mt-4">
        <div class="cards grid grid-cols-4 gap-4 overflow-hidden">
          <Card
            style="width: 100%; overflow: hidden"
            class="!bg-[linear-gradient(160deg,_#000428_35%,_#004e92_100%)] flex">
            <template class="" #title>Valor do Aplicado</template>
            <template #content>
              <p class="text-2xl font-bold">
                R$ {{ Number((totalInvested).toFixed(2)) }}
              </p>
            </template>
          </Card>
          <Card
            style="width: 100%; overflow: hidden"
            class="!bg-[linear-gradient(160deg,_#000428_35%,_#004e92_100%)]">
            <template #title>Valor Atual</template>
            <template #content>
              <p
                class="text-2xl font-bold"
                :class="totalCurrentValue > totalInvested ? 'text-green-500' : 'text-red-500'">
                R$ {{ Number((totalCurrentValue).toFixed(2)) }}
              </p>
            </template>
          </Card>
          <Card
            style="width: 100%; overflow: hidden"
            class="!bg-[linear-gradient(160deg,_#000428_35%,_#004e92_100%)]">
            <template #title>Retorno da Carteira</template>

            <template #content>
              <p
                class="text-2xl font-bold"
                :class="returnPercentage > 0 ? 'text-green-500' : 'text-red-500'">
                {{ Number((returnPercentage).toFixed(2)) }}%
              </p>
            </template>
          </Card>
          <Card
            style="width: 100%; overflow: hidden"
            class="!bg-[linear-gradient(160deg,_#000428_35%,_#004e92_100%)]">
            <template #title>BITCOIN</template>
            <template #subtitle>
              <p class="text-md text-white">
                <span class="text-white">
                  {{ mockCrypto[0].quantity }}
                </span>
              </p>
            </template>
            <template #content>
              <p class="text-2xl font-bold">
                $ {{ cryptoValue ? Number(cryptoValue.toFixed(2)) : '0.00' }}
              </p>
            </template>
          </Card>
        </div>
      </div>
      <div class="mt-4">
        <ChartPizza />
        <TableInvestment />
      </div>
    </div>
  </main>
</template>
