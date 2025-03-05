<script setup lang="ts">
import BarSide from '@/components/organism/SideBar.vue';
</script>

<template>
  <div class="flex min-h-screen w-full">
    <BarSide />
    <section class="px-8 py-5 mx-auto w-screen text-black">
      <div class="balance ">
        <h1 class="text-2xl font-bold">Balance</h1>
        <p class="text-black opacity-50 text-lg">
          Track and manage your investments across different asset classes
        </p>
      </div>
    </section>
  </div>
</template>
