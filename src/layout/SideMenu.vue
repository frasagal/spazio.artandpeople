<template>
    <collapse-transition :duration="600" dimension="width">
        <div
            v-show="isOpen"
            class="absolute -right-2 lg:right-0 text-gray-900 w-52 lg:w-80 h-full pl-2 pt-2"
        >
            <div class="flex flex-col space-y-6">
                <transition
                    :name="item.transition_name"
                    v-for="(item, index) in menu"
                    :key="index"
                >
                    <menu-item v-show="isOpen" :link="item.dst_path">{{
                        item.name
                    }}</menu-item>
                </transition>
            </div>
        </div>
    </collapse-transition>
    <div
        class="absolute right-64 lg:right-96 text-gray-900 w-16 pl-7 lg:pl-8 pt-4"
    >
        <div class="flex flex-col">
            <lang-selector class="relative" transition_name="slide-right-3" lang="it"></lang-selector>
            <lang-selector class="relative" transition_name="slide-right-3" lang="en"></lang-selector>
        </div>
    </div>
</template>

<script>
import jsonmenu from "./../json/menu.json";

import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
import MenuItem from "./../components/paragraphs/MenuItem";
import LangSelector from "./../components/buttons/LangSelector";

export default {
    name: "SideMenu",
    components: { CollapseTransition, MenuItem, LangSelector },
    data() {
        return {
            menu: jsonmenu,
        };
    },
    computed: {
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        },
    },
};
</script>