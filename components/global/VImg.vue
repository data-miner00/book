<template>
  <div>
    <img :src="fullpath" :alt="alt" />
    <div v-if="caption" class="text-center font-semibold text-sm my-2">
      {{ caption }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: String,
    alt: String,
    caption: String,
  },
  computed: {
    fullpath(): string {
      return require(`../../assets/images/${this.src}`)
    },
  },
})
</script>
