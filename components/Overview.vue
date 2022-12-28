<template>
  <div class="flex-1 flex px-5 lg:px-20">
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
        <div
          v-if="articles.length > 0"
          class="max-w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <nuxt-link
            v-for="(a, index) in articles"
            :key="index"
            :to="{ name: `${topic}-slug`, params: { slug: a.slug } }"
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
          </nuxt-link>
        </div>
        <div v-else>
          <div>
            <img
              :src="require('../assets/svg/undraw_small_town_re_7mcn.svg')"
              alt="illustration image by undraw.co"
              title="Illustration image by undraw.co"
            />
          </div>
          <div class="font-bold text-3xl uppercase text-center">
            Nothing to show yet
          </div>
          <div class="text-gray-400 text-xl text-center">
            New posts will be added soon, stay tuned ✨
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
    topic: {
      type: String,
      required: true,
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
