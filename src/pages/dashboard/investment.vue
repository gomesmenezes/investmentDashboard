<script setup lang="ts">
import NewSideBar from '@/components/NewSideBar.vue';
</script>

<template>
  <NewSideBar />

  <!-- Conteúdo principal com margem para desktop -->
  <main class="min-h-screen bg-[#d7d7d7] lg:ml-72">
    <div class=" p-4 lg:p-6">
      <!-- Seu conteúdo principal aqui -->
      <h1 class="text-2xl font-bold">Bem-vindo ao Dashboard</h1>
      <div class="mt-4">
        <!-- Adicione seus componentes de conteúdo -->
      </div>
    </div>
  </main>
</template>
