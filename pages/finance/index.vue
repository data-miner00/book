<template>
  <Overview
    title="Finance"
    subtitle="Here contains all topics that are monetary related"
    topic="finance"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: () => ({
    title: 'Finance | Book',
  }),
  //@ts-ignore
  async asyncData({ $content, params }) {
    const articles = await $content('finance')
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
