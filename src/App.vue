<template>
  <v-app>
    <v-main>
      <v-container>
        <div>
          <v-btn v-on:click="comprar()">Comprar</v-btn>
          {{ baralho.pilhas }}
        </div>
        <div
          class="d-inline-flex"
          v-for="carta of baralho.cartas"
          :key="carta.nomeCompleto"
        >
          <img width="100" :src="carta.url" alt="" />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Baralho, Cartas } from "./baralho";

export default {
  name: "App",
  data: () => ({
    baralho: new Baralho(Cartas.criarTruco()),
    cartaComprada: null,
  }),
  methods: {
    comprar() {
      this.baralho.comprarUma("jogador1", 3);
    },
  },
};
</script>

<style>
</style>
