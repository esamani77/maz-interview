<script setup lang="ts">
interface Props {
  modelValue: boolean;
  label: string;
  count?: number;
}

defineProps<Props>();
const emit = defineEmits<{ "update:modelValue": [value: boolean] }>();
</script>

<template>
  <label class="flex cursor-pointer items-center justify-between py-2">
    <span class="flex min-w-0 items-center gap-3">
      <span
        class="flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors"
        :class="
          modelValue ? 'border-brand bg-brand' : 'border-gray-300 bg-white'
        "
      >
        <svg
          v-if="modelValue"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-3 w-3 text-white"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <input
        type="checkbox"
        :checked="modelValue"
        class="sr-only"
        @change="
          emit('update:modelValue', ($event.target as HTMLInputElement).checked)
        "
      >
      <span
        class="text-sm transition-colors"
        :class="modelValue ? 'text-ink' : 'text-ink-muted'"
      >
        {{ label }}
      </span>
    </span>

    <span
      v-if="count !== undefined"
      class="shrink-0 rounded-lg px-2.5 py-0.5 text-xs font-medium text-white transition-colors"
      :class="modelValue ? 'bg-brand' : 'bg-ink'"
    >
      {{ count.toLocaleString("fa-IR") }}
    </span>
  </label>
</template>
