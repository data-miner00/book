<template>
  <Overview
    title="Minecraft"
    subtitle="A sandbox game purpotedly only for kids"
    topic="minecraft"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: () => ({
    title: 'Minecraft | Book',
  }),
  //@ts-ignore
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({ displayTopic: { $eq: 'Minecraft' } })
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
