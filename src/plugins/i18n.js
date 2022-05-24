import Vue from 'vue';
import VueI18n from 'vue-i18n';
import arLocale from 'vuetify/lib/locale/ar';
import deLocale from 'vuetify/lib/locale/de';
import enLocale from 'vuetify/lib/locale/en';
import faLocale from 'vuetify/lib/locale/fa';
import jaLocale from 'vuetify/lib/locale/ja';
import koLocale from 'vuetify/lib/locale/ko';
import ptLocale from 'vuetify/lib/locale/pt';
import thLocale from 'vuetify/lib/locale/th';
import viLocale from 'vuetify/lib/locale/vi';

Vue.use(VueI18n);

const loadLocaleMessages = () => {
  const languages = require.context(
    '@/languages',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i,
  );
  const messages = {};
  const elMessage = {
    ar: {
      ...arLocale,
    },
    de: {
      ...deLocale,
    },
    en: {
      ...enLocale,
    },
    fa: {
      ...faLocale,
    },
    ja: {
      ...jaLocale,
    },
    ko: {
      ...koLocale,
    },
    pt: {
      ...ptLocale,
    },
    th: {
      ...thLocale,
    },
    vi: {
      ...viLocale,
    },
  };
  languages.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = languages(key);
      Object.keys(messages[locale]).forEach(obj => {
        if (
          messages[locale][obj].indexOf('{{') >= 0
          && messages[locale][obj].indexOf('}}') >= 0
        ) {
          messages[locale][obj] = messages[locale][obj].split('{{').join('{');
          messages[locale][obj] = messages[locale][obj].split('}}').join('}');
        }
      });
    }
  });
  Object.keys(messages).forEach(loc => {
    messages[loc] = Object.assign(messages[loc], elMessage[loc]);
  });

  return messages;
};

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
});
