<template>
    <transition :name="transition_name">
        <div
            v-show="isOpen"
            :class="{ 'w-14 bg-gray-700': currentLang == lang }"
            @click="setCurrent()"
            class="absolute z-10 rounded-tr-lg pr-0 lg:pr-2 bg-gray-500 hover:bg-indigo-500 hover:text-gray-200 -right-0 pl-2 text-gray-200 w-12 border-t-2 border-double border-gray-300 cursor-pointer uppercase shadow-darkmd"
        >
            <div class="flex flex-row items-center space-x-1">
                <img v-if="lang == 'it'" src="@/assets/icons/flags/it.png" class="w-3 h-5 py-1 z-50" alt="" />
                <img v-if="lang == 'en'" src="@/assets/icons/flags/en.png" class="w-3 h-5 py-1 z-50" alt="" />
                <p class="bold">
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
    },
};
</script>