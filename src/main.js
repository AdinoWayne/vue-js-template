import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import '@/plugins/axios';
import I18n from '@/plugins/i18n';
import Utils from '@/common/utils';
import { LANG } from '@/config/config';
import { STORAGE_LANGUAGE } from '@/common/constants';

Vue.config.productionTip = false

let defaultLanguage;
let vLanguage = Utils.getSessionStorage(STORAGE_LANGUAGE);
if (LANG) {
  defaultLanguage = LANG.DEFAULT_LANGUAGE;
}
if (vLanguage === null || vLanguage === undefined) {
  vLanguage = defaultLanguage;
  Utils.setSessionStorage(STORAGE_LANGUAGE, vLanguage);
}
I18n.locale = vLanguage;

new Vue({
  router,
  store,
  vuetify,
  i18n: I18n, // the vue-i18n plugin instance
  i18nRootKey: 'validations', // the nested key under which the validation messages will be located
  render: h => h(App),
}).$mount('#app')
