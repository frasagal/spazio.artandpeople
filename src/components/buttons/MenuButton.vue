<template>
    <div
        class="absolute z-50 top-10 right-4 md:right-8 transition-all duration-600 cursor-pointer"
        :class="{ 'text-xl text-gray-200': !isOpen, 'text-lg text-gray-400': isOpen }"
        @click="toggleMenu"
    >
        Menu
    </div>
</template>

<script>
export default {
    name: "MenuButton",
    computed: {
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        },
    },
    methods: {
        toggleMenu() {
            this.$store.dispatch("toggleMenu");
        },
    },
};
</script>