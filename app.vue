<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <NuxtPage :key="route.fullPath" />
</template>
