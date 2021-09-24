<template>
  <div class="max-w-screen-md pb-12">
    <div class="py-12 border-b-2 border-gray-200 border-solid mb-12">
      <!-- title  -->
      <div class="text-4xl font-semibold">Programming</div>

      <!-- subtitle -->
      <div class="text-xl mt-2 text-gray-500">
        The optional subtitle for a page
      </div>
    </div>

    <!-- actual content -->
    <article style="color: rgb(59, 69, 78)" class="leading-7 font-medium">
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

      <p class="mb-4">
        <span class="font-bold">Update 1:</span> as /u/jkachmar points out on
        Reddit that there is a note function in some of alternative Preludes in
        Haskell (or in errors package), which is an analog of ok_or in Rust.
        Added to the cheatsheet.
      </p>

      <h1 class="text-2xl font-semibold mt-10 mb-4">The title as follows</h1>

      <p>
        This is a random <a class="link" href="#">link</a> that can be clicked.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
        voluptate quidem distinctio aliquam error
        <a class="link" href="#">nesciunt cumque</a> eius corrupti enim.
        Aspernatur, fugiat mollitia. Unde consequatur quibusdam expedita at
        laudantium beatae ad.
      </p>

      <h1 class="text-2xl font-semibold pt-10 pb-4">Cheatsheet</h1>

      <table class="w-full">
        <thead class="text-left border-b-2 border-gray-100 text-gray-400">
          <tr>
            <th class="p-1.5">Haskell</th>
            <th class="p-1.5">Rust</th>
            <th class="p-1.5">Purpose</th>
            <th class="p-1.5">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-gray-100">
            <td class="p-1.5"><span class="link">Maybe</span></td>
            <td class="p-1.5"><span class="link">Option</span></td>
            <td class="p-1.5">type name</td>
            <td class="p-1.5"></td>
          </tr>
          <tr class="border-b border-solid border-gray-100">
            <td class="p-1.5"><span class="link">Just</span></td>
            <td class="p-1.5"><span class="link">Some</span></td>
            <td class="p-1.5">constructor</td>
            <td class="p-1.5"><span class="code">a -> Maybe a</span></td>
          </tr>
          <tr class="border-b border-solid border-gray-100">
            <td class="p-1.5"><span class="link">Nothing</span></td>
            <td class="p-1.5"><span class="link">None</span></td>
            <td class="p-1.5">constructor for no value</td>
            <td class="p-1.5"><span class="code">Maybe a</span></td>
          </tr>
        </tbody>
      </table>

      <h1 class="text-2xl font-semibold pt-10 pb-4">Bullet points</h1>

      <ul class="list-disc list-inside pl-6">
        <li>item 1</li>
        <li>item 1</li>
        <li>
          item 1
          <ul class="list-disc list-inside pl-6">
            <li>item item</li>
            <li>item item</li>
            <li>item item</li>
          </ul>
        </li>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ul>
    </article>

    <!-- article footer -->
    <footer class="mt-12">
      <div class="flex gap-1">
        <Previous />
        <Next />
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
        <div class="w-7 h-7 bg-pink-400 rounded-full mr-4"></div>
        <div class="text-gray-400 text-xs pt-1">Last updated 1 years ago</div>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.link {
  @apply text-blue-600;
  @apply hover:underline;
}

.code {
  @apply font-mono;
  @apply bg-gray-100;
  @apply px-2;
  @apply py-1;
  @apply rounded;
}
</style>
