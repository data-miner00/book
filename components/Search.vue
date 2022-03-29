<template>
  <div
    class="max-h-screen h-full overflow-auto p-5 w-1/5 ml-auto bg-gray-100"
    @click.stop
  >
    <div class="rounded overflow-hidden">
      <input
        type="search"
        class="px-3 py-2 w-full focus:outline-white"
        v-model="searchQuery"
        placeholder="Search by title or keyword"
        ref="searchInput"
      />
    </div>
    <div class="py-4">
      <div
        class="py-6 text-center text-gray-400 bg-white rounded"
        v-if="!articles.length"
      >
        <span>No results found</span>
      </div>
      <div v-else class="overflow-auto">
        <nuxt-link
          :to="{
            name: `${article.displayTopic.toLowerCase()}-slug`,
            params: { slug: article.slug },
          }"
          v-for="article in articles"
          :key="article.slug"
          class="
            outline-none
            item
            p-5
            bg-white
            rounded
            hover:border-blue-300
            border border-transparent border-solid
            my-2
            block
            focus:border-blue-500 focus:bg-blue-50 focus:text-blue-500
          "
          @click.native="
            toggleSearchPanel()
            clearQuery()
          "
        >
          <div class="text-xl font-bold">
            {{ article.title }}
          </div>
          <div class="text-gray-300">
            {{ article.subtitle }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'

export default Vue.extend({
  data: () => ({
    searchQuery: '',
    articles: [],
  }),
  methods: {
    ...mapMutations(['toggleSearchPanel']),
    clearQuery(): void {
      this.searchQuery = ''
    },
  },
  watch: {
    async searchQuery(searchQuery: string) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      //@ts-ignore
      this.articles = await this.$content('/', { deep: true })
        .search(searchQuery)
        .only(['title', 'subtitle', 'slug', 'displayTopic'])
        .fetch()
    },
    getSearchPanelState(newState: boolean) {
      if (process.browser && this.$refs.searchInput && newState) {
        ;(this.$refs.searchInput as HTMLInputElement).focus()
      }
    },
  },
  computed: {
    ...mapGetters(['getSearchPanelState']),
  },
})
</script>

<style lang="postcss" scoped>
.item:hover div:first-of-type {
  @apply text-blue-300;
}
</style>
