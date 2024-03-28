<template>
  <div class="px-6 md:px-20">
    <div class="max-w-2xl 3xl:max-w-screen-md pb-12">
      <div class="py-12 border-b-2 border-gray-200 border-solid mb-12">
        <!-- title  -->
        <div class="text-4xl font-semibold">Introduction</div>

        <!-- subtitle -->
        <div class="text-xl mt-2 text-gray-500">
          A brief introduction about this book and its purpose
        </div>
      </div>

      <!-- actual content -->
      <article style="color: rgb(59, 69, 78)" class="this">
        <blockquote class="warning">
          I'm in the midst of migrating part of the project into
          <a href="https://github.com/data-miner00/notes">a newer project</a> to
          rectify out-of-date technologies and to revitalize the site. This
          website will be deprecated soon.
        </blockquote>

        <p>
          Shaun here. This site was developed for me to document the information
          that I've come across on various topics in the form of a note or memo
          for my future reference. This site is open to the public to benefit
          those who might find it useful.
        </p>

        <p>
          If you have spotted any potential bugs or bizarre behaviours, please
          do not hesitate to open an issue on the
          <a href="https://github.com/data-miner00/book" target="_blank"
            >GitHub repo</a
          >
          and I will look into it.
        </p>

        <h1 id="more-about-the-author">More about the author</h1>

        <p>
          I am a software engineer that has 2 years of working experience based
          in Malaysia. I am passionate about learning foreign languages and
          currently learning English and Japanese. I like to develop software
          applications on my own to learn and experiment with different
          technologies on different types of projects during my leisure time.
        </p>

        <h1 id="mission">Mission</h1>

        <p>
          Perhaps my biggest goal at the moment is to create a decent article
          site that is on par with websites such as
          <a target="_blank" href="https://medium.com/">Medium.com</a>,
          <a target="_blank" href="https://decrypt.co/">Decrypt.co</a> and
          <a target="_blank" href="https://dev.to/">Dev.to</a>. I would be
          flattered if I am able to achieve this.
        </p>

        <h1 id="developed-with">Developed with</h1>

        <p>
          This website is developed with Nuxt.js as it allows static-site
          generation which is perfect for content-oriented websites. On top of
          that, I am using Nuxt Content, a file-based CMS module built for
          Nuxt.js to serve and manage the contents. Tailwind.css is used for
          styling the site.
        </p>

        <div class="flex my-4 items-center justify-start">
          <a href="https://vuejs.org/" class="mx-1" target="_blank">
            <img
              class="block w-8"
              :src="require('../assets/images/vue.png')"
              alt="vuejs"
            />
          </a>
          <a href="https://nuxtjs.org" class="mx-1" target="_blank">
            <img
              class="block w-8"
              :src="require('../assets/images/nuxt.svg')"
              alt="nuxtjs"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            class="mx-1"
            target="_blank"
          >
            <img
              class="block w-8"
              :src="require('../assets/images/typescript.png')"
              alt="typescript"
            />
          </a>
          <a href="https://tailwindcss.com/" class="mx-1" target="_blank">
            <img
              class="block w-10"
              :src="require('../assets/images/tailwind.jpg')"
              alt="tailwindcss"
            />
          </a>
        </div>

        <h1 id="contacts">Contacts</h1>

        <p>
          These are a list of social media accounts of mine. Feel free to reach
          out to me on any particular topic that is worth discussing.
        </p>

        <!-- Refactor into individual component and image file -->
        <div class="my-2 flex gap-1 flex-wrap">
          <a
            href="https://www.linkedin.com/in/chong-mum-khong-343b3b1b0/"
            target="_blank"
            class="flex rounded-md overflow-hidden"
          >
            <div
              class="w-9 flex items-center justify-center"
              style="background: #4875b4"
            >
              <svg
                width="20"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                class="block"
                viewBox="0 0 552.77 552.77"
                style="enable-background: new 0 0 552.77 552.77"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      fill="white"
                      d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95    C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z"
                    />
                    <path
                      fill="white"
                      d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95    C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z"
                    />
                    <path
                      fill="white"
                      d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846    c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192    c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666    c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343    c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627    c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48    S535.836,228.581,525.732,215.282z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="px-3 py-2 text-center text-white font-bold w-28"
              style="background: #4875b4"
            >
              Linked In
            </div>
          </a>
          <a
            class="flex rounded-md overflow-hidden no-underline"
            target="_blank"
            href="https://twitter.com/Has66771004"
          >
            <div
              class="w-9 flex items-center justify-center"
              style="background: #1a799e"
            >
              <svg
                version="1.1"
                id="Layer_1"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 410.155 410.155"
                style="enable-background: new 0 0 410.155 410.155"
                xml:space="preserve"
                class="block"
              >
                <path
                  style="fill: #fff"
                  d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067  l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336  c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325  c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481  c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0  c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032  c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569  c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0  c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006  c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883  c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201  c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591  l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"
                />
              </svg>
            </div>
            <div
              class="px-3 py-2 text-center text-white font-bold w-28"
              style="background: #1baae1"
            >
              Twitter
            </div>
          </a>
          <a
            class="flex rounded-md overflow-hidden no-underline"
            href="https://github.com/data-miner00"
            target="_blank"
          >
            <div
              class="w-9 flex items-center justify-center"
              style="background: #24292f"
            >
              <svg
                width="24"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="block"
              >
                <title>github</title>
                <desc>Created with sketchtool.</desc>
                <g
                  id="brand"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="github" fill="#fff">
                    <path
                      d="M12,2 C6.475,2 2,6.475 2,12 C2,16.425 4.8625,20.1625 8.8375,21.4875 C9.3375,21.575 9.525,21.275 9.525,21.0125 C9.525,20.775 9.5125,19.9875 9.5125,19.15 C7,19.6125 6.35,18.5375 6.15,17.975 C6.0375,17.6875 5.55,16.8 5.125,16.5625 C4.775,16.375 4.275,15.9125 5.1125,15.9 C5.9,15.8875 6.4625,16.625 6.65,16.925 C7.55,18.4375 8.9875,18.0125 9.5625,17.75 C9.65,17.1 9.9125,16.6625 10.2,16.4125 C7.975,16.1625 5.65,15.3 5.65,11.475 C5.65,10.3875 6.0375,9.4875 6.675,8.7875 C6.575,8.5375 6.225,7.5125 6.775,6.1375 C6.775,6.1375 7.6125,5.875 9.525,7.1625 C10.325,6.9375 11.175,6.825 12.025,6.825 C12.875,6.825 13.725,6.9375 14.525,7.1625 C16.4375,5.8625 17.275,6.1375 17.275,6.1375 C17.825,7.5125 17.475,8.5375 17.375,8.7875 C18.0125,9.4875 18.4,10.375 18.4,11.475 C18.4,15.3125 16.0625,16.1625 13.8375,16.4125 C14.2,16.725 14.5125,17.325 14.5125,18.2625 C14.5125,19.6 14.5,20.675 14.5,21.0125 C14.5,21.275 14.6875,21.5875 15.1875,21.4875 C19.1375,20.1625 22,16.4125 22,12 C22,6.475 17.525,2 12,2 L12,2 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="px-3 py-2 text-center text-white font-bold w-28"
              style="background: #24292f"
            >
              Github
            </div>
          </a>
          <a
            href="https://mumk.vercel.app/"
            target="_blank"
            class="
              flex
              rounded-md
              overflow-hidden
              border border-gray-400 border-solid
              no-underline
            "
          >
            <div class="w-9 flex items-center justify-center">
              <svg
                width="24px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="block"
              >
                <!-- Uploaded to SVGRepo https://www.svgrepo.com -->
                <title>ic_fluent_globe_24_regular</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="🔍-Product-Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="ic_fluent_globe_24_regular"
                    fill="#212121"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M12.0000002,1.99896738 C17.523704,1.99896738 22.0015507,6.47681407 22.0015507,12.0005179 C22.0015507,17.5242217 17.523704,22.0020684 12.0000002,22.0020684 C6.47629639,22.0020684 1.99844971,17.5242217 1.99844971,12.0005179 C1.99844971,6.47681407 6.47629639,1.99896738 12.0000002,1.99896738 Z M14.9389045,16.5002571 L9.06109593,16.5002571 C9.71313678,18.9143799 10.8464883,20.5020684 12.0000002,20.5020684 C13.1535121,20.5020684 14.2868636,18.9143799 14.9389045,16.5002571 Z M7.50830976,16.5008106 L4.78582644,16.5006803 C5.744167,18.0337454 7.17761035,19.2393418 8.87999355,19.9113065 C8.35771536,19.0914835 7.92672586,18.0651949 7.60972411,16.8958162 L7.50830976,16.5008106 L7.50830976,16.5008106 Z M19.214174,16.5006803 L16.4916907,16.5008106 C16.167923,17.8345819 15.700316,19.000392 15.1189501,19.9113639 C16.7159251,19.2813431 18.0755983,18.1823607 19.0289676,16.7842422 L19.214174,16.5006803 L19.214174,16.5006803 Z M7.09342418,9.9998686 L3.73581796,9.9998686 L3.73581796,9.9998686 L3.73106043,10.0170734 C3.57897914,10.6534279 3.49844971,11.3175685 3.49844971,12.0005179 C3.49844971,13.0566718 3.69103899,14.0678442 4.04301473,15.000832 L7.21617552,15.0004667 C7.07387589,14.0513637 6.99844971,13.0431468 6.99844971,12.0005179 C6.99844971,11.3165055 7.03091285,10.6473039 7.09342418,9.9998686 Z M15.3969276,9.99993255 L8.60307281,9.99993255 C8.53505119,10.640197 8.49844971,11.3099099 8.49844971,12.0005179 C8.49844971,13.0600224 8.5845969,14.070347 8.73818201,15.000607 L15.2618184,15.000607 C15.4154035,14.070347 15.5015507,13.0600224 15.5015507,12.0005179 C15.5015507,11.3099099 15.4649492,10.640197 15.3969276,9.99993255 Z M20.2646076,9.999033 L16.9065762,9.99988793 C16.9690876,10.6473039 17.0015507,11.3165055 17.0015507,12.0005179 C17.0015507,13.0431468 16.9261245,14.0513637 16.7838249,15.0004667 L19.9569857,15.000832 C20.3089614,14.0678442 20.5015507,13.0566718 20.5015507,12.0005179 C20.5015507,11.3111121 20.4194915,10.6408723 20.2646076,9.999033 Z M8.88105029,4.0896719 L8.85814489,4.09838857 C6.81083065,4.91309834 5.15481653,6.500408 4.25014894,8.50027116 L7.29826946,8.50063757 C7.61162388,6.74784533 8.15846945,5.22192073 8.88105029,4.0896719 Z M12.0000002,3.49896738 L11.8843481,3.50426666 C10.6189068,3.62002448 9.39642826,5.62198962 8.82871306,8.50021862 L15.1712874,8.50021862 C14.6051632,5.63005613 13.3879407,3.63125276 12.1262908,3.50528435 L12.0000002,3.49896738 Z M15.1200069,4.08972931 L15.2268438,4.26382329 C15.8960528,5.37628985 16.4041675,6.83617446 16.701731,8.50063757 L19.7498515,8.50027116 C18.8852005,6.58886886 17.3342021,5.05432991 15.4112068,4.21100469 L15.1200069,4.08972931 Z"
                      id="🎨-Color"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="
                px-3
                py-2
                text-center
                font-bold
                w-28
                border-gray-400 border-solid border-l
              "
            >
              Website
            </div>
          </a>
        </div>

        <h1 id="future-improvements">Future improvements</h1>

        <p>
          There are a number of items that are planned for this website to be
          implemented in near future.
        </p>

        <ul>
          <li>Add links for social sharing.</li>
          <li>Add more responsiveness to support more screen resolutions.</li>
          <li>Improve accessibility of the site.</li>
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
              :src="require('../assets/images/levi.png')"
              alt="mumk"
              class="w-7"
            />
          </div>
          <div class="text-gray-400 text-xs pt-1">
            Last updated on March 28, 2024 by Shaun Chong
          </div>
        </div>
      </footer>
    </div>
    <div class="fixed right-60 top-0 w-72 hidden md:block">
      <Quicklinks :quicklinks="quicklinks" />
      <Tags :tags="tags" />
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
  computed: {
    quicklinks() {
      return [
        {
          id: 'more-about-the-author',
          depth: 2,
          text: 'More about the author',
        },
        {
          id: 'mission',
          depth: 2,
          text: 'Mission',
        },
        {
          id: 'developed-with',
          depth: 2,
          text: 'Developed with',
        },
        {
          id: 'contacts',
          depth: 2,
          text: 'Contacts',
        },
        {
          id: 'future-improvements',
          depth: 2,
          text: 'Future improvements',
        },
      ]
    },
    tags(): Array<string> {
      return ['welcome', 'intro', 'enjoy your stay']
    },
  },
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

.this {
  font-family: 'Source Serif Pro', serif;
  @apply text-lg leading-8;
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

blockquote.warning {
  @apply border-l-2 border-solid border-yellow-400 px-4 mb-10 rounded-tr-md rounded-br-md;
  @apply bg-yellow-50 cursor-default py-3;
}
</style>
