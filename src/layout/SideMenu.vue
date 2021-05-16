<template>
    <collapse-transition :duration="600" dimension="width">
        <div
            v-show="isOpen"
            class="absolute right-0 text-gray-900 w-52 lg:w-96 pl-2 pt-2"
        >
            <div class="flex flex-col space-y-6">
                <transition name="slide-left-1">
                    <menu-item v-show="isOpen" link="/">Home</menu-item>
                </transition>
                <transition name="slide-left-2">
                    <menu-item v-show="isOpen" link="/about">About</menu-item>
                </transition>
                <transition name="slide-left-3">
                    <menu-item v-show="isOpen" link="/certifications">Certificazioni</menu-item>
                </transition>
                <transition name="slide-left-4">
                    <menu-item v-show="isOpen" link="/projects">Progetti</menu-item>
                </transition>
                <transition name="slide-left-5">
                    <menu-item v-show="isOpen" link="/contacts">Contatti</menu-item>
                </transition>
            </div>
        </div>
    </collapse-transition>
</template>

<script>
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
import MenuItem from "./../components/paragraphs/MenuItem";

export default {
    name: "SideMenu",
    components: { CollapseTransition, MenuItem },
    computed: {
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        },
    },
};
</script>