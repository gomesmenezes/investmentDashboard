<script setup lang="ts">
import Card from '@/components/moleculas/Card.vue';
import Sidebar from '@/components/organism/Sidebar.vue';
</script>

<template>
  <div class="flex text-white gap-5">
    <Sidebar />
    <div>
      <Card />
    </div>
  </div>
</template>

<style>
html {
  background-color: #081028;
}
</style>
