<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <img class="imgProfile" :src="leftImage" />

    <br>

    <vue-typer class="headline" :repeat="0" text="Мезенцев Даниил"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>Обо</span>
              <span class="green--text"> Мне</span>
            </h3>
            <div>
              <p>
                Привет! Я Мезенцев Даниил. Я front-end разработчик, мне 24 года из который я 3 года профессионально занимающий веб-разработкой.
                Отлично разбираюсь в javaScript и Vue , большой опыт в проектирование веб-приложений.
                Ещё с детсва до школы хотел заниматься чем-нибудь таким, писать код, делать вещи которые будут полезны многим а не только мне, поступ в техникум
                на веб разработчика, устроился на работу , так и работаю на работе, которая приносит мне удовольствие и пользу людям.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {

  components: {
    "vue-typer": VueTyper,
    VueCompareImage
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/xidan-developer/yandex", icon: "fab fa-github" },
        {
          href: "https://vk.com/xidan", icon: "fab fa-vk"
        },
        { href: "https://instagram.com/xidan_off?igshid=OGQ5ZDc2ODk2ZA==", icon: "fab fa-instagram" }
      ],
      text1: ["Front-End разработчик", "Веб-разработчик"],
      leftImage: "https://i.imgur.com/FymoUvL.jpg"
    };
  }
};
</script>
<style>
.imgProfile{
  max-width: 390px;
  width: 100%;
  height: auto;
}
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>

