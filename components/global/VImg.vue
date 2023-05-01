<template>
  <figure class="my-4 block">
    <picture>
      <source :srcset="fullpath" media="(min-width: 480px)" />
      <img
        :src="fullpath"
        :alt="alt"
        :class="{
          'block mx-auto': !!maxWidth || center,
          'border border-black': border,
        }"
        :style="!!maxWidth ? `max-width: ${maxWidth}` : ''"
      />
    </picture>
    <figcaption
      v-if="caption"
      class="text-center text-sm mt-3 max-w-3xl mx-auto break-words"
      style="color: rgb(117, 117, 117)"
    >
      {{ caption }}
    </figcaption>
  </figure>
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
    center: {
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
