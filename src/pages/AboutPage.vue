<template>
    <div class="relative">
        <milestone-section
            class="max-w-7xl mx-auto px-4"
            v-for="(milestone, index) in milestones"
            :key="index"
            :milestone="milestone"
        ></milestone-section>
    </div>
</template>
<script>
import MilestoneSection from "@/layout/about/MilestoneSection";
import milestones from "@/json/milestones.json";

export default {
    name: "AboutPage",
    components: { MilestoneSection },
    data() {
        return {
            milestones: milestones,
        };
    },
    computed: {
        dictionary() {
            return this.$store.getters["multilang/dictionary"];
        },
    },
};
</script>