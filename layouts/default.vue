<template>
  <!-- container -->
  <div
    class="relative lg:flex lg:flex-row"
    style="color: #0f1419"
    tabindex="0"
    @keydown.ctrl="navigateSearch"
  >
    <!-- left menu sidebar -->

    <div
      class="
        lg:flex lg:flex-row
        w-auto
        lg:justify-end
        fixed
        top-0
        bg-gray-100
        z-30
        lg:left-0 lg:w-1/4 lg:flex-none
      "
      :class="getSidebarState ? 'left-0' : '-left-full'"
    >
      <div class="w-72">
        <MainMenu />
      </div>
    </div>

    <MobileHeader />

    <!-- right content section -->
    <div class="mx-auto">
      <!-- content  -->
      <nuxt />
    </div>

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
        w-full
        z-40
        bg-gray-500 bg-opacity-30
        border-l border-solid border-gray-200
      "
      @click="toggleSearchPanel"
      v-show="getSearchPanelState"
    >
      <Search />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapMutations(['toggleSearchPanel', 'toggleSidebar']),
    navigateSearch(event: KeyboardEvent): void {
      if (event.key == 'k') {
        event.preventDefault()
        this.toggleSearchPanel()
      }
    },
  },
  computed: {
    ...mapGetters(['getSearchPanelState', 'getSidebarState']),
  },
})
</script>

<style lang="postcss">
.nuxt-content {
  font-family: 'Source Serif Pro', serif;
}

.nuxt-content h1,
.nuxt-content h2 {
  @apply text-2xl font-semibold  mb-4 relative cursor-pointer hover:text-gray-500;
}

.nuxt-content h3 {
  @apply text-xl font-semibold  mb-4 relative cursor-pointer hover:text-gray-500;
}

.nuxt-content h4 {
  @apply text-lg font-semibold  mb-4 relative cursor-pointer hover:text-gray-500;
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
  @apply mb-10;
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
  @apply rounded text-base;
}

.nuxt-content-highlight .filename {
  @apply absolute top-4 right-2 text-gray-400 z-10 px-1 rounded-sm text-xs;
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
  @apply border-l-2 border-solid border-purple-400 px-4 mb-10 rounded-tr-md rounded-br-md;
  @apply bg-purple-50 cursor-default py-3;
}

.nuxt-content-highlight {
  @apply max-w-full overflow-x-auto relative mb-10 text-base;
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
  @apply w-full mb-10;
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

.nuxt-content .math-inline mjx-container svg {
  display: inline;
}

.nuxt-content .math:not(.math-inline) mjx-container svg {
  /* height: 4ex; */
  display: block;
  margin: 0 auto;
}

.this {
  transition-property: left, right;
}
</style>
