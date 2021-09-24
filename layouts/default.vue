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
.code {
  @apply font-mono;
  @apply bg-gray-100;
  @apply px-2;
  @apply py-1;
  @apply rounded;
}
</style>
