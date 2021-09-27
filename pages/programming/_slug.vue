<template>
  <ArticleSlot
    title="Programming"
    subtitle="A very cool subtitle isn't it hehe"
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
    const note = await $content('programming', params.slug).fetch()

    const [prev, next] = await $content('programming')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { note, prev, next }
  },
})
</script>
