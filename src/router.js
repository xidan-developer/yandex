import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meta from 'vue-meta'

Vue.use(Router);
Vue.use(Meta)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/resume",
      name: "resume",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Resume.vue")
    }
  ]
});
