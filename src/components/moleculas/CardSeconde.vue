<script setup lang="ts">
const title = ref('Your Wallet');
const percetageOfIncrease = ref(15);
const description = ref('Grow since last month');
</script>

<template>
  <div
    class="card bg-[#0B1739] px-8 py-5 rounded-2xl mt-[28px] max-w-[350px] flex justify-center items-center"
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
