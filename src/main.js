import App from './App.vue'

import Vue from 'vue'
import * as VueGoogleMaps from "vue2-google-maps"

import GmapCluster from 'vue2-google-maps/dist/components/cluster';

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBDGgPuXGeCsxhmSL04d6ad2rk2tcDtgNk",
      region:"MA",
      libraries: "places"
    },
    installComponents: true
  });

Vue.use(BootstrapVue)
Vue.component('GmapCluster', GmapCluster);


new Vue({
    render: h => h(App)
  }).$mount('#app')