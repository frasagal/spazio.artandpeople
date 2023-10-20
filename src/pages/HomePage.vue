<template>
  <div id="main" class="flex justify-center items-start h-screen bg-black">
    <header
      class="header text-center w-full mx-auto max-w-screen-md p-6 md:p-8 bg-black text-white font-sans"
    >
      <div class="my-6 text-center">
        <img
          src="assets/logo.svg"
          class="w-40 mx-auto"
          alt="Logo"
          style="margin-top: 20px;"
        />
      </div>
      <div class="my-14">
        <h2 class="text-white text-2xl md:text-3xl mb-4">
          Scrivi qui la tua domanda
        </h2>
        <form action="answear.php" method="post">
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
              type="submit"
              value="INVIA"
              class="bg-transparent border border-white px-4 py-2 text-white uppercase cursor-pointer transition duration-300 hover:bg-white hover:text-black"
            />
          </div>
        </form>
      </div>
      <p class="text-white text-base md:text-lg my-6 text-justify">
        Per scoprire la risposta alla tua domanda e a quelle che hai letto in
        vetrina ti invitiamo all'evento di sabato 18 novembre esattamente qui, a
        spazio.
      </p>
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
      <div class="mt-6 mx-auto w-full">
        <div class="relative flex justify-evenly mb-4">
          <div class="w-10 h-10 items-center flex">
            <img src="/assets/youtube.png" srcset="" />
          </div>
          <div class="w-10 h-10">
            <img src="/assets/instagram.png" srcset="" />
          </div>
        </div>

        <p class="text-white mb-3">
          spazio.
        </p>
      </div>
    </header>
  </div>
</template>

<script>
// import IconLogo from "../components/icons/IconLogo.vue";
import { applyPolyfills, defineCustomElements } from "shuffle-text-c/loader";

applyPolyfills().then(() => {
  defineCustomElements();
});

export default {
  name: "HomePage",
  // components: { IconLogo },
  data() {
    return {
      domanda: "",
      charCount: 0,
      rows: 1,
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
  },
  computed: {
    dictionary() {
      return this.$store.getters["multilang/dictionary"];
    },
    fullname() {
      return (
        this.dictionary.home_title_h1[0] +
        " " +
        this.dictionary.home_title_h1[1] +
        " " +
        this.dictionary.home_title_h1[2]
      );
    },
  },
  mounted() {
    console.log(this.dictionary);
  },
};
</script>
<style>
.diocane {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  margin-top: 0px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  width: min-content;
  margin: auto;
}

.diocane:hover,
.diocane:active {
  background-color: #fff;
  color: #000;
}

.cls-1 {
  fill: #262626;
}
.cls-2,
.cls-3 {
  fill: #fff;
}
</style>
