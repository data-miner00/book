<template>
  <nuxt-link
    :to="{ name: `${componentName}-slug`, params: { slug: slug } }"
    class="
      this
      flex
      justify-between
      flex-1
      p-5
      border border-solid border-blue-300
      rounded
      hover:border-purple-400
      shadow-md
    "
    :class="{ 'flex-row-reverse': isPrev }"
  >
    <div class="my-auto" :class="{ 'text-right': isPrev }">
      <div class="text-xs text-gray-400">
        {{ isPrev ? 'Previous' : 'Next' }}
      </div>
      <div class="nxtitle font-semibold">{{ title }}</div>
    </div>
    <div class="flex" :class="[isPrev ? 'pr-4' : 'pl-4']">
      <svg
        v-if="isPrev"
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
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-right block my-auto"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isPrev: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default:
        'Cache database with Redis where interop is possible with Flutter',
    },
    componentName: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      default: '',
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
