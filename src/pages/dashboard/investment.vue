<script setup lang="ts">
import Divider from 'primevue/divider';
import BarSide from '@/components/organism/SideBar.vue';
import Card from '@/components/moleculas/Cards/CInvested.vue';
import CardSeconde from '@/components/moleculas/Cards/CGrowIncome.vue';
import CardThree from '@/components/moleculas/Cards/CReturnInvestment.vue';
import HeaderDashboard from '@/components/organism/HeaderDashboard.vue';
import TableInvestment from '@/components/moleculas/TableInvestment.vue';

const investValueCurrentMonth = [1827.07, 350, 150]; // Reserva, Ações, Criptomoedas (mês atual)

const hideValueGlobal = ref(true);

const toggleVisibility = () => {
  hideValueGlobal.value = !hideValueGlobal.value;
};

const totalInvestValue = investValueCurrentMonth.reduce((acc, val) => acc + val, 0);
</script>

<template>
  <div class="flex min-h-screen">
    <BarSide />
    <section class="px-8 py-5 mx-auto w-screen">
      <HeaderDashboard
        :hideValue="hideValueGlobal"
        @toggle-visibility="toggleVisibility" />

      <Divider />

      <div class="cards mb-5 my-0 grid grid-cols-3 gap-5 w-full">
        <Card
          @toggle-visibility="toggleVisibility"
          :hide-value="hideValueGlobal"
          title="Total Invested"
          :total-value="12543.67"
          class="w-full h-[130px]" />

        <CardSeconde
          :hide-value="hideValueGlobal"
          @toggle-visibility="toggleVisibility"
          title="Increase"
          :percentageOfIncrease="15"
          description="Grow in since last month"
          class="w-full h-[130px]" />

        <CardThree
          @toggle-visibility="toggleVisibility"
          :hide-value="hideValueGlobal"
          title="Total Return"
          :value-return="12543.67"
          :porcentage="15"
          class="w-full h-[130px]" />
      </div>

      <TableInvestment />
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
