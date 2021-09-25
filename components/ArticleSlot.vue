<template>
  <div class="flex">
    <div class="px-20">
      <div class="max-w-screen-md pb-12">
        <div class="py-12 border-b-2 border-gray-200 border-solid mb-12">
          <!-- title  -->
          <div class="text-4xl font-semibold">{{ title }}</div>

          <!-- subtitle -->
          <div class="text-xl mt-2 text-gray-500">
            {{ subtitle }}
          </div>
        </div>

        <!-- article will be injected inside here  -->
        <article style="color: rgb(59, 69, 78)" class="leading-7 font-medium">
          <slot />
        </article>

        <!-- article footer -->
        <footer class="mt-12">
          <div class="flex gap-1">
            <Previous />
            <Next />
          </div>
          <div
            class="
              mt-12
              pt-12
              border-solid border-gray-200 border-t
              flex
              align-middle
            "
          >
            <div class="w-7 h-7 bg-pink-400 rounded-full mr-4"></div>
            <div class="text-gray-400 text-xs pt-1">
              Last updated 1 years ago
            </div>
          </div>
        </footer>
      </div>
    </div>
    <div class="flex justify-start" style="width: 448px">
      <div class="px-5 w-1/2 relative">
        <Quicklinks :quicklinks="quicklinks" />
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
      default: 'Ode to monads and functors',
    },
    quicklinks: {
      type: Array,
    },
    lastUpdated: {
      type: Date,
    },
    authorName: {
      type: String,
    },
    authorImg: {
      type: String,
    },
  },
  methods: {
    formatDate(date: Date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      //@ts-ignore
      return new Date(date).toLocaleDateString('en', options)
    },
  },
})
</script>