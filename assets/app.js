import Vue from 'vue'
import Vuetify from 'vuetify'
import Home from './components/Home.vue';

Vue.use(Vuetify);
Vue.component('home', Home);

new Vue({
    el: '#app'
});
