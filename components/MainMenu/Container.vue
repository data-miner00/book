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
  async fetch() {
    //@ts-ignore
    this.random = await this.$axios.$get(
      '_content/articles?displayTopic=Random&only=title&only=slug'
    )
    this.minecraft = await this.$axios.$get(
      '_content/articles?displayTopic=Minecraft&only=title&only=slug'
    )
    this.programming = await this.$axios.$get(
      '_content/articles?displayTopic=Programming&only=title&only=slug'
    )
  },
})
</script>
