<template>
  <nuxt-link
    :to="link"
    class="
      this
      flex
      justify-between
      flex-1
      p-5
      flex-row-reverse
      border border-solid border-blue-300
      rounded
      hover:border-purple-400
      shadow-md
    "
  >
    <div class="my-auto max-w-xs">
      <div class="text-xs text-gray-400 text-right">Previous</div>
      <div class="nxtitle font-semibold text-right">
        {{ title }}
      </div>
    </div>
    <div class="pr-4 flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-left block my-auto"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default:
        'Cache database with Redis where interop is possible with Flutter',
    },
    slug: {
      type: String,
      default: '',
    },
  },
  computed: {
    link(): string {
      return this.slug || '/'
    },
  },
})
</script>

<style lang="postcss" scoped>
.this:hover .nxtitle,
.this:hover .bi {
  @apply text-purple-400;
}
</style>
