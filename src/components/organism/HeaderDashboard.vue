<script setup>
import { ref } from 'vue'; // Importe ref para gerenciar o estado reativo
import { AppWindow, Eye, EyeOff } from 'lucide-vue-next';
import InputNumber from 'primevue/inputnumber';

// Estado reativo para controlar a visibilidade do Dialog
const visible = ref(false);

// Emits
const emit = defineEmits(['toggle-visibility']);

// Props
defineProps({
  hideValue: Boolean,
});

// Método para alternar a visibilidade
const toggleVisibility = () => {
  emit('toggle-visibility');
};
</script>

<template>
  <header class="flex justify-between items-center">
    <div class="text">
      <h1 class="text-black font-bold text-2xl">Investment Portfolio</h1>
      <p class="text-black opacity-50 text-lg">
        Track and manage your investments across different asset classes
      </p>
    </div>

    <div class="flex items-center gap-3 justify-center">
      <!-- Botão para alternar visibilidade -->
      <button
        @click="toggleVisibility"
        class="hover:opacity-80 transition-opacity"
        aria-label="Alternar visibilidade do valor">
        <Eye v-if="!hideValue" color="black" class="w-5 h-5" />
        <EyeOff v-else class="w-5 h-5" color="black" />
      </button>

      <!-- Botão "Add Investment" para abrir o Dialog -->
      <Button
        id="btn"
        class="h-[44px]"
        color="black"
        label="Add Investment"
        @click="visible = true" />

      <Button
        id="btn1"
        variant="outlined"
        class="!border-2 !border-[#0b1739] bg-transparent!">
        <AppWindow color="black" />
      </Button>
    </div>
  </header>

  <!-- Dialog -->
  <Dialog
    v-model:visible="visible"
    modal
    header="Add Investment"
    :style="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">
      Add your investment
    </span>

    <div class="flex items-center gap-4 mb-4">
      <label for="stockId" class="font-semibold w-24">Stock ID</label>
      <InputText id="stockId" class="flex-auto" autocomplete="off" />
    </div>

    <div class="flex items-center gap-4 mb-4">
      <label for="quantityStock" class="font-semibold w-24">Quantity</label>
      <InputNumber id="quantityStock" class="flex-auto" autocomplete="off" />
    </div>

    <div class="flex items-center gap-4 mb-4">
      <label for="purchasePrice" class="font-semibold w-24">
        Purchase Price
      </label>
      <InputNumber id="purchasePrice" class="flex-auto" autocomplete="off" />
    </div>

    <div class="flex justify-end gap-2 mt-4">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="visible = false" />
      <Button type="button" label="Save" @click="visible = false" />
    </div>
  </Dialog>
</template>
