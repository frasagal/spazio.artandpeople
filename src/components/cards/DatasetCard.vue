<template>
    <div
        style="backdrop-filter: blur(2px)"
        class="sm:-mb-8 text-left rounded-lg shadow-darkmd text-gray-200 text-3xl flex flex-row items-center"
    >
        <div
            class="h-20 w-20 text-center flex flex-row items-center bg-gray-100 bg-opacity-70 text-blue-900 text-4xl sm:text-5xl font-bold rounded-l-lg shadow-md z-20"
        >
            <div class="flex-grow">
                <shuffle-text
                    :text="datavalue"
                    random-chars="123456789#@´`÷‹~"
                    openTime="600"
                />
            </div>
        </div>
        <p
            class="h-20 text-left flex flex-col justify-center flex-grow items-start px-2 sm:px-4 xl:px-7 rounded-r-lg text-gray-200 bg-opacity-60 bg-blue-500 text-2xl sm:text-xl md:text-2xl lg:text-3xl z-10"
        >
            <slot></slot>
        </p>
    </div>
</template>

<script>
import { applyPolyfills, defineCustomElements } from "shuffle-text-c/loader";

applyPolyfills().then(() => {
    defineCustomElements();
});

export default {
    name: "DatasetCard",
    props: ["datavalue"],
};
</script>