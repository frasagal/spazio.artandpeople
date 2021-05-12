<template>
    <div
        :class="{
            'rounded-r-xl overflow-hidden -translate-x-52 lg:-translate-x-96': isOpen,
        }"
        class="flex items-center w-full bg-white text-center transition-transform transform duration-700 ease-in-out shadow-md"
    >
        <div class="flex-grow text-5xl">
            <p class="text-4xl">
                Welcome to <br /><strong @click="toggleMenu()">FraSaGal</strong>
                website.
            </p>
            <p class="text-2xl">Currently under construction</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageContent",
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