<template>
  <div
    class="absolute flex flex-row items-center z-50 top-4 right-4 md:right-8 transition-all duration-600 cursor-pointer uppercase"
    :class="{
      'text-md text-gray-400': !isOpen,
      'text-sm text-gray-600': isOpen,
    }"
  >
    <!-- @click="toggleMenu" -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
    <p>
      {{ currentLang }}
    </p>
  </div>
</template>

<script>
export default {
  name: "LangIndex",
  computed: {
    isOpen() {
      return this.$store.getters["menuIsOpen"];
    },
    currentLang() {
      return this.$store.getters["multilang/current"];
    },
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch("toggleMenu");
    },
  },
};
</script>
