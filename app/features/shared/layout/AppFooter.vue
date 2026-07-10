<script setup lang="ts">
import IconTelegram from "~/features/shared/icons/socails/IconTelegram.vue";
import IconInstagram from "~/features/shared/icons/socails/IconInstagram.vue";
import IconLinkedin from "~/features/shared/icons/socails/IconLinkedin.vue";
import IconTwitter from "~/features/shared/icons/socails/IconTwitter.vue";
import IconYoutube from "~/features/shared/icons/socails/IconYoutube.vue";

const socialLinks = [
  { label: "تلگرام", href: "https://t.me/", icon: IconTelegram },
  { label: "اینستاگرام", href: "https://instagram.com/", icon: IconInstagram },
  { label: "لینکدین", href: "https://linkedin.com/", icon: IconLinkedin },
];
const bottomSocialLinks = [
  { label: "تلگرام", href: "https://t.me/", icon: IconTelegram },
  {
    label: "اینستاگرام",
    href: "https://instagram.com/",
    icon: IconInstagram,
  },
  { label: "توییتر", href: "https://twitter.com/", icon: IconTwitter },
  { label: "یوتیوب", href: "https://youtube.com/", icon: IconYoutube },
  { label: "لینکدین", href: "https://linkedin.com/", icon: IconLinkedin },
];
const siteGuide = [
  { label: "قوانین و مقررات", to: "/" },
  { label: "دریافت مشاوره", to: "/" },
  { label: "انتقادات و پیشنهادات", to: "/" },
];
const quickAccess = [
  { label: "درباره ما", to: "/" },
  { label: "بلاگ", to: "/" },
  { label: "تماس با ما", to: "/" },
  { label: "خدمات پس از فروش", to: "/" },
];
</script>

<template>
  <footer class="border-t border-gray-100 bg-white">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-4 sm:px-6 lg:px-8"
    >
      <p
        class="mt-6 text-body-3 text-ink-muted col-span-full lg:col-span-1 lg:place-self-end"
      >
        هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
      </p>
      <div>
        <h3 class="mb-4 font-semibold text-ink">دسترسی سریع</h3>
        <ul class="space-y-3">
          <li v-for="item in quickAccess" :key="item.label">
            <NuxtLink
              :to="item.to"
              class="text-body-3 text-gray-800 transition-colors hover:text-brand"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 font-semibold text-ink">راهنمای سایت</h3>
        <ul class="space-y-3">
          <li v-for="item in siteGuide" :key="item.label">
            <NuxtLink
              :to="item.to"
              class="text-body-3 text-gray-800 transition-colors hover:text-brand"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 font-semibold text-ink">شبکه‌های اجتماعی</h3>
        <ul class="space-y-3">
          <li v-for="item in socialLinks" :key="item.label">
            <a
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-body-2 text-gray-800 transition-colors hover:text-brand"
            >
              <span
                class="flex h-6 w-6 items-center justify-center rounded-full text-gray-500 transition-colors hover:text-gray-500"
              >
                <component :is="item.icon" />
              </span>
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="border-t border-gray-100 px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="lg:w-1/3"/>
      <div class="lg:w-1/3">
        <p
          class="mx-auto max-w-xs text-center text-xs leading-6 text-ink-muted"
        >
          تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی
          برداری پیگرد قانونی دارد.
        </p>

        <ul class="mt-6 flex items-center justify-center gap-3">
          <li v-for="item in bottomSocialLinks" :key="item.label">
            <a
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="item.label"
              class="flex h-6 w-6 items-center justify-center rounded-full text-brand transition-colors hover:text-brand-dark"
            >
              <component :is="item.icon" class="" />
            </a>
          </li>
        </ul>
      </div>

      <div class="mt-6 flex items-center justify-center gap-3 lg:w-1/3">
        <NuxtImg
          src="/images/enamd-placeholder.png"
          alt="نماد اعتماد الکترونیکی"
          width="64"
          height="64"
          loading="lazy"
          class="h-16 w-16 rounded-md border border-gray-100 bg-white object-contain p-1"
        />
        <NuxtImg
          src="/images/tegarat-placeholder.png"
          alt="نماد ساماندهی"
          width="64"
          height="64"
          loading="lazy"
          class="h-16 w-16 rounded-md border border-gray-100 bg-white object-contain p-1"
        />
      </div>
    </div>
  </footer>
</template>
