<template>
  <div class="flex-1 overflow-auto">
    <div class="min-h-screen mt-8 pb-5">
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
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    random: [] as Array<IContentDocument>,
    minecraft: [] as Array<IContentDocument>,
    programming: [] as Array<IContentDocument>,
    web: [] as Array<IContentDocument>,
  }),
  async mounted() {
    this.random = (await this.$content('random')
      .where({ displayTopic: { $eq: 'Random' } })
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .fetch()) as Array<IContentDocument>

    this.minecraft = (await this.$content('minecraft')
      .where({ displayTopic: { $eq: 'Minecraft' } })
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .fetch()) as Array<IContentDocument>

    this.programming = (await this.$content('programming')
      .where({ displayTopic: { $eq: 'Programming' } })
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .fetch()) as Array<IContentDocument>

    this.web = (await this.$content('web-dev')
      .where({ displayTopic: { $eq: 'Programming' } })
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .fetch()) as Array<IContentDocument>
  },
})
</script>
