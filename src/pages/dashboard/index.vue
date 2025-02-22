<script setup lang="ts">
import Card from '@/components/moleculas/Card.vue';
import Assets from '@/components/moleculas/Assets.vue';
import Sidebar from '@/components/organism/Sidebar.vue';
import ChartDashboard from '@/components/moleculas/ChartDashboard.vue';
import CardSeconde from '@/components/moleculas/CardSeconde.vue';

const investValue = [1827.07, 350, 150];
const totalValue = parseFloat(investValue.reduce((acc, val) => acc + val, 0).toFixed(2));
</script>

<template>
  <div class="container flex text-white gap-5">
    <Sidebar />
    <div class="cards-container">
      <div class="flex gap-5">
        <Card :totalValue="totalValue" />
        <CardSeconde />
      </div>

      <div class="chart-assets-container flex mt-5">
        <ChartDashboard />
        <Assets />
      </div>
    </div>
  </div>
</template>

<style>
html {
  background-color: #081028;
}
</style>
