<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  title: string;
  porcentage: number;
  valueReturn: number;
  width?: string | number;
  height?: string | number;
  currency?: string;
  hideValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '160px',
  currency: 'R$',
  hideValue: true
});
</script>

<template>
  <div
    :style="{ 
      width: typeof props.width === 'number' ? `${props.width}px` : props.width,
      minHeight: typeof props.height === 'number' ? `${props.height}px` : props.height
    }"
    class="bg-[#0B1739] px-8 py-5 rounded-2xl flex flex-col justify-center">
    <div class="flex items-center  mb-4">
      <h2 class="text-lg font-medium">{{ title }}</h2>
    </div>
    <div>
      <p class="text-2xl font-semibold">
        {{ currency }}
        {{ hideValue ? '****' : valueReturn }}
        ({{ hideValue ? '**' : porcentage




        }}%)
      </p>
    </div>
  </div>
</template>
