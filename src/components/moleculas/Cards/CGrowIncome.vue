<script setup lang="ts">
interface Props {
  title: string;
  percentageOfIncrease: number;
  description: string;
  width?: string | number;
  height?: string | number;
  hideValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '130px',
  hideValue: true
});
</script>

<template>
  <div
    class="bg-[#FF4C00] !text-white px-8 py-5 rounded-2xl max-h-[160px] flex justify-center items-center"
    :style="{ 
      width: typeof props.width === 'number' ? `${props.width}px` : props.width,
      height: typeof props.height === 'number' ? `${props.height}px` : props.height
    }">
    <div class="flex gap-10 items-center justify-between text-md w-full">
      <div class="">
        <p class="text-xl">{{ title }}</p>
        <p class="opacity-50 whitespace-nowrap">{{ description }}</p>
      </div>
      <div>
        <p class="text-3xl flex items-center justify-center h-full ">
          {{ props.hideValue ? '**' : percentageOfIncrease }}%
        </p>
      </div>
    </div>
  </div>
</template>
