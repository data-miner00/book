<template>
  <ArticleSlot>
    <nuxt-content :document="note"></nuxt-content>
  </ArticleSlot>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //@ts-ignore
  async asyncData({ $content, params }) {
    const note = await $content('notes', params.slug).fetch()

    return { note }
  },
})
</script>

<style lang="postcss">
.nuxt-content h1 {
  @apply text-2xl font-semibold mt-10 mb-4 relative;
}

.nuxt-content h2 {
  @apply text-xl font-semibold mt-5 mb-4 relative;
}

.nuxt-content h3 {
  @apply text-lg font-semibold mt-4 mb-4 relative;
}

.nuxt-content h1 a,
.nuxt-content h2 a,
.nuxt-content h3 a {
  @apply absolute -left-5 top-0;
}

.nuxt-content p {
  @apply mb-4;
}

.icon.icon-link {
  background-image: url('~assets/svg/hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.nuxt-content code:not(.nuxt-content pre code) {
  @apply font-mono;
  @apply bg-gray-100;
  @apply px-2;
  @apply py-1;
  @apply rounded;
}

.nuxt-content a {
  @apply text-blue-600;
  @apply hover:underline;
}

.nuxt-content blockquote {
  @apply border-l-8 border-solid border-purple-700 pl-4;
}

.nuxt-content ul {
  @apply list-disc list-inside pl-6;
}

/* .nuxt-content ol {
  @apply 
} */
</style>
