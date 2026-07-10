<script setup lang="ts">
interface Props {
  size?: number | string;
}

withDefaults(defineProps<Props>(), {
  size: 24,
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :width="size"
    :height="size"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
</template>
