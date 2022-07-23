<template>
  <div class="flex">
    <div class="px-10 md:px-20">
      <div class="max-w-2xl 3xl:max-w-screen-md pb-12">
        <div class="py-12 border-b-2 border-gray-200 border-solid mb-12">
          <!-- title  -->
          <div class="text-4xl font-semibold">{{ title }}</div>

          <!-- subtitle -->
          <div class="text-xl mt-2 text-gray-500">
            {{ subtitle }}
          </div>
        </div>

        <!-- article will be injected inside here  -->
        <article style="color: rgb(59, 69, 78)" class="leading-7">
          <slot />
        </article>

        <!-- article footer -->
        <footer class="mt-12">
          <div class="flex gap-1 flex-col md:flex-row">
            <Next
              :isPrev="true"
              v-if="prev"
              :componentName="componentName"
              :title="prev.title"
              :slug="prev.slug"
            />
            <Next
              v-if="next"
              :componentName="componentName"
              :title="next.title"
              :slug="next.slug"
            />
          </div>
          <div
            class="
              mt-12
              pt-12
              border-solid border-gray-200 border-t
              flex
              align-middle
            "
          >
            <div class="w-7 h-7 bg-gray-400 rounded-full mr-4 overflow-hidden">
              <img
                v-if="!!author.avatar && !!author.name"
                :src="require(`../assets/images/${author.avatar}`)"
                :alt="author.name"
                class="w-7"
              />
            </div>
            <div class="text-gray-400 text-xs pt-1">
              Last updated on {{ lastUpdated | formatDate }} by
              {{ author.name }}
            </div>
          </div>
        </footer>
      </div>
    </div>
    <div class="menu-wrapper relative hidden md:flex md:justify-start">
      <div class="fixed top-0 w-72 hidden md:block">
        <Quicklinks :quicklinks="quicklinks" />
        <Tags :tags="tags" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: 'Title for this section is not specified',
    },
    subtitle: {
      type: String,
      default: 'Although important, the subtitle is not specified',
    },
    componentName: {
      type: String,
      required: true,
    },
    quicklinks: {
      type: Array,
    },
    lastUpdated: {
      type: String,
      default: '2020-06-22T10:59:27.863Z',
    },
    author: {
      type: Object,
      default: () => null,
    },
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  filters: {
    formatDate(date: string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      //@ts-ignore
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
})
</script>

<style lang="postcss" scoped>
.menu-wrapper {
  width: 300px;
}

@media screen and (min-width: 1600px) {
  .menu-wrapper {
    width: 448px;
  }
}
</style>
