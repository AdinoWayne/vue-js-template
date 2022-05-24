import {
  NAV,
  SIDE,
  LOADING,
  ERROR_SHOW,
  ERROR_MESSAGE,
  WIZARD,
  DEVICE_TYPE,
  MODE_SCREEN,
  HELP,
  APP_WIDTH,
  IS_RENDER,
  IS_RENDER_PARENT,
} from '../types/getters.type';
import {
  SET_NAV,
  SET_SIDE,
  SET_LOADING,
  SET_ERROR,
  SET_WIZARD,
  SET_DEVICE_TYPE,
  SET_HELP,
  SET_APP_WIDTH,
  SET_MODE_SCREEN,
  SET_CHANGE_RENDER,
  SET_CHANGE_RENDER_PARENT,
} from '../types/mutations.type';
import {
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_ERROR,
  HIDE_ERROR,
  SHOW_WIZARD,
  HIDE_WIZARD,
  CHANGE_DEVICE_TYPE,
  CHANGE_MODE_SCREEN,
  SHOW_NAV,
  HIDE_NAV,
  SHOW_SIDE,
  HIDE_SIDE,
  SHOW_HELP,
  HIDE_HELP,
  CHANGE_RENDER,
  CHANGE_RENDER_PARENT,
  CHANGE_APP_WIDTH,
} from '../types/actions.type';

import { STATUS_CODE } from '@/common/constants';

const state = {
  nav: true,
  side: false,
  loading: false,
  error: false,
  errorMessage: {},
  wizard: false,
  deviceType: 0, // 0:pc, 1:mobile
  help: false,
  modeScreen: 0,
  appWidth: {},
  isRender: false,
  isRenderParent: false,
};

const getters = {
  [NAV](state) {
    return state.nav;
  },
  [SIDE](state) {
    return state.side;
  },
  [LOADING](state) {
    return state.loading;
  },
  [ERROR_MESSAGE](state) {
    return state.errorMessage;
  },
  [ERROR_SHOW](state) {
    return state.error;
  },
  [WIZARD](state) {
    return state.wizard;
  },
  [DEVICE_TYPE](state) {
    return state.deviceType;
  },
  [HELP](state) {
    return state.help;
  },
  [APP_WIDTH](state) {
    return state.appWidth;
  },
  [MODE_SCREEN](state) {
    return state.modeScreen;
  },
  [IS_RENDER](state) {
    return state.isRender;
  },
  [IS_RENDER_PARENT](state) {
    return state.isRenderParent;
  },
};

const actions = {
  [SHOW_LOADING]({ commit }) {
    commit(SET_LOADING, true);
  },
  [HIDE_LOADING]({ commit }) {
    commit(SET_LOADING, false);
  },
  [SHOW_ERROR]({ commit }, error) {
    commit(SET_LOADING, false);
    const vError = {
      error,
      value: true,
    };
    commit(SET_ERROR, vError);
  },
  [HIDE_ERROR]({ commit }, error) {
    const vError = {
      error,
      value: false,
    };
    commit(SET_ERROR, vError);
  },
  [SHOW_WIZARD]({ commit }) {
    commit(SET_WIZARD, true);
  },
  [HIDE_WIZARD]({ commit }) {
    commit(SET_WIZARD, false);
  },
  [CHANGE_DEVICE_TYPE]({ commit }, type) {
    commit(SET_DEVICE_TYPE, type);
  },
  [SHOW_NAV]({ commit }) {
    commit(SET_NAV, true);
  },
  [HIDE_NAV]({ commit }) {
    commit(SET_NAV, false);
  },
  [SHOW_SIDE]({ commit }) {
    commit(SET_SIDE, true);
  },
  [HIDE_SIDE]({ commit }) {
    commit(SET_SIDE, false);
  },
  [SHOW_HELP]({ commit }) {
    commit(SET_HELP, true);
  },
  [HIDE_HELP]({ commit }) {
    commit(SET_HELP, false);
  },
  [CHANGE_APP_WIDTH]({ commit }, data) {
    commit(SET_APP_WIDTH, data);
  },
  [CHANGE_MODE_SCREEN]({ commit }, mode) {
    commit(SET_MODE_SCREEN, mode);
  },
  [CHANGE_RENDER]({ commit }, mode) {
    commit(SET_CHANGE_RENDER, mode);
  },
  [CHANGE_RENDER_PARENT]({ commit }, mode) {
    commit(SET_CHANGE_RENDER_PARENT, mode);
  },
};

const mutations = {
  [SET_NAV](state, toggle) {
    state.nav = toggle;
  },
  [SET_SIDE](state, toggle) {
    state.side = toggle;
  },
  [SET_LOADING](state, loading) {
    state.loading = loading;
    if (
      state.errorMessage.code
      && state.errorMessage.code !== STATUS_CODE.EXPIRED_TOKEN
    ) {
      state.error = false;
    }
  },
  [SET_ERROR](state, data) {
    state.error = data.value;
    if (data.value) {
      if (data.error.response.data) {
        switch (data.error.response.data.error.code) {
          case STATUS_CODE.EXPIRED_TOKEN:
            state.errorMessage.translate = true;
            state.errorMessage.msg = 'common_ui_dialog_auto_session_expired';
            state.errorMessage.status = undefined;
            break;
          case STATUS_CODE.INVALID_FILE_UPDATE:
            state.errorMessage.translate = true;
            state.errorMessage.msg = 'management_firmware_invalid_file';
            state.errorMessage.status = undefined;
            break;
          case STATUS_CODE.SESSION_EXPIRED:
            state.errorMessage.translate = true;
            state.errorMessage.msg = 'common_ui_dialog_auto_session_expired';
            state.errorMessage.status = undefined;
            break;
          case STATUS_CODE.BACKUP_FAILED:
            state.errorMessage.translate = true;
            state.errorMessage.msg = 'management_back_up_failed';
            state.errorMessage.status = undefined;
            break;
          case STATUS_CODE.RESTORE_FAILED:
            state.errorMessage.translate = true;
            state.errorMessage.msg = 'management_restore_message_restore_corrupted';
            state.errorMessage.status = undefined;
            break;
          default:
            state.errorMessage.translate = true;
            state.errorMessage.msg = 'common_error_reponse_text';
            state.errorMessage.status = data.error.response.data.error.code;
            break;
        }
      } else {
        state.errorMessage.translate = true;
        state.errorMessage.msg = 'common_error_reponse_text';
        state.errorMessage.status = data.error.response.status;
      }
    }
  },
  [SET_WIZARD](state, value) {
    state.wizard = value;
  },
  [SET_DEVICE_TYPE](state, type) {
    state.deviceType = type;
  },
  [SET_HELP](state, value) {
    state.help = value;
  },
  [SET_APP_WIDTH](state, data) {
    state.appWidth = data;
  },
  [SET_MODE_SCREEN](state, mode) {
    state.modeScreen = mode;
  },
  [SET_CHANGE_RENDER](state, toggle) {
    state.isRender = toggle;
  },
  [SET_CHANGE_RENDER_PARENT](state, toggle) {
    state.isRenderParent = toggle;
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
