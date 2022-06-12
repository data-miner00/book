<template>
  <Overview
    title="Web Development"
    subtitle="A very basic yet essential towards a flourishing internet era"
    topic="web-dev"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: () => ({
    title: 'Web Development | Book',
  }),
  //@ts-ignore
  async asyncData({ $content, params }) {
    const articles = await $content('web-dev')
      .where({ displayTopic: { $eq: 'Programming' } })
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
