import store from '@/store';
import {
  CHANGE_DEVICE_TYPE,
  SHOW_NAV,
  HIDE_NAV,
  HIDE_SIDE,
  HIDE_HELP,
  CHANGE_APP_WIDTH,
  CHANGE_MODE_SCREEN,
} from '@/store/types/actions.type';

const { body } = document;
const WIDTH_MODE0 = 767;
const WIDTH_MODE1 = 991;
const WIDTH_MODE2 = 1269;
const WIDTH_MODE3 = 1749;

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler);
  },
  mounted() {
    const isMobile = this.$_isMobile();
    if (isMobile) {
      store.dispatch(CHANGE_DEVICE_TYPE, 1);
      store.dispatch(HIDE_NAV); // hide nav-bar as default when app mounted Mobile type.
      store.dispatch(HIDE_SIDE); // hide side-bar as default when app mounted Mobile type.
    } else {
      store.dispatch(SHOW_NAV); // show nav-bar as default when app mounted PC type.
    }
    this.$_checkMode();
    this.$_calculateWidth();
  },
  methods: {
    $_checkMode() {
      const rectWidth = body.getBoundingClientRect().width - 1;
      if (rectWidth <= WIDTH_MODE0) {
        store.dispatch(CHANGE_MODE_SCREEN, 0);
      } else if (rectWidth > WIDTH_MODE0 && rectWidth <= WIDTH_MODE1) {
        store.dispatch(CHANGE_MODE_SCREEN, 1);
      } else if (rectWidth > WIDTH_MODE1 && rectWidth <= WIDTH_MODE2) {
        store.dispatch(CHANGE_MODE_SCREEN, 2);
      } else if (rectWidth > WIDTH_MODE2 && rectWidth <= WIDTH_MODE3) {
        store.dispatch(CHANGE_MODE_SCREEN, 3);
      } else {
        store.dispatch(CHANGE_MODE_SCREEN, 4);
      }
    },
    $_isMobile() {
      const rect = body.getBoundingClientRect();

      return rect.width - 1 < WIDTH_MODE2;
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile();
        this.$_checkMode();
        store.dispatch(CHANGE_DEVICE_TYPE, isMobile ? 1 : 0);
        store.dispatch(HIDE_SIDE);
        store.dispatch(HIDE_HELP);
        if (isMobile) {
          store.dispatch(HIDE_NAV);
        } else {
          store.dispatch(SHOW_NAV);
        }
        this.$_calculateWidth();
      }
    },
    $_calculateWidth() {
      // calculate view width
      const vView = document.getElementById('app-view');
      const vMainWidth = vView.getBoundingClientRect().width;
      if (vMainWidth) {
        const vWidth = vMainWidth - 200; // padding-left: 80px, padding-right: 120px
        const data = {
          mainWidth: vMainWidth,
          viewWidth: vWidth,
        };
        store.dispatch(CHANGE_APP_WIDTH, data);
      }
      this.$nextTick();
    },
  },
};
