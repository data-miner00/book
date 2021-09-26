<template>
  <div>
    <img :src="fullpath" :alt="alt" />
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
