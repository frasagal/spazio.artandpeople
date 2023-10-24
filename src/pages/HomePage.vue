<template>
  <div class="bg-black">
    <div
      class="relative text-center w-full mx-auto max-w-screen-md p-8 md:p-8 text-white font-mono flex flex-col h-full min-h-screen justify-between"
    >
      <!-- class=" text-center w-full mx-auto max-w-screen-md p-8 md:p-8 text-white font-sans flex flex-col h-screen justify-between" -->
      <div class="my-6 text-center">
        <img
          src="assets/logo.svg"
          class="w-32 md:w-40 mx-auto"
          alt="Logo"
          style="margin-top: 20px;"
        />
      </div>
      <div class="my-14" v-if="!isSended">
        <h2 class="text-white text-2xl md:text-3xl mb-4">
          Scrivi qui la tua domanda
        </h2>
        <div>
          <div class="relative">
            <textarea
              ref="testo"
              name="domanda"
              class="w-full bg-white text-black p-2"
              style="resize: none; max-height: 280px;"
              v-model="domanda"
              @input="checkCharCount"
              rows="2"
            ></textarea>
            <div class="absolute -bottom-10 right-24 text-gray-500">
              {{ charCount }}/280
            </div>
          </div>
          <div class="text-right mt-2">
            <input
              v-if="!isLoading"
              type="button"
              @click="inviaDomanda()"
              value="INVIA"
              class="bg-transparent border border-white px-4 py-2 text-white uppercase cursor-pointer transition duration-150 hover:bg-white hover:text-black"
            />
            <div v-else class="flex w-full flex-row-reverse py-px">
              <div class="w-10">
                <div class="loader"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="items-center flex space-x-2 justify-center py-3 text-green-400"
      >
        <span class="text-2xl">✓ </span
        ><span> La tua risposta è stata inviata!</span>
      </div>
      <div class="text-white text-base md:text-lg my-6 text-justify">
        Per scoprire la risposta alla tua domanda e a quelle che hai letto in
        vetrina ti invitiamo all'<strong>evento</strong> di sabato
        <strong>18 NOVEMBRE</strong> esattamente qui, a <u>spazio.</u>
      </div>
      <div class="flex items-center flex-col">
        <div id="donate-button-container">
          <div id="donate-button"></div>
        </div>
      </div>
      <div class="mt-6 mx-auto w-full">
        <div class="relative flex flex-col sm:flex-row  mb-8">
          <div class="flex-grow text-left">
            <p class="text-gray-500 text-xs mb-2">
              CONTATTACI
            </p>
            <div class="text-white mb-2 mt-1 flex flex-col">
              <a href="mailto:info@spazioartandpeople.com">
                info@spazioartandpeople.com
              </a>
              <a
                target="_blank"
                href="https://www.google.it/maps/@43.5706519,12.1408013,3a,75y,32.26h,87.03t/data=!3m6!1e1!3m4!1sDeNTAxxCprVzP1S2-TR-tw!2e0!7i16384!8i8192?entry=ttu"
                class="text-xs"
              >
                Via XX Settembre 106/A Sansepolcro Arezzo
              </a>
            </div>
          </div>
          <div class="text-left sm:text-right">
            <p class="text-gray-500 text-xs mb-2">
              SEGUICI
            </p>
            <div class="flex space-x-3 sm:pt-3">
              <a
                href="https://www.youtube.com/@SpazioArtandPeople"
                target="_blank"
                class="w-6 h-6 items-center flex"
              >
                <img src="/assets/youtube.png" alt="socials" />
              </a>
              <a
                href="https://www.instagram.com/spazio.artandpeople/"
                target="_blank"
                class="w-6 h-6 items-center flex"
              >
                <img src="/assets/instagram.png" alt="socials" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      isLoading: false,
      isSended: false,
      domanda: "",
      charCount: 0,
    };
  },
  async mounted() {
    await this.loadDonate();
  },
  methods: {
    async loadDonate() {
      window.PayPal.Donation.Button({
        env: "production",
        hosted_button_id: "YZXWNYEABVQAS",
        image: {
          src:
            "https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donateCC_LG.gif",
          alt: "Fai una donazione con il pulsante PayPal",
          title: "PayPal - The safer, easier way to pay online!",
        },
      }).render("#donate-button");
    },
    checkCharCount() {
      this.charCount = this.domanda.length;
      if (this.charCount > 280) {
        this.domanda = this.domanda.slice(0, 280); // Limita il testo a 280 caratteri
        this.charCount = 280;
      }
    },
    async inviaDomanda() {
      this.isLoading = true;

      const domanda = this.sanitize();
      if (domanda) {
        const url =
          "https://worker-question-ingress.cloudflare3389.workers.dev";
        const payload = {
          domanda: domanda,
        };

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "text/plain",
            },
            body: JSON.stringify(payload),
          });

          if (response.ok) {
            console.log("Risposta inviata!");
            this.isSended = true;
          } else {
            console.error("Errore nella richiesta:", response.statusText);
          }
        } catch (error) {
          console.error("Errore durante la richiesta:", error);
        }
      }
      this.isLoading = false;
    },

    sanitize() {
      if (this.domanda) {
        const domanda = this.domanda;

        // Sanitizzazione del testo
        const sanitizedDomanda = domanda
          .trim()
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");

        // Controllo se è un testo non vuoto
        if (domanda.trim() !== "") {
          return sanitizedDomanda;
        } else return false;
      } else return false;
    },
  },
};
</script>

<!--<script>
PayPal.Donation.Button({
  env: "production",
  hosted_button_id: "YZXWNYEABVQAS",
  image: {
    src: "https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donateCC_LG.gif",
    alt: "Fai una donazione con il pulsante PayPal",
    title: "PayPal - The safer, easier way to pay online!",
  },
}).render("#donate-button");
</script> -->
<style>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #f3f3f3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.cls-1 {
  fill: #262626;
}
.cls-2,
.cls-3 {
  fill: #fff;
}
</style>
