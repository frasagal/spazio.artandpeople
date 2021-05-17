<template>
    <transition :name="transition_name">
        <div
            v-show="isOpen"
            :class="{
                'w-16 bg-gray-700 text-gray-200': currentLang == lang,
                'w-14 bg-gray-100 text-gray-500 opacity-70': currentLang != lang,
            }"
            @click="setCurrent()"
            class="absolute z-10 pr-0 lg:pr-2 hover:bg-blue-700 hover:text-gray-200 hover:opacity-100 -right-0 pl-2 border-t border-double border-gray-300 cursor-pointer uppercase shadow-darkmd transition-all duration-300 ease-in-out"
        >
            <div class="flex flex-row items-center space-x-1">
                <img
                    v-if="lang == 'it'"
                    src="@/assets/icons/flags/it.png"
                    class="w-4 h-5 py-0.5 z-50"
                    alt=""
                />
                <img
                    v-if="lang == 'en'"
                    src="@/assets/icons/flags/en.png"
                    class="w-4 h-5 py-0.5 z-50"
                    alt=""
                />
                <p class="bold text-lg">
                    {{ label }}
                </p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "LangSelector",
    props: ["lang", "transition_name"],
    computed: {
        label() {
            return this.lang;
        },
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        },
        currentLang() {
            return this.$store.getters["multilang/current"];
        },
    },
    methods: {
        setCurrent() {
            this.$store.dispatch("multilang/setCurrent", { lang: this.lang });
            return;
        },
        toggleMenu() {
            this.$store.dispatch("toggleMenu");
        },
    },
};
</script>