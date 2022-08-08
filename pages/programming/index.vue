<template>
  <Overview
    title="Programming"
    subtitle="The only way to sparkle meaningful and invigorating communication with computers"
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
  async asyncData({ $content, params }) {
    const articles = await $content('programming')
      .where({ displayTopic: { $eq: 'Programming' } })
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
