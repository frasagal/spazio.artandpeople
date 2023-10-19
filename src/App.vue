<template>
  <div class="">
    <!-- <div
            class="absolute bg-gradient-to-bl from-gray-200 to-gray-50 w-screen h-screen"
        ></div> -->

    <!-- :class="{ 'py-8 pr-8 w-screen h-screen': isOpen }"
      class="relative flex transition-all duration-1000 ease-in-out overflow-x-hidden" -->
    <router-view></router-view>
    <!-- <page-content>
    </page-content> -->

    <!-- <side-menu></side-menu> -->

    <!-- <transition name="slide-left-1">
      <close-button v-show="isOpen"></close-button>
    </transition> -->
  </div>
</template>

<script>
// import PageContent from "./layout/PageContent";
// import SideMenu from "./layout/SideMenu";
// import CloseButton from "./components/buttons/CloseButton";

export default {
  name: "App",
  components: {
    // PageContent,
    // SideMenu,
    // CloseButton,
  },
  mounted() {
    this.$store.dispatch("multilang/setCurrent", { lang: this.defaultLang });
  },
  computed: {
    isOpen() {
      return this.$store.getters["menuIsOpen"];
    },
    defaultLang() {
      return this.$store.getters["multilang/default"];
    },
  },
};
</script>
