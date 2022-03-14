<template>
  <div class="mt-5 bg-gray-50 rounded-lg p-3 shadow">
    <div class="text-xs text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        class="inline"
      >
        <path
          d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"
        />
        <path
          d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"
        /></svg
      ><span class="ml-1">Tags</span>
    </div>
    <div class="flex mt-3 gap-1 flex-wrap">
      <div
        class="px-2 py-1 bg-gray-600 text-white font-bold text-xs"
        v-for="tag in tags"
        :key="tag"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
