import Vue from 'vue';
import Vuex from 'vuex';
import common from './modules/common';
import gateway from './modules/gateway';
import network from './modules/network';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common,
    gateway,
    network,
  },
});

export default store;
