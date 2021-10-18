<template>
  <ArticleSlot
    :title="article.title"
    :subtitle="article.subtitle"
    :quicklinks="article.toc"
    :lastUpdated="article.updatedAt"
    :prev="prev"
    :next="next"
    componentName="finance"
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
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .where({ displayTopic: { $eq: 'Finance' } })
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
})
</script>
