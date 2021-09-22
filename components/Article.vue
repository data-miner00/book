<template>
  <div class="max-w-screen-md">
    <div class="py-12 border-b-2 border-gray-600 border-solid mb-12">
      <!-- title  -->
      <div class="text-4xl font-semibold">Programming</div>

      <!-- subtitle -->
      <div class="text-xl mt-2 text-gray-500">
        The optional subtitle for a page
      </div>
    </div>

    <!-- actual content -->
    <div style="color: rgb(59, 69, 78)" class="leading-7 font-medium">
      <p class="mb-6">
        This is meant to be for people coming from Haskell to Rust or vice versa
        who want to quickly find the name of corresponding function on optional
        values. For example, I keep forgetting the names of Rust combinators.
        Which one I have to use in a particular situation? Is it or_else,
        <span class="code">unwrap_or</span> orunwrap_or_else? I can imagine that
        other people may experience similar problems, hence the cheatsheet. You
        can find examples and more detailed description in the official
        documentation by clicking on function names.
      </p>

      <p>
        <span class="font-bold">Update 1:</span> as /u/jkachmar points out on
        Reddit that there is a note function in some of alternative Preludes in
        Haskell (or in errors package), which is an analog of ok_or in Rust.
        Added to the cheatsheet.
      </p>
    </div>
  </div>
</template>
