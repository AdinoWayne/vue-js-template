import api from '../../api';
import {
  IS_AUTH,
  IS_PERMISSIONS,
  ABOUT,
  REBOOT,
  REBOOT_SCHEDULE,
  CONNECTIVITY,
  DEVICE,
  LANGUAGE,
  DATE_TIME,
  POLICY,
  CPU,
  MEMORY,
  LOGIN_DATA,
  DEVICE_CONNECTIVITY,
  DEVICE_SPECIFIC,
  MESH_DEVICE,
  USER_LIST,
  SECURITY_LEVEL,
  CHECK_DEFAULT,
  FILE_BACKUP,
  POWER_SAVING_MODE,
  FIRMWARE_NEW_UPDATE,
  FIRMWARE_STATUS,
  FACTORY_RESET,
  LED,
  UPGRADE,
  UPGRADE_STATUS,
  ECO,
  ECO_RESET,
  RM_STATUS,
} from '../types/getters.type';
import {
  FETCH_AUTH,
  LOGIN,
  LOGOUT,
  FETCH_ABOUT,
  FETCH_REBOOT,
  FETCH_REBOOT_SCHEDULE,
  UPDATE_REBOOT_SCHEDULE,
  FETCH_CONNECTIVITY,
  FETCH_DEVICE,
  FETCH_LANGUAGE,
  FETCH_STATUS_POLICY,
  UPDATE_LANGUAGE,
  FETCH_DATE_TIME,
  UPDATE_DATE_TIME,
  UPDATE_STATUS_POLICY,
  USER_VALIDATE,
  USER_CHANGE_PASSWORD,
  USER_REFRESH,
  FETCH_CPU,
  FETCH_MEMORY,
  FETCH_DEVICE_CONNECTIVITY,
  FETCH_DEVICE_GET_ONE,
  UPDATE_DEVICE_ONE,
  FETCH_MESH_DEVICE,
  UPGRADE_MESH_DEVICE,
  FETCH_USER_LIST,
  DELETE_USER_ACCOUNT,
  CREATE_USER_ACCOUNT,
  FETCH_CHECK_DEFAULT,
  FETCH_CHECK_SECURITY_LEVEL,
  BACKUP_SETTING,
  RESTORE_SETTING,
  FETCH_POWER_SAVING_MODE,
  UPDATE_POWER_SAVING_MODE,
  FIRMWARE_CHECK_NEW_UPDATE,
  FETCH_FIRMWARE_STATUS,
  UPDATE_FIRMWARE_STATUS,
  FETCH_FACTORY_RESET,
  FETCH_LED,
  UPDATE_LED,
  FIRMWARE_UPGRADE,
  FIRMWARE_UPGRADE_STATUS,
  HIDE_WIZARD,
  FETCH_HIDE_WIZARD,
  FETCH_ECO,
  UPDATE_ECO,
  FORCE_ADD_USER,
  FETCH_RM,
} from '../types/actions.type';
import {
  RESET_GATEWAY,
  SET_TOKEN,
  SET_PERMISSIONS,
  SET_ABOUT,
  SET_REBOOT,
  SET_REBOOT_SCHEDULE,
  SET_CONNECTIVITY,
  SET_DEVICE,
  SET_LANGUAGE,
  SET_DATE_TIME,
  SET_POLICY,
  SET_CPU,
  SET_MEMORY,
  SET_LOGIN_DATA,
  SET_DEVICE_CONNECTIVITY,
  SET_DEVICE_SPECIFIC,
  SET_MESH_DEVICE,
  SET_USER_LIST,
  SET_SECURITY_LEVEL,
  SET_CHECK_DEFAULT,
  SET_FILE_BACKUP,
  SET_POWER_SAVING_MODE,
  SET_FIRMWARE_NEW_UPDATE,
  SET_FIRMWARE_STATUS,
  SET_FACTORY_RESET,
  SET_LED,
  SET_ECO,
  SET_ECO_RESET,
  SET_UPGRADE,
  SET_UPGRADE_STATUS,
  SET_NAV,
  SET_SIDE,
  SET_HELP,
  SET_RM_STATUS,
} from '../types/mutations.type';

import Utils from '@/common/utils';
import {
  STORAGE_USER_NAME,
  STORAGE_ACCESS_TOKEN,
  STORAGE_USER_ROLE,
  STORAGE_SWITCH_MODE,
  STORAGE_PERMISSIONS,
  STORAGE_STATUS_POLICY,
  COOKIE_OPMODE,
  STORAGE_SYSTEM_TIMER_PING,
  STORAGE_FIRMWARE,
  STORAGE_IS_DEFAULT_USER,
  STORAGE_RM,
} from '@/common/constants';

const state = {
  token: Utils.getSessionStorage(STORAGE_ACCESS_TOKEN),
  permissions: Utils.getSessionStorage(STORAGE_PERMISSIONS),
  about: null,
  reboot: null,
  rebootSchedule: null,
  connectivity: null,
  device: null,
  language: null,
  dateTime: null,
  policy: null,
  loginData: null,
  cpu: null,
  memory: null,
  deviceConnectivity: {
    lan: null,
    primary2g: null,
    guest2g: null,
    primary5g: null,
    guest5g: null,
    disconnected: null,
    devices: null,
  },
  deviceSpecific: null,
  meshDevice: null,
  userList: {
    username: null,
    mediashare: null,
    vpn: null,
  },
  securityLevel: null,
  checkDefault: null,
  backupFile: null,
  powerSave: null,
  firmwareNewUpdate: null,
  firmwareStatus: null,
  factoryReset: null,
  led: null,
  upgradeStatus: null,
  upgrade: null,
  eco: null,
  ecoReset: null,
  rmStatus: null,
};

const getters = {
  [IS_AUTH](state) {
    return !!state.token && Utils.getSessionStorage(STORAGE_ACCESS_TOKEN);
  },
  [IS_PERMISSIONS](state) {
    return target => {
      const permissions = JSON.parse(state.permissions);
      let ret = false;

      if (permissions[target] === undefined) {
        ret = false;
      } else {
        ret = true;
      }

      return ret;
    };
  },
  [ABOUT](state) {
    return state.about;
  },
  [CONNECTIVITY](state) {
    return state.connectivity;
  },
  [REBOOT](state) {
    return state.reboot;
  },
  [REBOOT_SCHEDULE](state) {
    return state.rebootSchedule;
  },
  [DEVICE](state) {
    return state.device;
  },
  [LANGUAGE](state) {
    return state.language;
  },
  [DATE_TIME](state) {
    return state.dateTime;
  },
  [POLICY](state) {
    return state.policy;
  },
  [CPU](state) {
    return state.cpu;
  },
  [MEMORY](state) {
    return state.memory;
  },
  [LOGIN_DATA](state) {
    return state.loginData;
  },
  [DEVICE_CONNECTIVITY](state) {
    return state.deviceConnectivity;
  },
  [DEVICE_SPECIFIC](state) {
    return state.deviceSpecific;
  },
  [MESH_DEVICE](state) {
    return state.meshDevice;
  },
  [USER_LIST](state) {
    return state.userList;
  },
  [SECURITY_LEVEL](state) {
    return state.securityLevel;
  },
  [CHECK_DEFAULT](state) {
    return state.checkDefault;
  },
  [FILE_BACKUP](state) {
    return state.backupFile;
  },
  [POWER_SAVING_MODE](state) {
    return state.powerSave;
  },
  [FIRMWARE_NEW_UPDATE](state) {
    return state.firmwareNewUpdate;
  },
  [FIRMWARE_STATUS](state) {
    return state.firmwareStatus;
  },
  [FACTORY_RESET](state) {
    return state.factoryReset;
  },
  [LED](state) {
    return state.led;
  },
  [ECO](state) {
    return state.eco;
  },
  [ECO_RESET](state) {
    return state.ecoReset;
  },
  [UPGRADE](state) {
    return state.upgrade;
  },
  [UPGRADE_STATUS](state) {
    return state.upgradeStatus;
  },
  [RM_STATUS](state) {
    return state.rmStatus;
  },
};

const actions = {
  [FETCH_AUTH](_, { options }) {
    return api.gateway.users.get_auth(options);
  },
  [LOGIN]({ commit, dispatch }, { postData, options }) {
    return api.gateway.users.login(postData, options).then(data => {
      if (!data.permissions) {
        data.permissions = {};
      }
      Utils.setSessionStorage(STORAGE_ACCESS_TOKEN, data.accessToken);
      Utils.setSessionStorage(STORAGE_USER_NAME, postData.userName);
      Utils.setSessionStorage(STORAGE_USER_ROLE, data.role);
      Utils.setSessionStorage(STORAGE_SYSTEM_TIMER_PING, data.system.timer.ping);
      Utils.setSessionStorage(STORAGE_PERMISSIONS, JSON.stringify(data.permissions));

      Utils.setAuthInHeader(data.accessToken);
      commit(SET_LOGIN_DATA, data);
      Utils.setSessionStorage(STORAGE_FIRMWARE, JSON.stringify(true));
      commit(SET_PERMISSIONS, data.permissions);

      /* temp (need to check defaultUsed) */
      // dispatch(HIDE_WIZARD);
    });
  },

  [LOGOUT]({ commit }) {
    // delete cookie value
    Utils.deleteSessionStorage(STORAGE_USER_NAME);
    Utils.deleteSessionStorage(STORAGE_USER_ROLE);
    Utils.deleteSessionStorage(STORAGE_ACCESS_TOKEN);
    Utils.deleteSessionStorage(STORAGE_SWITCH_MODE);
    Utils.deleteSessionStorage(STORAGE_PERMISSIONS);
    Utils.deleteSessionStorage(STORAGE_STATUS_POLICY);
    Utils.deleteSessionStorage(COOKIE_OPMODE);
    Utils.deleteSessionStorage(STORAGE_FIRMWARE);
    Utils.deleteSessionStorage(STORAGE_SYSTEM_TIMER_PING);
    Utils.deleteSessionStorage(STORAGE_IS_DEFAULT_USER);
    Utils.setAuthInHeader(null);
    commit(SET_TOKEN, null);
    commit(SET_SIDE, false);
    commit(SET_HELP, false);
  },

  [USER_VALIDATE](_, { type, postData, options }) {
    return api.gateway.users.user_validate(type, postData, options);
  },
  [USER_CHANGE_PASSWORD](_, { type, postData, options }) {
    return api.gateway.users.change_password(type, postData, options);
  },

  [USER_REFRESH](_, { type, postData, options }) {
    return api.gateway.users.user_refresh(type, postData, options);
  },

  [FETCH_ABOUT]({ commit }, { options }) {
    return api.gateway.about
      .about(options)
      .then(data => commit(SET_ABOUT, data))
      .catch((err) => commit(SET_ABOUT, err))
  },

  [FETCH_CONNECTIVITY]({ commit }, { options }) {
    return api.gateway.connectivity
      .connectivity(options)
      .then(data => commit(SET_CONNECTIVITY, data));
  },
  [FETCH_REBOOT]({ commit }, { options }) {
    return api.gateway.reboot
      .reboot(options)
      .then(data => commit(SET_REBOOT, data));
  },
  [FETCH_REBOOT_SCHEDULE]({ commit }, { options }) {
    return api.gateway.reboot
      .reboot_schedule_get(options)
      .then(data => commit(SET_REBOOT_SCHEDULE, data));
  },
  [UPDATE_REBOOT_SCHEDULE]({ commit }, { postData, options }) {
    return api.gateway.reboot
      .reboot_schedule_update(postData, options)
      .then(() => commit(SET_REBOOT_SCHEDULE, null));
  },
  [FETCH_DEVICE]({ commit }, { options }) {
    return api.gateway.device
      .devices_list(options)
      .then(data => commit(SET_DEVICE, data));
  },
  [FETCH_DEVICE_CONNECTIVITY]({ commit }, { id, options }) {
    return api.gateway.device
      .devices_list(options)
      .then(data => commit(SET_DEVICE_CONNECTIVITY, { id, data }));
  },
  [FETCH_DEVICE_GET_ONE]({ commit }, { id, options }) {
    return api.gateway.device
      .devices_getOne(id, options)
      .then(data => commit(SET_DEVICE_SPECIFIC, data));
  },
  [UPDATE_DEVICE_ONE]({ commit }, { id, postData, options }) {
    return api.gateway.device
      .devices_update(id, postData, options)
      .then(() => commit(SET_DEVICE_SPECIFIC, null));
  },
  [FETCH_LANGUAGE]({ commit }, { userId, options }) {
    const vUserId = userId !== undefined ? userId : Utils.getSessionStorage(STORAGE_USER_ROLE);

    return api.gateway.language
      .language_get(vUserId, options)
      .then(data => commit(SET_LANGUAGE, data));
  },
  [FETCH_STATUS_POLICY]({ commit }, { options }) {
    return api.gateway.policy
      .privacy_policy_get(options)
      .then(data => commit(SET_POLICY, data));
  },
  [UPDATE_STATUS_POLICY](_, { postData, options }) {
    return api.gateway.policy.privacy_policy_set(postData, options);
  },
  [UPDATE_LANGUAGE](_, { postData, options }) {
    return api.gateway.language.language_change(postData, options);
  },
  [FETCH_DATE_TIME]({ commit }, { options }) {
    return api.gateway.datetime.datetime_get(options).then(data => {
      commit(SET_DATE_TIME, data);
    });
  },
  [UPDATE_DATE_TIME]({ commit }, { postData, options }) {
    return api.gateway.datetime.datetime_update(postData, options).then(() => {
      commit(SET_DATE_TIME, null);
    });
  },
  [FETCH_CPU]({ commit }, { options }) {
    return api.gateway.cpu
      .cpu_usage(options)
      .then(data => commit(SET_CPU, data));
  },
  [FETCH_MEMORY]({ commit }, { options }) {
    return api.gateway.memory
      .memory_usage(options)
      .then(data => commit(SET_MEMORY, data));
  },
  [FETCH_MESH_DEVICE]({ commit }, { options }) {
    return api.gateway.device
      .mesh_devices_list(options)
      .then(data => commit(SET_MESH_DEVICE, data));
  },
  [UPGRADE_MESH_DEVICE](_, { postData, options }) {
    return api.gateway.device.mesh_device_command(postData, options);
  },
  [FETCH_USER_LIST]({ commit }, { type, options }) {
    return api.gateway.users.user_list(type, options).then(data => {
      commit(SET_USER_LIST, { type, data });
    });
  },
  [DELETE_USER_ACCOUNT](_, { type, id, options }) {
    return api.gateway.users.user_delete(type, id, options).then(() => {
      const index = state.userList[type].findIndex(o => o.id === id);
      state.userList[type].splice(index, 1);
    });
  },
  [CREATE_USER_ACCOUNT]({ commit }, { type, postData, options }) {
    return api.gateway.users.user_create(type, postData, options).then(res => {
      const data = null;
      commit(SET_USER_LIST, { type, data });

      return res;
    });
  },
  [FETCH_CHECK_DEFAULT]({ commit }, { options }) {
    const postData = {
      userName: Utils.getSessionStorage(STORAGE_USER_NAME),
    };

    return api.gateway.users
      .user_check_default(postData, options)
      .then(data => {
        if (data.hasOwnProperty('defaultUsed')) {
          Utils.setSessionStorage(STORAGE_IS_DEFAULT_USER, data.defaultUsed);
        }
        commit(SET_CHECK_DEFAULT, data);
      });
  },
  [FETCH_CHECK_SECURITY_LEVEL]({ commit }, { options }) {
    const name = Utils.getSessionStorage(STORAGE_USER_NAME);

    return api.gateway.users
      .security_level_passoword_get(name, options)
      .then(data => {
        commit(SET_SECURITY_LEVEL, data);
      });
  },
  [BACKUP_SETTING]({ commit }, { options }) {
    return api.gateway.command.backup(options).then(data => {
      commit(SET_FILE_BACKUP, data);
    });
  },
  [RESTORE_SETTING]({ commit }, { postData, options }) {
    return api.gateway.command.restore(postData, options).then(data => {
      commit(SET_FILE_BACKUP, data);
    });
  },
  [FETCH_POWER_SAVING_MODE]({ commit }, { options }) {
    return api.gateway.powersave
      .powersave_mode_get(options)
      .then(data => commit(SET_POWER_SAVING_MODE, data));
  },
  [UPDATE_POWER_SAVING_MODE](_, { postData, options }) {
    return api.gateway.powersave.powersave_mode_change(postData, options);
  },
  [FIRMWARE_CHECK_NEW_UPDATE]({ commit }, { postData, options }) {
    return api.gateway.firmware
      .check_new_update(postData, options)
      .then(data => commit(SET_FIRMWARE_NEW_UPDATE, data));
  },
  [FETCH_FIRMWARE_STATUS]({ commit }, { options }) {
    return api.gateway.firmware
      .firmware_get(options)
      .then(data => commit(SET_FIRMWARE_STATUS, data));
  },
  [UPDATE_FIRMWARE_STATUS]({ commit }, { postData, options }) {
    return api.gateway.firmware
      .firmware_update(postData, options)
      .then(() => commit(SET_FIRMWARE_STATUS, null));
  },
  [FETCH_FACTORY_RESET]({ commit }, { options }) {
    return api.gateway.command
      .factory_reset(options)
      .then(data => commit(SET_FACTORY_RESET, data));
  },
  [FETCH_LED]({ commit }, { options }) {
    return api.gateway.led.led_get(options).then(data => commit(SET_LED, data));
  },
  [UPDATE_LED]({ commit }, { postData, options }) {
    return api.gateway.led
      .led_update(postData, options)
      .then(() => commit(SET_LED, null));
  },

  [FETCH_ECO]({ commit }, { options }) {
    return api.gateway.eco.eco_get(options).then(data => commit(SET_ECO, data));
  },
  [UPDATE_ECO]({ commit }, { postData, options }) {
    return api.gateway.eco
      .eco_update(postData, options)
      .then(data => commit(SET_ECO_RESET, data));
  },
  [FIRMWARE_UPGRADE]({ commit }, { postData, options }) {
    return api.gateway.command
      .upgrade(postData, options)
      .then(data => commit(SET_UPGRADE, data));
  },
  [FIRMWARE_UPGRADE_STATUS]({ commit }, { options }) {
    return api.gateway.command
      .upgrade_status(options)
      .then(data => commit(SET_UPGRADE_STATUS, data));
  },
  [FETCH_HIDE_WIZARD](_, { type, postData, options }) {
    return api.gateway.users.user_hide_wizard(type, postData, options);
  },
  [FORCE_ADD_USER]({ commit }) {
    const tempUserData = {
      expiresIn: 1200,
      role: 'root',
      system: {
        timer: {
          response: 3000,
          cpu: 2000,
          memory: 2000,
          session: 20,
          traceroute: 3000,
          ping: 10000,
        },
      },
      accessToken:
        '354b72d302149d429f2aaf01a74c79d99ca4970fd5775380679982bc9a296da',
    };
    Utils.setSessionStorage(STORAGE_ACCESS_TOKEN, tempUserData.accessToken);
    Utils.setAuthInHeader(tempUserData.accessToken);
    Utils.setSessionStorage(STORAGE_USER_NAME, 'admin');
    Utils.setSessionStorage(STORAGE_USER_ROLE, tempUserData.role);
    Utils.setSessionStorage(STORAGE_SYSTEM_TIMER_PING, tempUserData.system.timer.ping);
    Utils.setSessionStorage(
      STORAGE_PERMISSIONS,
      JSON.stringify(tempUserData.permissions),
    );
    commit(SET_LOGIN_DATA, tempUserData);
    Utils.setSessionStorage(STORAGE_FIRMWARE, JSON.stringify(true));
    commit(SET_PERMISSIONS, tempUserData.permissions);
  },
  [FETCH_RM]({ commit }, { options }) {
    return api.gateway.rm.check_rm(options).then(data => {
      if (data.result) {
        Utils.setSessionStorage(STORAGE_RM, data.result);
        commit(SET_RM_STATUS, data);
      }
    })
  },
};

const mutations = {
  [RESET_GATEWAY](state) {
    state.token = null;
    state.permissions = null;
    state.about = null;
    state.reboot = null;
    state.rebootSchedule = null;
    state.device = null;
    state.language = null;
    state.dateTime = null;
    state.policy = null;
    state.cpu = null;
    state.memory = null;
    state.loginData = null;
    state.deviceConnectivity = {
      lan: null,
      primary2g: null,
      guest2g: null,
      primary5g: null,
      guest5g: null,
      disconnected: null,
      devices: null,
    };
    state.deviceSpecific = null;
    state.meshDevice = null;
    state.userList = {
      username: null,
      mediashare: null,
      vpn: null,
    };
    state.backupFile = null;
    state.powerSave = null;
    state.firmwareNewUpdate = null;
    state.firmwareStatus = null;
    state.led = null;
    state.upgrade = null;
    state.upgradeStatus = null;
    state.eco = null;
    state.rmStatus = null;
  },
  [SET_TOKEN](state, token) {
    state.token = token;
  },
  [SET_PERMISSIONS](state, permissions) {
    state.permissions = permissions;
  },
  [SET_ABOUT](state, about) {
    state.about = about;
  },
  [SET_REBOOT](state, reboot) {
    state.reboot = reboot;
  },
  [SET_REBOOT_SCHEDULE](state, rebootSchedule) {
    state.rebootSchedule = rebootSchedule;
  },
  [SET_CONNECTIVITY](state, connectivity) {
    state.connectivity = connectivity;
  },
  [SET_DEVICE](state, device) {
    state.device = device;
  },
  [SET_LANGUAGE](state, language) {
    state.language = language;
  },
  [SET_DATE_TIME](state, dateTime) {
    state.dateTime = dateTime;
  },
  [SET_POLICY](state, data) {
    state.policy = data;
  },
  [SET_CPU](state, data) {
    state.cpu = data;
  },
  [SET_MEMORY](state, data) {
    state.memory = data;
  },
  [SET_LOGIN_DATA](state, data) {
    state.loginData = data;
  },
  [SET_DEVICE_CONNECTIVITY](state, { id, data }) {
    if (id !== undefined) {
      state.deviceConnectivity[id] = data;
    } else if (data) {
      state.deviceConnectivity.devices = data;
    }
  },
  [SET_DEVICE_SPECIFIC](state, data) {
    state.deviceSpecific = data;
  },
  [SET_MESH_DEVICE](state, data) {
    state.meshDevice = data;
  },
  [SET_USER_LIST](state, { type, data }) {
    state.userList[type] = data;
  },
  [SET_CHECK_DEFAULT](state, data) {
    state.checkDefault = data;
  },
  [SET_SECURITY_LEVEL](state, data) {
    state.securityLevel = data;
  },
  [SET_FILE_BACKUP](state, data) {
    state.backupFile = data;
  },
  [SET_POWER_SAVING_MODE](state, data) {
    state.powerSave = data;
  },
  [SET_FIRMWARE_NEW_UPDATE](state, data) {
    state.firmwareNewUpdate = data;
  },
  [SET_FIRMWARE_STATUS](state, data) {
    state.firmwareStatus = data;
  },
  [SET_FACTORY_RESET](state, data) {
    state.factoryReset = data;
  },
  [SET_LED](state, data) {
    state.led = data;
  },
  [SET_ECO](state, data) {
    state.eco = data;
  },
  [SET_ECO_RESET](state, data) {
    state.ecoReset = data;
  },
  [SET_UPGRADE](state, data) {
    state.upgrade = data;
  },
  [SET_UPGRADE_STATUS](state, data) {
    state.upgradeStatus = data;
  },
  [SET_RM_STATUS](state, data) {
    state.rmStatus = data;
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
