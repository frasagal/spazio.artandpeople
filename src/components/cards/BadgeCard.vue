<template>
    <vue-flip :class="{'-mt-2 scale-110' : isHover}" class="z-50 w-56 h-64 transition-all transform duration-300 cursor-pointer" v-model="isHover" @mouseover="isHover = true" @mouseleave="isHover = false">
        <template v-slot:front class="front">
            <div class="relative">
                <div
                    :class="{ 'opacity-50': !isAchieved }"
                    class="flex flex-col items-center bg-gray-200 w-56 h-64 rounded-lg"
                >
                    <div
                        class="relative rounded-t-lg w-full h-32 p-4 md:p-6 bg-cover"
                        style="filter: blur(0.8px)"
                        v-bind:style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/images/${badge.background_url}`) +
                                ')',
                        }"
                    ></div>
                    <div class="bg-transparent h-24 -mt-10 z-10">
                        <img
                            class="h-24"
                            :src="
                                require(`@/assets/icons/brands/${badge.icon_url}`)
                            "
                            alt=""
                        />
                    </div>
                    <div
                        class="relative flex flex-col justify-between space-y-4 w-full h-2/3 p-2 md:p-4 text-gray-800"
                    >
                        <div class="flex flex-col">
                            <p class="text-lg italic">{{ badge.name }}</p>
                            <p class="text-md italic">{{ badge.subline }}</p>
                        </div>
                        <p class="text-sm font-bold">
                            {{ badge.organization }}
                        </p>
                    </div>
                </div>
                <div
                    v-if="!isAchieved"
                    style="backdrop-filter: blur(0.5px)"
                    class="absolute h-full top-0 flex flex-row items-center w-full font-medium bg-gray-200 bg-opacity-10 rounded-lg"
                >
                    <div
                        class="w-full flex flex-col-reverse items-center text-white text-2xl"
                    >
                        <p>{{ dictionary.in_progress }}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-9 w-9"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:back class="back">
            <div class="relative">
                <div
                    :class="{ 'opacity-50': !isAchieved }"
                    class="flex flex-col items-center justify-between bg-gray-200 w-56 h-64 rounded-lg text-gray-800 p-4"
                >
                    <div>
                        <p class="text-xs italic text-left">
                            {{ badge.description[currentLang] }}
                        </p>
                    </div>
                    <div class="w-full">
                        <button
                            class="rounded-md bg-blue-500 text-gray-200 py-2 w-full"
                        >
                            {{ dictionary.show_credential }}
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </vue-flip>
</template>

<script>
import VueFlip from "vue-flip";

export default {
    name: "BadgeCard",
    props: ["badge", "dictionary"],
    components: {
        "vue-flip": VueFlip,
    },
    data() {
        return {
            isHover: false
        }
    },
    computed: {
        isAchieved() {
            if (this.badge.achievement_date == "") return false;
            else return true;
        },
        currentLang() {
            return this.$store.getters["multilang/current"];
        },
    },
};
</script>