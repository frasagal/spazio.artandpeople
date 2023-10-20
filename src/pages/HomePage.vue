<template>
  <div class="bg-black">
    <div
      class="relative text-center w-full mx-auto max-w-screen-md p-8 md:p-8 text-white font-sans flex flex-col h-full min-h-screen justify-between"
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
      <div>
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
          class="mt-14"
        >
          <p class="text-white text-base md:text-lg my-6 text-center">
            Sostieni il progetto con una donazione!
          </p>
          <input type="hidden" name="hosted_button_id" value="YZXWNYEABVQAS" />
          <input
            type="image"
            src="https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Fai una donazione con il pulsante PayPal"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/it_IT/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
      <div class="mt-6 mx-auto w-full">
        <div class="relative flex justify-evenly mb-8">
          <a
            href="https://www.youtube.com/@SpazioArtandPeople"
            target="_blank"
            class="w-10 h-10 items-center flex"
          >
            <img src="/assets/youtube.png" alt="socials" />
          </a>
          <a
            href="https://www.instagram.com/spazio.artandpeople/"
            target="_blank"
            class="w-10 h-10"
          >
            <img src="/assets/instagram.png" alt="socials" />
          </a>
        </div>

        <div class="text-white mb-3">
          spazio.
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
  methods: {
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
