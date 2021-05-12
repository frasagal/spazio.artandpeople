<template>
    <div
        class="absolute bg-gradient-to-bl from-blue-700 to-purple-700 w-screen h-screen"
    ></div>
    <div
        :class="{ 'py-8 pr-8': isOpen }"
        class="relative flex w-screen h-screen transition-all duration-1000 ease-in-out overflow-x-hidden"
    >
        <page-content></page-content>
        <side-menu></side-menu>
    </div>
</template>

<script>
import SideMenu from "./layout/SideMenu";
import PageContent from "./layout/PageContent";

export default {
    name: "App",
    components: { SideMenu, PageContent },
    computed: {
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        }
    }
};
</script>