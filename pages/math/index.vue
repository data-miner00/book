<template>
  <Overview
    title="Math"
    subtitle="A section dedicated to house the knowledge and wanders of Mathematics"
    topic="math"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: () => ({
    title: 'Math | Book',
  }),
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({ displayTopic: { $eq: 'Math' } })
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
