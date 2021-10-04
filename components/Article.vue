<template>
  <div class="max-w-screen-md pb-12">
    <div class="py-12 border-b-2 border-gray-200 border-solid mb-12">
      <!-- title  -->
      <div class="text-4xl font-semibold">Preface</div>

      <!-- subtitle -->
      <div class="text-xl mt-2 text-gray-500">
        A short introduction to this book 🙂
      </div>
    </div>

    <!-- actual content -->
    <article style="color: rgb(59, 69, 78)" class="leading-7">
      <p class="mb-6">
        Hi. This is Shaun from <strong>Malaysia</strong> and this notebook
        consists of various articles and tutorials that I've documented over the
        years which might be handy for numerous occasions that you might be
        going though as well. The book is currently under construction so it is
        expected to have some bugs and misalignement here and there. If you have
        found an issue, kindly report the issues through the
        <strong>issues</strong> tab in the [Github
        Repo](https://github.com/data-miner/book)
      </p>

      <p class="mb-4">
        <span class="font-bold">Incentive:</span> Actually, I have reached out
        several friends to ask if they are willing to collaborate and contribute
        to this book about their knowledge but none of them met my expectation,
        if not, I would prefer building the knowledge repository with them
        together instead of working as a lone wolf.
      </p>

      <h1 class="text-2xl font-semibold mt-10 mb-4">Rule of thumb</h1>

      <p class="my-4">
        To provide a more intuitive and informative article, there are a few
        principles that I've always strive to follow.
      </p>

      <ul class="list-disc list-inside pl-6">
        <li>Efficient use of tables, diagrams, images and proper wording.</li>
        <li>
          Read through the articles again and again, refactoring any inefficient
          use of wordings
        </li>
        <li>
          Research extensively online to get more information on the topic
        </li>
      </ul>

      <h1 class="text-2xl font-semibold mt-10 mb-4">Todos</h1>

      <p class="my-4">
        Although this seems like a very easy project, but the efforts are
        insurmountable to make it better and better, and hence it takes time and
        iteration to become fully-functional. Below shows some of the planned
        features that will be introduced incrementally in my free time.
      </p>

      <ul class="list-disc list-inside pl-6">
        <li>Add more articles</li>
        <li>Add search function</li>
      </ul>
    </article>

    <!-- article footer -->
    <footer class="mt-12">
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
        <div class="text-gray-400 text-xs pt-1">
          Last updated October 4, 2021
        </div>
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
