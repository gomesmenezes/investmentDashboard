<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="card flex justify-center items-center mx-auto h-screen">
    <nuxt-link to="/dashboard">
      <Button type="button" label="ENTRAR!" :loading="loading" @click="load" />
    </nuxt-link>
  </div>
</template>
