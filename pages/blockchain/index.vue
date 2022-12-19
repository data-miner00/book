<template>
  <Overview
    title="Blockchain"
    subtitle="A revolutionary technology that has the potential to shape the new era of the Internet"
    topic="blockchain"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: () => ({
    title: 'Blockchain | Book',
  }),
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({ displayTopic: { $eq: 'Blockchain' } })
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
