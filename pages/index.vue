<template>
  <div class="flex">
    <div class="px-20">
      <div class="max-w-screen-md pb-12">
        <div class="py-12 border-b-2 border-gray-200 border-solid mb-12">
          <!-- title  -->
          <div class="text-4xl font-semibold">Preface</div>

          <!-- subtitle -->
          <div class="text-xl mt-2 text-gray-500">
            A short introduction to this digital grimoire 🙂
          </div>
        </div>

        <!-- actual content -->
        <article style="color: rgb(59, 69, 78)" class="this leading-7">
          <p>
            Hi. This is Shaun and this site was developed for me to document the
            knowledge that I've came across on various topics in the form of a
            note or memo for my future reference. This site is open to the
            public to benefit those who might need it.
          </p>

          <p>
            If you have found an issue, kindly report the issues through the
            <strong>issues</strong> tab in the
            <a href="https://github.com/data-miner/book">Github Repo</a>.
          </p>

          <h1>More about the author</h1>

          <p>
            I am a freshgraduate software engineer based in
            <strong>Malaysia</strong>. I am passionate about learning foreign
            languages and currently learning English and Japanese. I like to
            develop software applications on my own to learn and experiment
            different technologies on different type of projects on my free
            time.
          </p>

          <p>
            <strong>Incentive:</strong> Actually, I have reached out several
            friends to ask if they are willing to collaborate and contribute to
            this book about their knowledge but none of them met my expectation,
            if not, I would prefer building the knowledge repository with them
            together instead of working as a lone wolf.
          </p>

          <h1>Contacts</h1>

          <p>
            These are an extensive list of social media accounts of mine. I use
            Facebook and Instagram sparingly as I don't see any useful gains for
            binging it. I do however, use Twitter more frequent than I expected,
            mainly to scout the trending topics that people talks about in my
            country, particularly regarding to politics.
          </p>

          <h1>Developed with</h1>

          <div class="flex my-4 items-center">
            <img
              class="block w-8 mx-1"
              :src="require('../assets/images/vue.png')"
              alt="vuejs"
            />
            <img
              class="block w-8 mx-1"
              :src="require('../assets/images/nuxt.svg')"
              alt="nuxtjs"
            />
            <img
              class="block w-8 mx-1"
              :src="require('../assets/images/typescript.png')"
              alt="typescript"
            />
            <img
              class="block w-10 mx-1"
              :src="require('../assets/images/tailwind.jpg')"
              alt="tailwindcss"
            />
          </div>

          <h1>Rule of thumb</h1>

          <p>
            To provide a more intuitive and informative article, there are a few
            principles that I've always strive to follow.
          </p>

          <ul>
            <li>
              Efficient use of tables, diagrams, images and proper wording.
            </li>
            <li>
              Read through the articles again and again, refactoring any
              inefficient use of wordings
            </li>
            <li>
              Research extensively online to get more information on the topic
            </li>
          </ul>

          <h1>Todos</h1>

          <p>
            Although this seems like a very easy project, but the efforts are
            insurmountable to make it better and better, and hence it takes time
            and iteration to become fully-functional. Below shows some of the
            planned features that will be introduced incrementally in my free
            time.
          </p>

          <ul>
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
            <div class="w-7 h-7 bg-gray-300 rounded-full overflow-hidden mr-4">
              <img
                :src="require('../assets/images/mumk.jpg')"
                alt="mumk"
                class="w-7"
              />
            </div>
            <div class="text-gray-400 text-xs pt-1">
              Last updated October 4, 2021
            </div>
          </div>
        </footer>
      </div>
    </div>
    <div class="flex-1 flex justify-start">
      <div class="px-5 w-1/2 relative">
        <Quicklinks />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'index',
  head: () => ({
    title: 'Just an ordinary book - Book',
  }),
})
</script>

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

.this p {
  @apply my-4;
}

.this h1 {
  @apply text-2xl font-semibold mt-10 mb-4;
}

.this ul {
  @apply list-disc list-inside pl-6;
}

.this a {
  @apply text-blue-600;
  @apply hover:underline;
}
</style>
