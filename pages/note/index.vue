<template>
  <Overview
    title="Notes"
    subtitle="Notes or articles of any kind"
    topic="note"
    :articles="articles"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: () => ({
    title: 'Notes | Bookelm',
  }),
  //@ts-ignore
  async asyncData({ $content, params }) {
    const articles = await $content('notes')
      .only(['title', 'subtitle', 'slug'])
      .fetch()

    return {
      articles,
    }
  },
})
</script>
