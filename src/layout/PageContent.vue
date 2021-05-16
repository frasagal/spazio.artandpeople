<template>
    <div
        :class="{
            'rounded-r-xl overflow-hidden -translate-x-52 lg:-translate-x-96': isOpen,
        }"
        class="relative w-full h-full bg-gray-900 text-white text-center transition-transform transform duration-700 ease-in-out shadow-dark"
    >
        <particles-bg type="cobweb" :num="21" :bg="true" color="#ffffff"/> 
        <menu-button></menu-button>
        <slot></slot>
    </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
import MenuButton from "./../components/buttons/MenuButton";

export default {
    name: "PageContent",
    components: { ParticlesBg, MenuButton },
    computed: {
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        },
    },
};
</script>