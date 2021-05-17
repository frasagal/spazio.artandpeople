<template>
    <div class="flex flex-col space-y-16 items-start text-left font-mono mt-5 md:mt-6 text-gray-200">
        <h1 class="text-sm bg-gray-200 text-gray-900 px-2">frasagal.com</h1>
        <h1 class="text-6xl">
            <span class="border-b-8 pb-0.5 md:pb-2">{{ first }}</span>
            <span>{{ rest }}</span> 
        </h1>
    </div>
</template>

<script>

export default {
    name: "PageHeader",
    props: ["title"],
    computed: {
        isOpen() {
            return this.$store.getters["menuIsOpen"];
        },
        first() {
            return this.title.charAt(0);
        },
        rest() {
            return this.title.substr(1, this.title.length)
        }
    },
};
</script>