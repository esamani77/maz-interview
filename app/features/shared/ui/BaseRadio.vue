<script setup lang="ts">
interface Props {
  modelValue: string;
  value: string;
  label: string;
  name: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const isSelected = computed(() => props.modelValue === props.value);
</script>

<template>
  <label class="flex cursor-pointer items-center gap-3 py-2">
    <span
      class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors"
      :class="isSelected ? 'border-brand' : 'border-gray-300'"
    >
      <span v-if="isSelected" class="h-2.5 w-2.5 rounded-full bg-brand" />
    </span>
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="isSelected"
      class="sr-only"
      @change="emit('update:modelValue', value)"
    >
    <span
      class="text-sm transition-colors"
      :class="isSelected ? 'text-ink' : 'text-ink-muted'"
    >
      {{ label }}
    </span>
  </label>
</template>
