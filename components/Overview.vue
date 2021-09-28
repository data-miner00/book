<template>
  <div class="flex-1 flex px-20">
    <div class="max-w-screen-md flex-1">
      <div class="py-12 border-b-2 border-gray-200 border-solid mb-12">
        <!-- title  -->
        <div class="text-4xl font-semibold">{{ title }}</div>

        <!-- subtitle -->
        <div class="text-xl mt-2 text-gray-500">
          {{ subtitle }}
        </div>
      </div>

      <div style="color: rgb(59, 69, 78)" class="leading-7 font-medium">
        <div class="max-w-full grid grid-cols-2 gap-4">
          <div
            v-for="(a, index) in articles"
            :key="index"
            class="
              this
              border border-solid border-gray-300
              p-4
              shadow-md
              hover:border-blue-600
              rounded
            "
          >
            <div class="xmtitle font-semibold">{{ a.title }}</div>
            <div class="text-sm text-gray-500">{{ a.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: 'Programming',
    },
    subtitle: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
    articles: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="postcss" scoped>
.this:hover .xmtitle {
  @apply text-blue-600;
}
</style>
