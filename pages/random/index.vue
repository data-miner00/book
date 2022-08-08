<template>
  <Overview
    title="Random"
    subtitle="Here contains all topics that are totally unrelated"
    topic="random"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: () => ({
    title: 'Random | Book',
  }),
  async asyncData({ $content, params }) {
    const articles = await $content('random')
      .where({ displayTopic: { $eq: 'Random' } })
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
