<script setup lang="ts">
interface Props {
  modelValue: boolean
  label: string
  swatchColor?: string
}

defineProps<Props>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>

<template>
  <label class="flex cursor-pointer items-center gap-2 py-1.5 text-sm text-ink">
    <input
      type="checkbox"
      :checked="modelValue"
      class="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <span
      v-if="swatchColor"
      class="h-4 w-4 rounded"
      :style="{ backgroundColor: swatchColor }"
    />
    <span>{{ label }}</span>
  </label>
</template>
