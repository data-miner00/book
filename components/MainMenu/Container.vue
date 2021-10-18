<template>
  <div class="flex-1 overflow-auto">
    <div class="h-screen mt-8">
      <MainMenuSection title="Introduction" componentName="index" />
      <MainMenuSection
        title="Finance"
        componentName="finance"
        :entries="finance"
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
    finance: [],
    minecraft: [],
    programming: [],
  }),
  async fetch() {
    //@ts-ignore
    this.finance = await this.$axios.$get(
      '_content/articles?displayTopic=Finance&only=title&only=slug'
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
