<template>
  <nav class="mt-12 w-full">
    <div
      class="
        px-8
        py-2
        text-xs text-gray-600
        leading-5
        border-l border-solid border-gray-200
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-box-seam inline"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
        />
      </svg>
      <span class="ml-1">Quicklinks</span>
    </div>
    <div>
      <nuxt-link
        class="
          text-sm text-gray-500
          font-semibold
          px-8
          py-1
          border-solid border-gray-200
          box-border
          hover:text-purple-600
          flex
          items-center
        "
        v-for="link in quicklinks"
        :class="[false ? 'border-purple-400 border-l-4' : 'border-l']"
        :key="link.id"
        :to="`#${link.id}`"
      >
        <span
          class="pl-3"
          :class="[
            { 'text-purple-600 font-bold': false },
            { 'ml-2': link.depth === 3 },
          ]"
          >{{ link.text }}</span
        >
      </nuxt-link>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    quicklinks: Array,
  },
})
</script>
