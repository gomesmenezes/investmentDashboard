<script setup lang="ts">
import { Eye, EyeOff, CircleEllipsis } from 'lucide-vue-next';
import { Button } from 'primevue';

defineProps({
  totalValue: {
    type: Number,
    required: true,
  },
});

const showMoney = ref(false);
const toggleMoney = () => {
  showMoney.value = !showMoney.value;
};
const valuePorcentage = ref(0);
</script>

<template>
  <div class="card bg-[#0B1739] px-8 py-5 rounded-2xl mt-[28px] max-w-[350px]">
    <div class="flex gap-10 items-center mb-5 justify-between">
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
          <p class="font-bold text-lg">R$ {{ totalValue.toFixed(2) }}</p>
        </div>
        <div v-else>
          <p class="font-bold text-lg">R$******</p>
        </div>
        <div
          class="rounded-md px-2 bg-[#1a9e30a1]"
          :class="valuePorcentage < 0 ? 'bg-red-500' : 'bg-green-500'"
        >
          {{ valuePorcentage }}%
        </div>
      </div>
    </div>
  </div>
</template>
