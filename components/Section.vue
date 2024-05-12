<template>
  <div>
    <div class="my-2 text-left">
      <h2
        class="flex gap-2 font-bold text-base text-left before:rounded-full before:bg-secondary before:w-1"
      >
        {{ heading }}
      </h2>
    </div>
    <div :class="['rounded-lg text-left', { 'bg-background': showbg }]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  heading: {
    type: String,
  },
  showbg: {
    type: Boolean,
    default: true,
  },
});
</script>

<style></style>
