<template>
  <!-- container -->
  <div class="relative lg:flex lg:flex-row" style="color: #0f1419">
    <!-- left menu sidebar -->
    <div
      class="
        absolute
        -left-full
        bg-gray-100
        lg:relative lg:left-0 lg:w-1/4 lg:flex-none
      "
    >
      <div class="lg:flex lg:flex-row w-auto lg:justify-end sticky top-0">
        <div class="w-full lg:w-60 xl:w-72">
          <MainMenu />
        </div>
      </div>
    </div>

    <!-- right content section -->
    <div class="flex-1 flex">
      <!-- content  -->
      <nuxt />

      <!-- search section, hidden by default -->
      <div
        class="
          this
          duration-500
          ease-in-out
          fixed
          top-0
          h-full
          right-0
          w-1/5
          bg-gray-100
          border-l border-solid border-gray-200
        "
        :class="[getSearchPanelState ? 'right-0' : '-right-full']"
      >
        <Search />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters(['getSearchPanelState']),
  },
})
</script>

<style lang="postcss">
.nuxt-content h1,
.nuxt-content h2 {
  @apply text-2xl font-semibold mt-10 mb-4 relative cursor-pointer hover:text-gray-500;
}

.nuxt-content h3 {
  @apply text-xl font-semibold mt-5 mb-4 relative cursor-pointer hover:text-gray-500;
}

.nuxt-content h4 {
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

.nuxt-content code {
  @apply font-mono;
  @apply bg-gray-100;
  @apply px-2;
  @apply py-1;
  @apply rounded;
}

.nuxt-content-highlight pre code {
  @apply bg-transparent;
  @apply px-0;
}

.nuxt-content a {
  @apply text-blue-600;
  @apply hover:underline;
}

.nuxt-content blockquote {
  @apply border-l-8 border-solid border-purple-400 pl-4 my-10;
  @apply bg-purple-50 hover:bg-purple-100 cursor-default py-3;
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

.nuxt-content ol {
  @apply list-decimal list-inside pl-6;
}

.nuxt-content table {
  @apply w-full;
}

.nuxt-content thead {
  @apply text-left border-b-2 border-gray-100 text-gray-400;
}

.nuxt-content th,
.nuxt-content td {
  /* @apply p-1\.5; */
  padding: 0.375rem;
}

.nuxt-content tbody tr {
  @apply border-b border-solid border-gray-100;
}

.this {
  transition-property: left, right;
}
</style>
