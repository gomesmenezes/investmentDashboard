<script setup lang="ts">
import { Eye, EyeOff } from 'lucide-vue-next';
import { withDefaults } from 'vue'

interface Props {
  title: string;
  totalValue: number;
  width?: string | number;
  height?: string | number;
  currency?: string;
  hideValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '160px',
  currency: 'R$',
  hideValue: true
});

const emit = defineEmits(['toggle-visibility']);

function toggleMoney() {
  emit('toggle-visibility');
}
</script>

<template>
  <div
    :style="{ 
      width: typeof props.width === 'number' ? `${props.width}px` : props.width,
      minHeight: typeof props.height === 'number' ? `${props.height}px` : props.height
    }"
    class="bg-[#0B1739] px-8 py-5 rounded-2xl flex flex-col justify-between">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-3">
        <button
          @click="toggleMoney"
          class="hover:opacity-80 transition-opacity"
          aria-label="Alternar visibilidade do valor">
          <Eye v-if="!hideValue" class="w-5 h-5" />
          <EyeOff v-else class="w-5 h-5" />
        </button>
        <h2 class="text-lg font-medium">{{ title }}</h2>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-2xl font-bold">{{ currency }}</span>
      <div class="text-3xl font-bold">
        <template v-if="!hideValue">
          {{ totalValue.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2 }) }}
        </template>
        <template v-else>
          <span class="tracking-widest">•••••</span>
        </template>
      </div>
    </div>
  </div>
</template>
