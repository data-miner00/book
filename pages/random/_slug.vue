<template>
  <ArticleSlot
    :title="article.title"
    :subtitle="article.subtitle"
    :quicklinks="article.toc"
    :lastUpdated="article.updatedAt"
    :prev="prev"
    :next="next"
    componentName="random"
    :author="article.author"
    :tags="article.tags"
  >
    <nuxt-content :document="article"></nuxt-content>
  </ArticleSlot>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //@ts-ignore
  async asyncData({ $content, params }) {
    const article = await $content('random', params.slug).fetch()

    const [prev, next] = await $content('random')
      .where({ displayTopic: { $eq: 'Random' } })
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
})
</script>
