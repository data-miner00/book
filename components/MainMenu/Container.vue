<template>
  <div class="flex-1 overflow-auto">
    <div class="h-screen mt-8">
      <MainMenuSection title="Introduction" componentName="index" />
      <MainMenuSection
        title="Random"
        componentName="random"
        :entries="random"
      />
      <MainMenuSection
        title="Minecraft"
        componentName="minecraft"
        :entries="minecraft"
      />
      <MainMenuSection
        title="Programming"
        componentName="programming"
        :entries="programming"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    random: [],
    minecraft: [],
    programming: [],
  }),
  async mounted() {
    //@ts-ignore
    this.random = await this.$content('articles')
      .where({ displayTopic: { $eq: 'Random' } })
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    //@ts-ignore
    this.minecraft = await this.$content('articles')
      .where({ displayTopic: { $eq: 'Minecraft' } })
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    //@ts-ignore
    this.programming = await this.$content('articles')
      .where({ displayTopic: { $eq: 'Programming' } })
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
  },
})
</script>
