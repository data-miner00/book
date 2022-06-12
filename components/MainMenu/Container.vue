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
      <MainMenuSection
        title="Web Development"
        componentName="web-dev"
        :entries="web"
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
    web: [],
  }),
  async mounted() {
    //@ts-ignore
    this.random = await this.$content('random')
      .where({ displayTopic: { $eq: 'Random' } })
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .fetch()

    //@ts-ignore
    this.minecraft = await this.$content('minecraft')
      .where({ displayTopic: { $eq: 'Minecraft' } })
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .fetch()

    //@ts-ignore
    this.programming = await this.$content('programming')
      .where({ displayTopic: { $eq: 'Programming' } })
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .fetch()

    //@ts-ignore
    this.web = await this.$content('web-dev')
      .where({ displayTopic: { $eq: 'Programming' } })
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .fetch()
  },
})
</script>
