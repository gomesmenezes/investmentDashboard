<script setup>
import { ref, onMounted } from 'vue';
import { AppWindow, Eye, EyeOff } from 'lucide-vue-next';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Drawer from 'primevue/drawer';
import CascadeSelect from 'primevue/cascadeselect';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import { tagInvestmentOptions } from '@/types/stock';

const visibleLeft = ref(false);
const visible = ref(false);
const selectedTag = ref(null);

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

// Verifique se as opções estão sendo carregadas corretamente
onMounted(() => {
  console.log('tagInvestmentOptions:', tagInvestmentOptions);
});
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
        @click="visibleLeft = true"
        class="!border-2 !border-[#0b1739] bg-transparent!">
        <AppWindow color="black" />
      </Button>
    </div>
  </header>

  <Drawer v-model:visible="visibleLeft" header="Right Drawer" position="right">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </Drawer>

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
      <InputText
        id="stockId"
        class="flex-auto"
        autocomplete="off"
        placeholder="Ex: PETR4" />
    </div>

    <div class="flex items-center gap-4 mb-4">
      <label for="quantityStock" class="font-semibold w-24">Quantity</label>
      <InputNumber
        id="quantityStock"
        class="flex-auto"
        autocomplete="off"
        placeholder="100" />
    </div>

    <div class="flex items-center gap-4 mb-4">
      <label for="purchasePrice" class="font-semibold w-24">
        Purchase Price
      </label>
      <InputNumber
        id="purchasePrice"
        class="flex-auto"
        autocomplete="off"
        placeholder="37.57" />
    </div>

    <div class="flex items-center gap-4 mb-4">
      <label for="ms_tagInvestment" class="font-semibold min-w-24!">
        Category
      </label>
      <Select
        v-model="selectedTag"
        :options="tagInvestmentOptions"
        optionLabel="name"
        placeholder="Select a Tag"
        class="w-full" />
    </div>

    <div class="flex justify-end gap-2 mt-4">
      <Button
        type="button"
        label="Cancelar"
        severity="secondary"
        @click="visible = false" />
      <Button type="button" label="Adicionar" @click="visible = false" />
    </div>
  </Dialog>
</template>

<style>
.p-select{
  background-color: #d7d7d7 !important;
  color: black !important;
  border-color: #0b1739 !important;
}

.p-select-label {
  background-color: #d7d7d7 !important;
  color: black !important;
  border-color: #0b1739 !important;
}

.p-select-overlay {
  background-color: #0b1739 !important;
  color: black !important;
  border-color: #0b1739 !important;
}

.p-select-option:hover {
  background-color: #152d6f !important;
}

.p-dialog {
  background-color: white !important;
  color: black !important;
}
.p-inputtext {
  background-color: #d7d7d7 !important;
  color: black !important;
}

.p-inputtext:enabled:focus {
  border-color: #0b1739 !important;
}
</style>
