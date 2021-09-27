<template>
  <div class="flex flex-row" style="color: #0f1419">
    <div class="w-1/4 flex-none bg-gray-100">
      <div class="flex flex-row w-auto justify-end sticky top-0">
        <div class="w-3/5"><MainMenu /></div>
      </div>
    </div>
    <div class="flex-1"><nuxt /></div>
  </div>
</template>

<style lang="postcss">
.nuxt-content h1 {
  @apply text-2xl font-semibold mt-10 mb-4 relative cursor-pointer hover:text-gray-500;
}

.nuxt-content h2 {
  @apply text-xl font-semibold mt-5 mb-4 relative cursor-pointer hover:text-gray-500;
}

.nuxt-content h3 {
  @apply text-lg font-semibold mt-4 mb-4 relative cursor-pointer hover:text-gray-500;
}

.nuxt-content h1:hover a,
.nuxt-content h2:hover a,
.nuxt-content h3:hover a {
  @apply block;
}

.nuxt-content h1 a,
.nuxt-content h2 a,
.nuxt-content h3 a {
  @apply absolute -left-5 top-0 hidden;
}

.nuxt-content p,
.nuxt-content > ul,
.nuxt-content > ol {
  @apply my-4;
}

.icon.icon-link {
  background-image: url('~assets/svg/hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.nuxt-content code:not(.nuxt-content pre code) {
  @apply font-mono;
  @apply bg-gray-100;
  @apply px-2;
  @apply py-1;
  @apply rounded;
}

.nuxt-content a {
  @apply text-blue-600;
  @apply hover:underline;
}

.nuxt-content blockquote {
  @apply border-l-8 border-solid border-purple-400 pl-4;
  @apply hover:bg-gray-50 cursor-default py-3;
}

.nuxt-content-highlight {
  @apply max-w-full overflow-x-auto;
}

.nuxt-content-highlight pre {
  @apply rounded-md;
}

.nuxt-content blockquote p {
  @apply my-0;
}

.nuxt-content ul {
  @apply list-disc list-inside pl-6;
}
</style>
