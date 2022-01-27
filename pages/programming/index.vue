<template>
  <Overview
    title="Programming"
    subtitle="The only way to future technological advancement"
    topic="programming"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: () => ({
    title: 'Programming | Book',
  }),
  //@ts-ignore
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({ displayTopic: { $eq: 'Programming' } })
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
