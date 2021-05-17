<template>
    <div
        class="relative flex flex-row items-center w-screen h-screen font-mono max-w-7xl mx-auto px-4"
    >
        <div class="flex flex-grow flex-col md:items-center">
            <p class="hidden md:block xl:text-7xl uppercase mb-6">
                <shuffle-text :text="me"/>
            </p>
            <p class="md:hidden text-5xl mb-6 uppercase text-left">
                <span class="bg-gray-200 text-gray-900 px-0.5">
                    Francesco
                </span>
                <span class="bg-gray-200 text-gray-900 px-0.5"> Saverio </span>
                <span class="bg-gray-200 text-gray-900 px-0.5"> Galletti </span>
            </p>
            <p class="text-md xl:text-4xl text-left">
                Developer & system integrator
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
    data() {
        return {
            me: "Francesco Saverio Galletti",
        };
    },
    mounted() {},
    methods: {
        toggleMenu() {
            this.$store.dispatch("toggleMenu");
        },
    },
};
</script>