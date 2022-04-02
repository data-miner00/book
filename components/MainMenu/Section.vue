<template>
  <div>
    <nuxt-link
      :to="{ name: componentName }"
      class="
        main
        px-4
        h-10
        text-gray-700
        hover:bg-opacity-10
        font-semibold
        relative
        flex
        hover:bg-blue-100 hover:text-blue-600
        w-full
        justify-between
        items-center
      "
    >
      <span>{{ title }}</span>

      <button
        v-if="entries.length > 0"
        class="absolute top-0 right-4 transition-transform duration-200 p-3"
        @click.prevent.stop="toggleExpansion"
        :class="{ 'transform rotate-90': isExpanded }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right block"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </nuxt-link>
    <div class="pl-4" v-if="isExpanded">
      <div class="border-l border-gray-200 border-solid">
        <nuxt-link
          v-for="(entry, i) in entries"
          :key="i"
          :to="{ name: fullComponentName, params: { slug: entry.slug } }"
          class="
            font-semibold
            py-3
            px-5
            text-gray-400 text-sm
            block
            hover:bg-gray-200
          "
          active-class="active"
        >
          {{ entry.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    category: String,
    title: String,
    componentName: String,
    entries: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    isExpanded: false,
  }),
  methods: {
    toggleExpansion() {
      this.isExpanded = !this.isExpanded
    },
  },
  computed: {
    fullComponentName(): string {
      return `${this.componentName}-slug`
    },
    // Not used
    thisSection(): boolean {
      return this.$route.name == this.fullComponentName
    },
  },
})
</script>

<style lang="postcss" scoped>
.bi {
  @apply hover:text-purple-500;
}

.active {
  @apply bg-white hover:bg-white bg-opacity-70 text-purple-600;
}

.main.nuxt-link-exact-active {
  @apply bg-blue-100 text-blue-600;
}
</style>
