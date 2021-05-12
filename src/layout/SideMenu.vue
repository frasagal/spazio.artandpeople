<template>
    <collapse-transition :duration="600" dimension="width">
        <div v-show="isOpen" class="absolute right-0 w-52 lg:w-96 pl-2">
            <div>
                <ul>
                    <transition name="slide-left-1">
                        <li v-show="isOpen">Home</li>
                    </transition>
                    <transition name="slide-left-2">
                        <li v-show="isOpen" class="whitespace-nowrap">
                            About
                        </li>
                    </transition>
                    <transition name="slide-left-3">
                        <li v-show="isOpen">Certificazioni</li>
                    </transition>
                </ul>
            </div>
        </div>
    </collapse-transition>
</template>

<script>
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
export default {
    name: "SideMenu",
    components: { CollapseTransition },
    computed: {
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        },
    }
};
</script>