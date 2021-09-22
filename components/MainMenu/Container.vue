<template>
  <div class="flex-1 overflow-auto">
    <div class="h-screen mt-8">
      <MainMenuSection />
      <MainMenuSection />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toggleSubtopic(evt: Event): void {
      //
    },
  },
})
</script>
