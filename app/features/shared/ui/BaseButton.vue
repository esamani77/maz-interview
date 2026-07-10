<script setup lang="ts">
interface Props {
  variant?: "solid" | "outline";
  as?: "button" | "NuxtLink";
  to?: string;
  type?: "button" | "submit";
}

withDefaults(defineProps<Props>(), {
  variant: "solid",
  as: "button",
  to: undefined,
  type: "button",
});

const baseClasses =
  "inline-flex items-center justify-center gap-1.5 rounded-2xl px-5 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses = {
  solid: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-brand text-brand hover:bg-brand-light",
};
</script>

<template>
  <NuxtLink
    v-if="as === 'NuxtLink'"
    :to="to"
    :class="[baseClasses, variantClasses[variant]]"
  >
    <slot />
  </NuxtLink>
  <button v-else :type="type" :class="[baseClasses, variantClasses[variant]]">
    <slot />
  </button>
</template>
