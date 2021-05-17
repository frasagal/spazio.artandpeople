<template>
    <div
        class="flex flex-row justify-start sm:justify-center items-center w-screen h-screen font-mono max-w-7xl mx-auto px-4"
    >
        <div class="flex flex-col items-start sm:items-center justify-start">
            <p class="hidden sm:block text-5xl lg:text-6xl xl:text-7xl uppercase mb-6">
                <shuffle-text :text="fullname" />
            </p>
            <div class="flex flex-col sm:hidden z-10  text-5xl mb-6 uppercase text-left">
                <span class="bg-gray-200 text-gray-900 px-0.5">
                    {{ dictionary.home_title_h1[0] }}
                </span>
                <span class="bg-gray-200 text-gray-900 px-0.5">
                    {{ dictionary.home_title_h1[1] }}
                </span>
                <span class="bg-gray-200 text-gray-900 px-0.5">
                    {{ dictionary.home_title_h1[2] }}
                </span>
            </div>
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