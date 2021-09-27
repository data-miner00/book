<template>
  <ArticleSlot
    title="Minecraft"
    subtitle="A source of information for this block sandbox game"
    :quicklinks="note.toc"
    :lastUpdated="note.updatedAt"
    :prev="prev"
    :next="next"
  >
    <nuxt-content :document="note"></nuxt-content>
  </ArticleSlot>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //@ts-ignore
  async asyncData({ $content, params }) {
    const note = await $content('minecraft', params.slug).fetch()

    const [prev, next] = await $content('minecraft')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { note, prev, next }
  },
})
</script>
