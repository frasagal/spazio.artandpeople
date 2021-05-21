<template>
    <div
        class="flex flex-col sm:flex-row items-center sm:mt-28 space-x-12 pt-6 sm:pt-12 sm:bg-gradient-to-r sm:from-gray-900 sm:via-gray-800 sm:to-gray-700 shadow-full"
    >
        <div
            class="w-full sm:w-1/6 text-left px-4 flex flex-row sm:flex-col justify-between items-end sm:items-center mb-4 sm:mb-0"
        >
            <component
                v-bind:is="currentTabComponent"
                class="h-12 sm:h-6 w-12 sm:w-6 border-b-2 border-gray-200 sm:border-none py-2 sm:py-0"
            ></component>
            <p
                class="flex-grow text-3xl font-bold border-b-2 sm:border-none py-2 border-gray-200"
            >
                {{ category.name }}
            </p>
            <p
                class="text-md font-mono whitespace-nowrap py-2 sm:py-0 border-b-2 sm:border-none border-gray-200"
            >
                {{ category.dataset.length }} badges
            </p>
        </div>
        <div
            class="sm:w-auto flex flex-col sm:flex-row flex-wrap items-center sm:-mb-24"
        >
            <div
                v-for="(badge, index) in category.dataset"
                :key="index"
                class="mr-12 my-4 shadow-dark"
            >
                <badge-card
                    :badge="badge"
                    :dictionary="dictionary"
                ></badge-card>
            </div>
        </div>
    </div>
</template>

<script>
import BadgeCard from "@/components/cards/BadgeCard";
import IconPhoneOut from "@/components/icons/IconPhoneOut";
import IconNetwork from "@/components/icons/IconNetwork";
import IconCloud from "@/components/icons/IconCloud";

export default {
    name: "BadgesSection",
    components: { BadgeCard, IconPhoneOut, IconNetwork, IconCloud },
    props: ["category", "dictionary"],
    computed: {
        currentTabComponent() {
            return this.category.iconComponent;
        },
    },
    created() {
        return import(`@/components/icons/${this.category.iconComponent}.vue`);
    },
};
</script>

<style scoped>
</style>