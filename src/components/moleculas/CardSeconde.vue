<script setup lang="ts">
defineProps({
  title: String,
  totalValue: Number,
  percentageOfCapital: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="card bg-[#0B1739] px-8 py-5 rounded-2xl mt-[28px] max-w-[350px]">
    <div class="flex gap-10 items-center mb-5 justify-between">
      <div class="flex gap-2 items-center">
        <p class="font-normal text-xl">{{ title }}</p>
      </div>
    </div>
    <div>
      <div class="flex gap-3 items-center">
        <div class="value">
          <p class="font-bold text-lg">R$ {{ totalValue }}</p>
        </div>
        <div
          class="rounded-md px-2 bg-[#1a9e30a1]"
          :class="percentageOfCapital < 0 ? 'bg-red-500' : 'bg-green-500'"
        >
          {{ percentageOfCapital }}%
        </div>
      </div>
    </div>
  </div>
</template>
