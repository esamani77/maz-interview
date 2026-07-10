<script setup lang="ts">
interface Props {
  modelValue: string
  value: string
  label: string
  name: string
}

defineProps<Props>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <label class="flex cursor-pointer items-center gap-2 py-1.5 text-sm text-ink">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      class="h-4 w-4 border-gray-300 text-brand focus:ring-brand"
      @change="emit('update:modelValue', value)"
    >
    <span>{{ label }}</span>
  </label>
</template>
