<template>
    <div
        class="mb-14 mt-20 px-4 py-8 sm:pt-24 shadow-inner border-t-2 sm:border-t-8 border-blue-400 bg-cover"
        v-bind:style="{
            'background-image':
                'url(' +
                require(`@/assets/images/learning-background.png`) +
                ')',
        }"
    >
        <p
            class="hidden sm:block text-5xl text-center mx-auto w-min whitespace-nowrap text-gray-900 shawdow-xl bg-blue-200 font-mono p-3 mb-14"
        >
            {{ dictionary.badges_dash_title }}
        </p>
        <div class="grid grid-cols sm:grid-cols-3 gap-6 sm:gap-1 lg:gap-2 sm:space-x-8">
            <dataset-card :datavalue="achieved_badges.length">
                {{ dictionary.badges_dash_datasets.Certifications }}
            </dataset-card>
            <dataset-card :datavalue="3">
                <span>
                    {{ dictionary.badges_dash_datasets.Areas[0] }}
                </span>
                <span class="text-lg sm:text-xl lg:text-2xl ">
                    {{ dictionary.badges_dash_datasets.Areas[1] }}
                </span>
            </dataset-card>
            <dataset-card :datavalue="yearFrom2016()">
                <span>
                    {{ dictionary.badges_dash_datasets.Years[0] }}
                </span>
                <span class="text-lg sm:text-xl lg:text-2xl ">
                    {{ dictionary.badges_dash_datasets.Years[1] }}
                </span>
            </dataset-card>
        </div>
    </div>
</template>


<script>
import DatasetCard from "@/components/cards/DatasetCard";

export default {
    name: "DashSection",
    components: { DatasetCard },
    props: ["badges", "dictionary"],
    computed: {
        achieved_badges() {
            return this.badges.filter(function (bg) {
                return bg.achievement_date != "";
            });
        },
    },
    methods: {
        yearFrom2016() {
            let d = new Date();
            return d.getFullYear() - 2016;
        },
    },
};
</script>
