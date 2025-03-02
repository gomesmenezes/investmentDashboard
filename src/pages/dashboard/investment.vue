<script setup lang="ts">
import Divider from 'primevue/divider';
import BarSide from '@/components/organism/BarSide.vue';
import { AppWindow, Eye, EyeOff } from 'lucide-vue-next';
import Card from '@/components/moleculas/Card.vue';
import CardSeconde from '@/components/moleculas/CardSeconde.vue';
import CardThree from '@/components/moleculas/CardThree.vue';

const investValueCurrentMonth = [1827.07, 350, 150]; // Reserva, Ações, Criptomoedas (mês atual)

const hideValueGlobal = ref(true);

const toggleVisibility = () => {
  hideValueGlobal.value = !hideValueGlobal.value; // Inverte o estado
};

const totalInvestValue = investValueCurrentMonth.reduce((acc, val) => acc + val, 0);
</script>

<template>
  <div class="flex overflow-hidden">
    <BarSide />
    <section class="px-8 py-5 mx-auto w-screen">
      <header class="flex justify-between items-center">
        <div class="text">
          <h1 class="text-black font-bold text-2xl">Investment Portfolio</h1>
          <p class="text-black opacity-50 text-lg">
            Track and manage your investments across different asset classes
          </p>
        </div>
        <div class="flex items-center gap-3 justify-center">
          <button
            @click="toggleVisibility"
            class="hover:opacity-80 transition-opacity"
            aria-label="Alternar visibilidade do valor">
            <Eye v-if="!hideValueGlobal" color="black" class="w-5 h-5" />
            <EyeOff v-else class="w-5 h-5" color="black" />
          </button>
          <Button
            id="btn"
            class="h-[44px]"
            color="black"
            label="Add Investment" />
          <Button
            id="btn1"
            variant="outlined"
            class="!border-2 !border-[#0b1739]">
            <AppWindow color="black" />
          </Button>
        </div>
      </header>

      <Divider />

      <div class="my-0 grid grid-cols-3 gap-5 w-full">
        <Card
          @toggle-visibility="toggleVisibility"
          :hide-value="hideValueGlobal"
          title="Total Invested"
          :total-value="12543.67"
          class="w-full h-full" />

        <CardSeconde
          :hide-value="hideValueGlobal"
          @toggle-visibility="toggleVisibility"
          title="Increase"
          :percentageOfIncrease="15"
          description="Grow in since last month"
          class="w-full h-full" />

        <CardThree
          @toggle-visibility="toggleVisibility"
          :hide-value="hideValueGlobal"
          title="Total Return"
          :value-return="12543.67"
          :porcentage="15"
          class="w-full h-full" />
      </div>

      <div class="grid grid-cols-[2fr_1fr] gap-5 w-fit h-auto">
        <div></div>
        <div></div>
      </div>
    </section>
  </div>
</template>

<style>

body {
  background-color: #fff;
}

#btn {
  background-color: #0b1739;
  border: none;
  color: #fff;
}
</style>
