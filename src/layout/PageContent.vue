<template>
    <div
        :class="{
            'rounded-r-xl overflow-hidden -translate-x-64 lg:-translate-x-96': isOpen,
        }"
        class="relative z-20 w-screen h-screen bg-gray-900 text-white text-center transition-transform transform duration-700 ease-in-out shadow-dark"
    >
        <particles-bg
            class="z-50"
            type="cobweb"
            :num="21"
            :bg="true"
            color="#ffffff"
        />
        <div
            ref="text"
            @scroll="onScroll"
            class="overflow-y-auto z-50 h-screen w-screen right-0 absolute flex flex-col "
        >
            <div class="flex-shrink sticky top-0 z-40">
                <page-header
                    class="max-w-7xl mx-auto "
                    :progress="progress"
                    :title="currentRouteName"
                ></page-header>
                <menu-button></menu-button>
                <lang-index></lang-index>
            </div>
            <div class="flex-grow">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
import PageHeader from "@/layout/PageHeader";
import MenuButton from "./../components/buttons/MenuButton";
import LangIndex from "./../components/buttons/LangIndex";

export default {
    name: "PageContent",
    components: { PageHeader, ParticlesBg, MenuButton, LangIndex },
    data() {
        return {
            progress: 0,
        };
    },
    computed: {
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        },
        dictionary() {
            return this.$store.getters["multilang/dictionary"];
        },
        currentRouteName() {
            return this.$route.path.substring(1);
        },
    },
    methods: {
        onScroll() {
            const progress =
                this.$refs.text.scrollTop /
                (this.$refs.text.scrollHeight - this.$refs.text.clientHeight);
            if (progress > 1) {
                this.progress = 1;
            } else if (progress < 0) {
                this.progress = 0;
            } else {
                this.progress = progress;
            }
        },
    },
};
</script>