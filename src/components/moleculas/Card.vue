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
</script>

<template>
  <div class="card bg-[#0B1739] px-8 py-5 rounded-2xl max-w-[350px] max-h-[160px]">
    <div class="flex gap-10 items-center mb-5 justify-between text-md">
      <div class="flex gap-2 items-center">
        <div v-if="showMoney">
          <Eye @click="toggleMoney" />
        </div>
        <div v-else @click="toggleMoney">
          <EyeOff />
        </div>
        <p class="font-normal">Balance Investment</p>
      </div>
      <div>
        <CircleEllipsis />
      </div>
    </div>
    <div>
      <div class="flex gap-3 items-center">
        <div v-if="showMoney">
          <p class="font-bold text-lg">R$ {{ totalValue.toFixed(2) }}</p>
        </div>
        <div v-else>
          <p class="font-bold text-lg">R$******</p>
        </div>
      </div>
    </div>
  </div>
</template>
