<template>
  <div class="flex-1 overflow-auto px-5 lg:px-0">
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
      <MainMenuSection
        title="Blockchain"
        componentName="blockchain"
        :entries="blockchain"
      />
      <MainMenuSection
        title="Debug Logs"
        componentName="debug-logs"
        :entries="debug"
      />
      <MainMenuSection title="Math" componentName="math" :entries="math" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  data: () => ({
    random: [] as Array<IContentDocument>,
    minecraft: [] as Array<IContentDocument>,
    programming: [] as Array<IContentDocument>,
    web: [] as Array<IContentDocument>,
    blockchain: [] as Array<IContentDocument>,
    debug: [] as Array<IContentDocument>,
    math: [] as Array<IContentDocument>,
  }),
  async mounted() {
    this.random = await this.query('articles', 'Random')
    this.minecraft = await this.query('articles', 'Minecraft')
    this.programming = await this.query('articles', 'Programming')
    this.web = await this.query('articles', 'Web Development')
    this.blockchain = await this.query('articles', 'Blockchain')
    this.debug = await this.query('articles', 'Debug Logs')
    this.math = await this.query('articles', 'Math')
  },
  methods: {
    query(
      folder: string,
      displayTopic: string
    ): Promise<Array<IContentDocument>> {
      return this.$content(folder)
        .where({ displayTopic: { $eq: displayTopic } })
        .only(['title', 'slug'])
        .sortBy('title', 'asc')
        .fetch() as Promise<Array<IContentDocument>>
    },
  },
})
</script>
