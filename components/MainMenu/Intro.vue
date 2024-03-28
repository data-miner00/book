<template>
  <div
    class="
      flex flex-row
      px-5
      py-3
      xl:py-5 xl:px-0
      w-auto
      justify-between
      border-solid border-b border-gray-200
      items-center
    "
  >
    <div class="flex flex-1">
      <!-- section 1: image -->
      <div
        class="
          hidden
          md:block
          h-12
          w-12
          bg-green-100
          rounded
          object-cover
          overflow-hidden
          mr-4
        "
      >
        <img
          :src="require('~/assets/images/icon-img.jpeg')"
          alt="site icon image"
        />
      </div>

      <button
        aria-label="Toggle navigation bar"
        aria-expanded="false"
        class="block mr-3 md:hidden"
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

      <!-- section 2: texts -->
      <div>
        <div class="text-lg font-bold">Notes</div>
        <div class="hidden md:block text-xs text-gray-500">
          My personal take to everything
        </div>
      </div>
    </div>

    <!-- section 3: search-icon -->
    <button
      class="
        mr-1
        flex
        items-center
        text-gray-500
        p-3
        rounded-full
        hover:bg-gray-200
      "
      title="Search"
      @click="toggleSearchPanel"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapMutations(['toggleSearchPanel', 'toggleSidebar']),
  },
})
</script>
