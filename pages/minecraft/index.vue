<template>
  <Overview
    title="Minecraft"
    subtitle="A sandbox game purpotedly only for kids"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: () => ({
    title: 'Minecraft | Bookelm',
  }),
  //@ts-ignore
  async asyncData({ $content, params }) {
    const articles = await $content('minecraft')
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
