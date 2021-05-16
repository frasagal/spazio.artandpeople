<template>
    <div>
        <div class="absolute bg-gradient-to-bl from-gray-200 to-gray-50 w-screen h-screen"></div>
        <div
            :class="{ 'py-8 pr-8 w-screen h-screen': isOpen }"
            class="relative flex transition-all duration-1000 ease-in-out overflow-x-hidden"
        >
            <page-content>
                <router-view></router-view>
            </page-content>

            <side-menu></side-menu>
        </div>
        <transition name="slide-left-1">
            <close-button v-show="isOpen"></close-button>
        </transition>
    </div>
</template>

<script>
import PageContent from "./layout/PageContent";
import SideMenu from "./layout/SideMenu";
import CloseButton from "./components/buttons/CloseButton";

export default {
    name: "App",
    components: { PageContent, SideMenu, CloseButton },
    computed: {
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        },
    },
};
</script>