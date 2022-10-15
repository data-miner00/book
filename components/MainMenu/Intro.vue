<template>
  <div
    class="
      flex flex-row
      p-3
      xl:p-5 xl:pl-0
      w-auto
      justify-between
      border-solid border-b border-gray-200
    "
  >
    <div class="flex">
      <!-- secion 1: image -->
      <div
        class="h-12 w-12 bg-green-100 mr-4 rounded object-cover overflow-hidden"
      >
        <img :src="require('~/assets/images/aes.jpg')" alt="demo image" />
      </div>
      <!-- section 2: texts -->
      <div class="w-3/5 xl:w-4/5">
        <div class="text-lg font-bold">Notes</div>
        <div class="text-xs text-gray-500">My personal take to everything</div>
      </div>
    </div>

    <!-- section 3: search-icon -->
    <button class="ml-auto flex items-center text-gray-500" title="Search">
      <div class="search-wrapper" @click="toggleSearchPanel">
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
    ...mapMutations(['toggleSearchPanel']),
  },
})
</script>

<style lang="sass" scoped>
.search-wrapper
  position: relative
  cursor: pointer
  &:hover::after
    content: ''
    position: absolute
    top: -10px
    left: -10px
    right: -10px
    bottom: -10px
    border-radius: 999px
    background: #e5e5e5
    z-index: -1
</style>
