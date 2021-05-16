<template>
    <router-link :to="link" @click="afterClick">
        <p
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
            class="flex text-2xl xl:text-3xl whitespace-nowrap hover:text-indigo-600 font-medium cursor-pointer font-mono"
        >
            <span :class="{ 'text-transparent': !isHover && currentRouteName != link }" class="mr-1"> # </span>
            <slot></slot>
        </p>
    </router-link>
</template>

<script>
export default {
    name: "MenuItem",
    props: ["link"],
    computed: {
        currentRouteName() {
            return this.$route.path;
        },
    },
    data() {
        return {
            isHover: false,
        };
    },
    methods: {
        afterClick() {
            this.$store.dispatch("toggleMenu");
        }
    }
};
</script>