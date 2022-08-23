<template>
  <div class="my-4" :class="{ 'border border-black': border }">
    <img
      :src="fullpath"
      :alt="alt"
      :class="{ 'block mx-auto': !!maxWidth }"
      :style="!!this.maxWidth ? `max-width: ${this.maxWidth}` : ''"
    />
    <div
      v-if="caption"
      class="text-center font-semibold text-sm my-2 text-gray-500"
    >
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
    maxWidth: String,
    border: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fullpath(): string {
      return require(`../../assets/images/${this.src}`)
    },
  },
})
</script>
