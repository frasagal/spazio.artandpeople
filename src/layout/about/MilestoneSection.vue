<template>
    <div class="flex flex-row">
        <div class="flex-shrink flex flex-col mr-2 sm:mr-8 ">
            <div
                class="bg-gradient-to-b from-gray-700 to-gray-200 w-1 h-14 mx-auto"
            ></div>
            <div class="sticky top-24 sm:top-40">
                <div
                    class="flex flex-row bg-gray-200 w-1 h-7 sm:h-6 mx-auto"
                ></div>
                <div class="flex flex-row">
                    <div class="bg-gray-200 w-5 h-5 rounded-full"></div>
                </div>
            </div>
            <div class="bg-gray-200 w-1 h-8 mx-auto"></div>
            <div
                class="bg-gradient-to-t from-gray-600 via-gray-700 to-gray-200 w-1 flex-grow mx-auto"
            ></div>
        </div>
        <div class="flex-grow flex flex-col items-start">
            <div
                class="h-12 px-4 flex-grow flex flex-col-reverse items-end pt-14"
            >
                <p class="text-gray-400 text-sm">
                    {{ milestone.from }} - {{ milestone.to }}
                </p>
            </div>
            <div
                class="sticky top-24 sm:top-40 h-16 py-3 sm:py-1.5 flex-grow w-full text-left"
            >
                <p
                    class="ml-4 text-gray-200 text-xl sm:text-2xl bg-none backdrop-filter backdrop-blur-sm py-2"
                >
                    {{ milestone.title }}
                </p>
                <!-- <div class="h-4 bg-gradient-to-b from-gray-900 to-transparent "></div> -->
            </div>
            <div class="h-8 flex-grow px-4">
                <p
                    class="bg-gray-300 text-gray-900 text-sm px-2 font-mono uppercase"
                >
                    {{ milestone.group }}
                </p>
            </div>
            <div class="flex-grow py-3 pl-4 pr-12 sm:pr-24 lg:pr-96">
                <p class="text-left text-gray-400">
                    {{ milestone.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MilestoneSection",
    props: ["milestone"],
};
</script>