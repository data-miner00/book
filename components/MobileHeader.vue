<template>
  <header
    class="
      md:hidden
      py-4
      px-4
      border-b border-solid border-gray-200
      sticky
      top-0
      left-0
      bg-white
      flex
      items-center
      z-10
    "
  >
    <button
      aria-label="Toggle navigation bar"
      aria-expanded="false"
      class="block mr-3"
      type="button"
      @click="toggleSidebar"
    >
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M4 7h22M4 15h22M4 23h22"
        ></path>
      </svg>
    </button>
    <NuxtLink to="/" title="Home" class="text-xl font-semibold block"
      >Notes</NuxtLink
    >
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapMutations(['toggleSidebar']),
  },
})
</script>
