<template>
    <div
        class="relative min-h-screen max-w-7xl mx-auto px-4"
    >
        <page-header :title="dictionary.menu.About"></page-header>

        <div class="flex flex-col space-y-8 md:space-y-16 items-start text-left font-mono text-gray-200 mt-16">
            <div
                class="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 pt-4"
            >
                <div class="flex flex-col space-y-12">
                    <p class="order-1">
                        Mi chiamo <span class="italic ">Francesco Saverio Galletti</span>  e sono un
                        professionista dello sviluppo di piattaforme, app e
                        soluzioni integrate in ambito business.
                    </p>
                    <img
                        class="md:hidden order-2 md:order-2 md:w-1/3 rounded-2xl shadow-inner border-double"
                        src="@/assets/images/frasagal05.png"
                        alt=""
                    />
                    <p class="order-3 md:order-2">
                        La mia storia professionale ha inizio nel 2017, quando
                        ancora frequentavo l'università, e nel corso degli anni mi
                        ha permesso di sviluppare nuove capacità, pronto per
                        soddisfare ogni richiesta dei miei clienti.
                        <br /> <br />
                        Le mie principali aree di competenza sono:
                        <ul class="list-inside list-square">
                            <li>Web sites</li>
                            <li>Platform</li>
                            <li>Cloud solutions</li>
                            <li>Mobile Apps</li>
                            <li>Network design and implementations</li>
                        </ul>
                    </p>
                </div>
                <img
                    class="hidden md:block md:w-1/2 lg:w-1/3 rounded-tr-none rounded-full shadow-inner border-8 border-double border-gray-200"
                    src="@/assets/images/frasagal05.png"
                    alt=""
                />
            </div>

            <div class="border-b border-gray-200 w-3/4"></div>
            <h2 class="text-2xl md:text-3xl bg-gray-200 text-black">
                Formazione
            </h2>
            <p>
                No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure
                rationally encounter consequences that are extremely painful. Nor
                again is there anyone who loves or pursues or desires to obtain pain
                of itself, because it is pain, but because occasionally
                circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of us ever
                undertakes laborious physical exercise, except to obtain some
                advantage from it? But who has any right to find fault with a man
                who chooses to enjoy a pleasure that has no annoying consequences,
                or one who avoids a pain that produces no resultant pleasure?
            </p>

            <div class="border-b border-gray-200 w-3/4"></div>
            <h2 class="text-2xl md:text-3xl bg-gray-200 text-black">
                Esperienze lavorative
            </h2>
            <p>
                No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure
                rationally encounter consequences that are extremely painful. Nor
                again is there anyone who loves or pursues or desires to obtain pain
                of itself, because it is pain, but because occasionally
                circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of us ever
                undertakes laborious physical exercise, except to obtain some
                advantage from it? But who has any right to find fault with a man
                who chooses to enjoy a pleasure that has no annoying consequences,
                or one who avoids a pain that produces no resultant pleasure?
            </p>
        </div>
    </div>
</template>
<script>
import PageHeader from "@/layout/PageHeader";

export default {
    name: "AboutPage",
    components: { PageHeader },
    computed: {
        dictionary() {
            return this.$store.getters["multilang/dictionary"];
        },
    },
};
</script>