<template>
  <ArticleSlot
    :title="note.title"
    :subtitle="note.subtitle"
    :quicklinks="note.toc"
    :lastUpdated="note.updatedAt"
    :prev="prev"
    :next="next"
    componentName="notes"
  >
    <nuxt-content :document="note"></nuxt-content>
  </ArticleSlot>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //@ts-ignore
  async asyncData({ $content, params }) {
    const note = await $content('notes', params.slug).fetch()

    const [prev, next] = await $content('notes')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { note, prev, next }
  },
})
</script>
