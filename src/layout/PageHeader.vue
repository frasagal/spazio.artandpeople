<template>
  <div
    v-if="isEnabled"
    class="bg-gradient-to-b from-black via-black to-transparent backdrop-filter backdrop-blur-sm flex flex-col items-start text-left font-mono text-gray-200 mb-16 sm:mb-8"
  >
    <div class="min-w-min sm:my-5">
      <router-link to="/">
        <h1
          :class="{
            'mt-4 text-sm sm:text-base bg-gray-200 text-black px-2':
              progress == 0,
            'mt-4 text-xs sm:text-sm text-gray-400': progress > 0,
          }"
          class="ml-4 w-min"
        >
          spazio.
        </h1>
      </router-link>
    </div>
    <div
      :class="{
        'text-6xl mt-16': progress == 0,
        'text-3xl mt-4 ': progress > 0,
      }"
      class="flex flex-row px-4 transition-all duration-300 whitespace-nowrap"
    >
      <span
        :class="{
          'border-b-4 sm:border-b-8': progress == 0,
          'border-none': progress > 0,
        }"
        class="pb-0.5 md:pb-4"
      >
        {{ first }}
      </span>
      <span class="tracking-tighter sm:tracking-normal">{{ rest }}</span>
    </div>
    <div class="px-4 w-full">
      <div
        :class="{
          'border-b border-gray-600': progress > 0,
        }"
        class="bg-transparent backdrop-filter backdrop-blur-sm w-full mt-0.5 mb-4 rounded-sm"
      >
        <div :style="{ width: 'calc(' + progress * 100 + '%)' }" class="">
          <div class="border-t-4 border-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["title", "progress", "isEnabled"],
  computed: {
    isOpen() {
      return this.$store.getters["menuIsOpen"];
    },
    first() {
      return this.title.charAt(0);
    },
    rest() {
      return this.title.substr(1, this.title.length);
    },
  },
};
</script>
