<template>
    <div
        class="relative min-h-screen max-w-7xl mx-auto sm:px-4 pb-96 flex flex-col"
    >
        <page-header class="px-4" :title="dictionary.menu.Badges"></page-header>

        <dash-section :badges="badges" :dictionary="dictionary"></dash-section>

        <div v-for="(category, jdex) in all_badges" :key="jdex">
            <badges-section :category="category" :dictionary="dictionary"></badges-section>
        </div>
    </div>
</template>

<script>
import badges from "@/json/badges.json";
import PageHeader from "@/layout/PageHeader";
import DashSection from "@/layout/badges/DashSection";
import BadgesSection from "@/layout/badges/BadgesSection";

export default {
    name: "BadgesPage",
    components: { PageHeader, DashSection, BadgesSection },
    data() {
        return {
            badges: badges,
        };
    },
    computed: {
        dictionary() {
            return this.$store.getters["multilang/dictionary"];
        },
        network_badges() {
            return this.badges.filter(function (bg) {
                return bg.category == "network";
            });
        },
        pbx_badges() {
            return this.badges.filter(function (bg) {
                return bg.category == "pbx";
            });
        },
        cloud_badges() {
            return this.badges.filter(function (bg) {
                return bg.category == "cloud";
            });
        },
        all_badges() {
            return {
                pbx: {
                    name: "PBX",
                    dataset: this.pbx_badges,
                    iconComponent: "IconPhoneOut"
                },
                network: {
                    name: "Network",
                    dataset: this.network_badges,
                    iconComponent: "IconNetwork"
                },
                cloud: {
                    name: "Cloud",
                    dataset: this.cloud_badges,
                    iconComponent: "IconCloud"
                },
            };
        },
    },
};
</script>
