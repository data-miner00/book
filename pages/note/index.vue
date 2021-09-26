<template>
  <ArticleSlot :isMain="true">
    <div class="max-w-full grid grid-cols-2 gap-4">
      <div
        v-for="(a, index) in articles"
        :key="index"
        class="
          this
          border border-solid border-gray-300
          p-4
          shadow-md
          hover:border-blue-600
          rounded
        "
      >
        <div class="xmtitle font-semibold">{{ a.title }}</div>
        <div class="text-sm text-gray-500">{{ a.subtitle }}</div>
      </div>
    </div>
  </ArticleSlot>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {},
  data: () => {
    return {
      articles: [
        {
          title: 'Microservice in Go and Multithreading',
          subtitle: 'A through dive into the technicals',
        },
        {
          title:
            'Microservice in Go and MultithreadingMicroservice in Go and Multithreading',
          subtitle: 'A through dive into the technicals',
        },
        {
          title: 'Microservice in Go and Multithreading',
          subtitle: 'A through dive into the technicals',
        },
        {
          title: 'Microservice in Go and Multithreading',
          subtitle: 'A through dive into the technicals',
        },
        {
          title: 'Microservice in Go and Multithreading',
          subtitle: 'A through dive into the technicals',
        },
      ],
    }
  },
})
</script>

<style lang="postcss" scoped>
.this:hover .xmtitle {
  @apply text-blue-600;
}
</style>
