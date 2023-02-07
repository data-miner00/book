<template>
  <Overview
    title="Debug Logs"
    subtitle="A blog that I used for recording down bugs I faced during development and hope to help others that face the same issue"
    topic="debug-logs"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: () => ({
    title: 'Debug Logs | Book',
  }),
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({ displayTopic: { $eq: 'Debug Logs' } })
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
