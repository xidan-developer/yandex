<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary app width="200" height="340">
      <v-list class="pt-4">
        <v-list-tile active-class="green--text" to="/">
          <v-list-tile-content>
            <v-list-tile-title>Главная</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/resume">
          <v-list-tile-content>
            <v-list-tile-title>Задание 2(блок 1)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/services">
          <v-list-tile-content>
            <v-list-tile-title>Задание 2(блок 2)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/portfolio">
          <v-list-tile-content>
            <v-list-tile-title>Задание 2(блок 3)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat dense color="transparent" scroll-off-screen>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">Даниил</span>
        <span class="green--text">М</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" active-class="green--text headline">Главная</v-btn>
        <v-btn flat to="/resume" active-class="green--text headline">Задание 2(блок 1)</v-btn>
        <v-btn flat to="/services" active-class="green--text headline">Задание 2(блок 2)</v-btn>
        <v-btn flat to="/portfolio" active-class="green--text headline">Задание 2(блок 3)</v-btn>

      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {

  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style >
</style>
