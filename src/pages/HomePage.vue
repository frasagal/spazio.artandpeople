<template>
    <div
        class="relative flex flex-row items-center w-screen h-screen font-mono max-w-7xl mx-auto px-4"
    >
        <div class="flex flex-grow flex-col md:items-center">
            <p class="hidden md:block xl:text-7xl uppercase mb-6">
                <shuffle-text :text="fullname" />
            </p>
            <p class="md:hidden flex flex-col text-5xl mb-6 uppercase text-left">
                <span class="flex-shrink bg-gray-200 text-gray-900 px-0.5">
                    {{ dictionary.home_title_h1[0] }}
                </span>
                <span class="flex-shrink bg-gray-200 text-gray-900 px-0.5">
                    {{ dictionary.home_title_h1[1] }}
                </span>
                <span class="flex-shrink bg-gray-200 text-gray-900 px-0.5">
                    {{ dictionary.home_title_h1[2] }}
                </span>
            </p>
            <p class="text-md xl:text-4xl text-left">
                {{ dictionary.home_title_h2 }}
            </p>
        </div>
    </div>
</template>

<script>
import { applyPolyfills, defineCustomElements } from "shuffle-text-c/loader";

applyPolyfills().then(() => {
    defineCustomElements();
});

export default {
    name: "HomePage",
    computed: {
        dictionary() {
            return this.$store.getters["multilang/dictionary"];
        },
        fullname() {
            return (
                this.dictionary.home_title_h1[0] +
                " " +
                this.dictionary.home_title_h1[1] +
                " " +
                this.dictionary.home_title_h1[2]
            );
        },
    },
    mounted() {
        console.log(this.dictionary);
    },
    methods: {
        toggleMenu() {
            this.$store.dispatch("toggleMenu");
        },
    },
};
</script>