<template>
    <div class="flex flex-row">
        <div class="flex-shrink flex flex-col mr-2 sm:mr-8 ">
            <div
                class="bg-gradient-to-b from-gray-700 to-gray-200 w-1 h-12  mx-auto"
            ></div>
            <div class="sticky top-24 sm:top-40">
                <div
                    class="flex flex-row bg-gray-200 w-1 h-11 sm:h-12 mx-auto"
                ></div>
                <div class="flex flex-row">
                    <div class="bg-gray-200 w-4 md:w-5 h-4 md:h-5 rounded-full"></div>
                </div>
            </div>
            <div class="bg-gray-200 w-1 h-8 mx-auto"></div>
            <div
                class="bg-gradient-to-t from-gray-600 via-gray-700 to-gray-200 w-1 flex-grow mx-auto"
            ></div>
        </div>
        <div class="flex-grow flex flex-col items-start">
            <div
                class="h-12"
            >
            </div>
            <div
                class="sticky top-24 sm:top-40 pt-4 pl-2 flex-grow w-full flex flex-col items-start text-left bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm "
            >
                <p class="text-gray-400 text-sm mb-1">
                    {{ milestone.from }} - {{ milestone.to }}
                </p>
                <p
                    class="whitespace-nowrap text-gray-200 text-xl sm:text-2xl border-b border-gray-800 shadow-sm pb-0.5 w-full"
                >
                    {{ milestone.title }}
                </p>
                <!-- <div class="h-4 bg-gradient-to-b from-black to-transparent "></div> -->
                <!-- <p
                    class="bg-gray-300 text-black text-xs md:text-sm px-2 ml-2 mt-3 flex-shrink font-mono uppercase"
                >
                    {{ milestone.group }}
                </p> -->
            </div>
            <!-- <div class="h-8 flex-grow px-4">
            </div> -->
            <div class="flex-grow py-3 pl-2 pr-12 sm:pr-24 lg:pr-96">
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