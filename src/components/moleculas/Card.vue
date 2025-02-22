<script setup lang="ts">
import { Eye, EyeOff, CircleEllipsis } from 'lucide-vue-next';

const showMoney = ref(true);
const toggleMoney = () => {
  showMoney.value = !showMoney.value;
};
const valuePorcentage = ref(0);
</script>

<template>
  <div class="card bg-[#0B1739] px-8 py-5 rounded-2xl mt-[28px]">
    <div class="flex gap-10 items-center mb-5">
      <div class="flex gap-2 items-center">
        <div v-if="showMoney">
          <Eye @click="toggleMoney" />
        </div>
        <div v-else @click="toggleMoney">
          <EyeOff />
        </div>
        <p class="font-normal text-xl">Balance Investment</p>
      </div>
      <div>
        <CircleEllipsis />
      </div>
    </div>
    <div>
      <div class="flex gap-3 items-center">
        <div v-if="showMoney" class="value">
          <p class="font-bold text-lg">R$12.973.460.00</p>
        </div>
        <div v-else>
          <p class="font-bold text-lg">R$******</p>
        </div>
        <div
          class="rounded-md px-2 bg-[#1a9e30a1]"
          :class="valuePorcentage <= 0 ? 'bg-red-500' : 'bg-green-500'"
        >
          {{ valuePorcentage }}%
        </div>
      </div>
    </div>
  </div>
</template>
