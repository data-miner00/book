<template>
  <ArticleSlot :isMain="true">
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
  </ArticleSlot>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {},
  //@ts-ignore
  async asyncData({ $content, params }) {
    const articles = await $content('programming')
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>

<style lang="postcss" scoped>
.this:hover .xmtitle {
  @apply text-blue-600;
}
</style>
