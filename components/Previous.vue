<template>
  <div
    class="
      flex
      justify-between
      flex-1
      p-5
      flex-row-reverse
      border border-solid border-blue-300
      rounded
    "
  >
    <div class="my-auto max-w-xs">
      <div class="text-xs text-gray-400 text-right">Previous</div>
      <div class="font-semibold text-right">
        Cache database with Redis where interop is possible with Flutter
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    link: String,
  },
})
</script>
