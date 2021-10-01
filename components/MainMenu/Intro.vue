<template>
  <div
    class="
      flex flex-row
      p-5
      pl-0
      w-auto
      justify-between
      border-solid border-b border-gray-200
    "
  >
    <div class="flex">
      <!-- secion 1: image -->
      <div
        class="h-12 w-12 bg-green-100 mr-4 rounded object-cover overflow-hidden"
      >
        <img :src="require('~/assets/images/aes.jpg')" alt="demo image" />
      </div>
      <!-- section 2: texts -->
      <div class="">
        <div class="text-lg font-bold">Notes</div>
        <div class="text-xs text-gray-500">My personal take to everything</div>
      </div>
    </div>

    <!-- section 3: search-icon -->
    <div class="ml-auto flex items-center">
      <div>✨</div>
    </div>
  </div>
</template>
