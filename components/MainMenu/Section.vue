<template>
  <div>
    <div
      class="
        px-3
        text-gray-700
        hover:bg-opacity-10
        cursor-pointer
        font-semibold
        border border-indigo-200 border-solid border-r-0
        flex
        justify-between
        items-center
      "
    >
      <nuxt-link to="" class="flex-1 py-2">Introduction</nuxt-link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right block"
        viewBox="0 0 16 16"
        @click="toggleExpansion"
        v-if="!isExpanded"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-down block"
        viewBox="0 0 16 16"
        @click="toggleExpansion"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div class="pl-8" v-if="isExpanded">
      <div class="border-l border-gray-200 border-solid">
        <nuxt-link
          v-for="(note, i) in notes"
          :key="i"
          :to="note.link"
          class="
            font-semibold
            py-3
            px-5
            text-gray-400 text-sm
            block
            hover:bg-gray-200
          "
          :class="{
            'bg-white hover:bg-white bg-opacity-70 text-purple-600': note.link,
          }"
        >
          {{ note.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    topic: Object,
    linkItems: Array,
  },
  data: () => ({
    isExpanded: false,
    notes: [
      {
        title: 'Cheatsheet: Option(in Rust) vs Maybe (in Haskell)',
        link: 'he',
      },
      {
        title:
          'The commands used in Windows and Unix systems lets make this a little longer',
        link: '',
      },
    ],
  }),
  methods: {
    toggleExpansion() {
      this.isExpanded = !this.isExpanded
    },
  },
})
</script>

<style lang="postcss" scoped>
.bi {
  @apply hover:text-purple-500;
}
</style>
