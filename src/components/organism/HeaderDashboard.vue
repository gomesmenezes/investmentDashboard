<script setup>
import { AppWindow, Eye, EyeOff } from 'lucide-vue-next';

const emit = defineEmits(['toggle-visibility']);

defineProps({
    hideValue: Boolean,
})

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
      <button
        @click="toggleVisibility"
        class="hover:opacity-80 transition-opacity"
        aria-label="Alternar visibilidade do valor">
        <Eye v-if="!hideValue" color="black" class="w-5 h-5" />
        <EyeOff v-else class="w-5 h-5" color="black" />
      </button>
      <Button id="btn" class="h-[44px]" color="black" label="Add Investment" />
      <Button
        id="btn1"
        variant="outlined"
        class="!border-2 !border-[#0b1739] bg-transparent!">
        <AppWindow color="black" />
      </Button>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
