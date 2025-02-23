<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  percetageOfIncrease: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="card bg-[#0B1739] px-8 py-5 rounded-2xl mt-[28px] max-w-[350px] max-h-[160px] flex justify-center items-center"
  >
    <div class="flex gap-10 items-center justify-between">
      <div class="">
        <p class="text-xl">{{ title }}</p>
        <p class="opacity-50">{{ description }}</p>
      </div>
      <div>
        <p class="text-3xl">{{ percetageOfIncrease }}%</p>
      </div>
    </div>
  </div>
</template>
