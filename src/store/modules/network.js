import api from "../../api";
import {
  LAN,
  WAN,
  SPECIFIC_WAN,
  CHANNEL,
  DOCSIS,
  PROCEDURE,
  DUAL_WAN,
  QMODE,
  SWITCH_MODE,
  PHYSICAL_INTERFACE,
  MOBILE_CONFIGURATION,
  LAN_PORT,
  DETECT_CONNECTION,
  REBOOT_LAN,
  REBOOT_IPV6,
  GPON,
  GPON_GEM,
  XPON
} from "../types/getters.type";
import {
  FETCH_LAN,
  FETCH_WAN,
  FETCH_SPECIFIC_WAN,
  UPDATE_SPECIFIC_WAN,
  FETCH_PHYSICAL_INTERFACES,
  UPDATE_PHYSICAL_INTERFACES,
  FETCH_CHANNEL,
  FETCH_DOCSIS,
  FETCH_PROCEDURE,
  UPDATE_LAN,
  FETCH_DUAL_WAN,
  FETCH_Q_MODE,
  UPDATE_DUAL_WAN,
  UPDATE_Q_MODE,
  FETCH_MOBILE_CONFIGURATION,
  UPDATE_MOBILE_CONFIGURATION,
  FETCH_LAN_PORT,
  UPDATE_WAN_IPV6,
  UPDATE_LAN_IPV6,
  FETCH_DETECT_CONNECTION,
  UPDATE_WAN_LAN_IPV6,
  CHANGE_SWITCH_MODE_BRIDGED,
  CHANGE_SWITCH_MODE_ROUTER,
  UPDATE_WAN_DISCONNECT,
  UPDATE_WAN_CONNECT,
  FETCH_GPON,
  FETCH_GPON_GEM,
  FETCH_XPON
} from "../types/actions.type";
import {
  RESET_NETWORK,
  SET_INTERFACES,
  SET_LAN,
  SET_WAN,
  SET_SPECIFIC_WAN,
  SET_CHANNEL,
  SET_DOCSIS,
  SET_PROCEDURE,
  SET_DUAL_WAN,
  SET_Q_MODE,
  SET_SWITCH_MODE,
  SET_MOBILE_CONFIGURATION,
  SET_LAN_PORT,
  SET_DETECT_CONNECTION,
  SET_REBOOT_LAN,
  SET_REBOOT_IPV6,
  SET_GPON,
  SET_GPON_GEM,
  SET_XPON
} from "../types/mutations.type";

import Utils from "@/common/utils";
import { STORAGE_SWITCH_MODE, COOKIE_OPMODE } from "@/common/constants";

const state = {
  interfaces: null,
  lan: null,
  wan: null,
  specific_wan: [],
  channel: null,
  docsis: null,
  procedure: null,
  dual_wan: null,
  currentInterface: 0,
  qMode: null,
  switchMode: null,
  macClone: null,
  mobile: null,
  lanPort: null,
  connectionDetect: null,
  rebootLan: null,
  rebootIpv6: null,
  gpon: null,
  gponGem: null,
  xpon: null
};

const getters = {
  [LAN](state) {
    return state.lan;
  },
  [WAN](state) {
    return state.wan;
  },
  [SPECIFIC_WAN](state) {
    return state.specific_wan;
  },
  [CHANNEL](state) {
    return state.channel;
  },
  [DOCSIS](state) {
    return state.docsis;
  },
  [PROCEDURE](state) {
    return state.procedure;
  },
  [DUAL_WAN](state) {
    return state.dual_wan;
  },
  [QMODE](state) {
    return state.qMode;
  },
  [SWITCH_MODE](state) {
    return state.switchMode;
  },
  [PHYSICAL_INTERFACE](state) {
    return state.interfaces;
  },
  [MOBILE_CONFIGURATION](state) {
    return state.mobile;
  },
  [LAN_PORT](state) {
    return state.lanPort;
  },
  [DETECT_CONNECTION](state) {
    return state.connectionDetect;
  },
  [REBOOT_LAN](state) {
    return state.rebootLan;
  },
  [REBOOT_IPV6](state) {
    return state.rebootIpv6;
  },
  [GPON](state) {
    return state.gpon;
  },
  [GPON_GEM](state) {
    return state.gponGem;
  },
  [XPON](state) {
    return state.xpon;
  }
};

const actions = {
  [FETCH_LAN]({ commit }, { options }) {
    return api.network.lan.lan_get(options).then(data => commit(SET_LAN, data));
  },
  [FETCH_WAN]({ commit }, { options }) {
    return api.network.wan.wan_get(options).then(data => {
      if(data){
        commit(SET_WAN, data);
        commit(SET_SWITCH_MODE, data.interfaces[0].switchMode);
      }
    }).catch(() => {
      const data = {
        "interfaces": [
          {
            "id": 0,
            "active": true,
            "switchMode": "router",
            "interface": "ppp0.1",
            "name": "aisfibre_ipv6_ipv4_pppoe",
            "linkType": "gpon",
            "connectionType": "pppoe",
            "connectivity": "disconnected",
            "ipv6Connectivity": "disconnected",
            "macAddress": "00:00:00:00:00:00",
            "firewall": true,
            "natLoopback": true,
            "ports": [
              "lan1",
              "lan2",
              "lan3",
              "lan4",
              "ssid1",
              "ssid5"
            ],
            "ipv4": {
              "active": true,
              "igmpProxy": true,
              "mode": "dynamic",
              "address": "",
              "subnet": "",
              "gateway": "",
              "dnsAuto": true,
              "dnsServer1": "",
              "dnsServer2": "",
              "connectionTime": "0 days 00:00:00"
            },
            "ipv6": {
              "active": true,
              "mode": "dhcpv6",
              "address": "::",
              "gateway": "::",
              "prefixLength": 0,
              "prefix": "::",
              "requestPD": true,
              "mldProxy": true,
              "dnsAuto": true,
              "dnsServer1": "::",
              "dnsServer2": "",
              "leaseTime": 0,
              "requestAddr": false,
              "connectionTime": "0 days 00:00:00"
            },
            "ppp": {
              "username": "registration",
              "password": "SFMOcmVnaXN0cmF0aW9uDjVhMGY2YmFmMmMxN2U4OGMwOTNlMjJlNWI5MmU0ZGRj",
              "oe": {
                "serverName": "aisfibre_ipv6_ipv4_pppoe",
                "serviceName": ""
              },
              "idleTime": 30,
              "mtu": 1492,
              "lcpEcho": {
                "active": false,
                "interval": 0,
                "retryInterval": 0,
                "retryNum": 0
              },
              "pppBridge": false,
              "authenticationType": "auto",
              "connectionMode": "always"
            },
            "vlan": {
              "active": true,
              "id": 10,
              "priority": 0,
              "tpid": 33024
            },
            "vpn": {
              "server": "",
              "option": ""
            }
          }
        ],
        "ports": [
          "lan1",
          "lan2",
          "lan3",
          "lan4",
          "ssid5",
          "ssid6",
          "ssid7",
          "ssid8",
          "ssid1",
          "ssid2",
          "ssid3",
          "ssid4"
        ]
      }
      commit(SET_WAN, data);
      commit(SET_SWITCH_MODE, data.interfaces[0].switchMode);
    })
  },
  [FETCH_DETECT_CONNECTION]({ commit, state }, { options }) {
    if (state.connectionDetect === null) {
      return api.network.wan
        .wan_connection_type_detect(options)
        .then(data => commit(SET_DETECT_CONNECTION, data));
    } else {
      return;
    }
  },
  [FETCH_SPECIFIC_WAN]({ commit }, { interfaceId, options }) {
    return api.network.wan.wan_get_one(interfaceId, options).then(data => {
      if(data) {
        commit(SET_SPECIFIC_WAN, data);
        if (data.id === 0) {
          commit(SET_SWITCH_MODE, data.switchMode);
          const pastCookie = Utils.getSessionStorage(STORAGE_SWITCH_MODE);
          if (
            pastCookie !== data.switchMode &&
            data.switchMode !== null &&
            data.switchMode !== undefined
          ) {
            Utils.setSessionStorage(STORAGE_SWITCH_MODE, data.switchMode);
          }
        }
      }
    });
  },
  [UPDATE_SPECIFIC_WAN]({ commit }, { interfaceId, postData, options }) {
    return api.network.wan
      .wan_change(interfaceId, postData, options)
      .then((data) => {
        commit(SET_SPECIFIC_WAN, data);
      });
  },
  [CHANGE_SWITCH_MODE_BRIDGED](_, { interfaceId, options }) {
    return api.network.wan.switchmode_bridge(interfaceId, options);
  },
  [CHANGE_SWITCH_MODE_ROUTER](_, { interfaceId, options }) {
    return api.network.wan.switchmode_router(interfaceId, options);
  },
  [UPDATE_WAN_CONNECT](_, { interfaceId, options }) {
    return api.network.wan.connect_wan(interfaceId, options);
  },
  [UPDATE_WAN_DISCONNECT](_, { interfaceId, options }) {
    return api.network.wan.disconnect_wan(interfaceId, options);
  },
  [FETCH_PHYSICAL_INTERFACES]({ commit }, { options }) {
    return api.network.physical_interfaces
      .physical_interfaces_get(options)
      .then(data => commit(SET_INTERFACES, data));
  },
  [UPDATE_PHYSICAL_INTERFACES]({ commit }, { postData, options }) {
    return api.network.physical_interfaces
      .physical_interfaces_update(postData, options)
      .then(() => commit(SET_INTERFACES, null));
  },
  [FETCH_CHANNEL]({ commit }, { options }) {
    return api.network.docsis
      .docsis_channel_get(options)
      .then(data => commit(SET_CHANNEL, data));
  },
  [FETCH_DOCSIS]({ commit }, { options }) {
    return api.network.docsis
      .docsis_get(options)
      .then(data => commit(SET_DOCSIS, data));
  },
  [FETCH_PROCEDURE]({ commit }, { options }) {
    return api.network.docsis
      .docsis_initial_procedure_get(options)
      .then(data => commit(SET_PROCEDURE, data));
  },
  [UPDATE_LAN]({ commit }, { postData, options }) {
    return api.network.lan.lan_update(postData, options).then(data => {
      commit(SET_LAN, null);
      commit(SET_REBOOT_LAN, data);
    });
  },
  [FETCH_DUAL_WAN]({ commit }, { options }) {
    return api.network.dualwan
      .dualwan_get(options)
      .then(data => commit(SET_DUAL_WAN, data));
  },
  [FETCH_Q_MODE]({ commit }, { options }) {
    return api.network.qmode.qmode_get(options).then(data => {
      if (data.operation) {
        Utils.setSessionStorage(COOKIE_OPMODE, data.operation);
      }
      commit(SET_Q_MODE, data);
    });
  },
  [UPDATE_DUAL_WAN]({ commit, state }, { postData, options }) {
    return api.network.dualwan.dualwan_update(postData, options).then(() => {
      commit(SET_DUAL_WAN, null);
      state.specific_wan = [];
    });
  },
  [UPDATE_Q_MODE]({ commit }, { postData, options }) {
    return api.network.qmode.qmode_update(postData, options).then(() => {
      commit(SET_Q_MODE, null);
    });
  },
  [FETCH_MOBILE_CONFIGURATION]({ commit }, { options }) {
    return api.network.mobile
      .mobile_configuration_get(options)
      .then(data => commit(SET_MOBILE_CONFIGURATION, data));
  },
  [UPDATE_MOBILE_CONFIGURATION]({ commit }, { postData, options }) {
    return api.network.mobile.mobile_update(postData, options).then(() => {
      commit(SET_MOBILE_CONFIGURATION, null);
    });
  },
  [FETCH_LAN_PORT]({ commit }, { options }) {
    return api.network.lan
      .lan_port_get(options)
      .then(data => commit(SET_LAN_PORT, data));
  },
  [UPDATE_WAN_IPV6](_, { interfaceId, postData, options }) {
    return api.network.wan.wan_ipv6_change(interfaceId, postData, options);
  },
  [UPDATE_LAN_IPV6](_, { postData, options }) {
    return api.network.lan.lan_ipv6_update(postData, options);
  },
  [UPDATE_WAN_LAN_IPV6]({ commit }, { postData, options }) {
    return api.network.wan.wan_lan_ipv6_change(postData, options).then(data => {
      commit(SET_LAN, null);
      commit(SET_WAN, null);
      commit(SET_REBOOT_IPV6, data);
    });
  },
  [FETCH_GPON]({ commit }, { options }) {
    return api.network.xpon
      .gpon_get(options)
      .then(data => commit(SET_GPON, data));
  },
  [FETCH_GPON_GEM]({ commit }, { options }) {
    return api.network.xpon
      .gpon_gem_get(options)
      .then(data => commit(SET_GPON_GEM, data));
  },
  [FETCH_XPON]({ commit }, { options }) {
    return api.network.xpon
      .xpon_get(options)
      .then(data => commit(SET_XPON, data));
  }
};

const mutations = {
  [RESET_NETWORK](state) {
    state.interfaces = null;
    state.lan = null;
    state.wan = null;
    state.specific_wan = [];
    state.channel = null;
    state.docsis = null;
    state.procedure = null;
    state.dual_wan = null;
    state.qMode = null;
    state.switchMode = null;
    state.currentInterface = 0;
    state.macClone = null;
    state.mobile = null;
    state.lanPort = null;
    state.connectionDetect = null;
    state.rebootLan = null;
    state.rebootIpv6 = null;
    state.gpon = null;
    state.gponGem = null;
    state.xpon = null;
  },
  [SET_INTERFACES](state, interfaces) {
    state.interfaces = interfaces;
  },
  [SET_LAN](state, lan) {
    state.lan = lan;
  },
  [SET_WAN](state, wan) {
    state.wan = wan;
  },
  [SET_SPECIFIC_WAN](state, specific_wan) {
    if (!specific_wan) {
      state.switchMode = null;
      state.specific_wan = [];
    } else if(specific_wan.hasOwnProperty("retryAfter") && !specific_wan.hasOwnProperty("id")) {
       state.specific_wan = specific_wan;
    } else {
      state.specific_wan[specific_wan.id] = specific_wan;
    }
  },
  [SET_CHANNEL](state, channel) {
    state.channel = channel;
    state.channel.downstream.forEach(stream => {
      stream.errorCodeword = {};
    });
    if (channel.errorCodewords && channel.numOfDownstream > 0) {
      channel.errorCodewords.forEach((errorCodeword, index) => {
        state.channel.downstream[index].errorCodeword = errorCodeword;
      });
    }
  },
  [SET_DOCSIS](state, docsis) {
    state.docsis = docsis;
  },
  [SET_PROCEDURE](state, procedure) {
    state.procedure = procedure;
  },
  [SET_DUAL_WAN](state, dual_wan) {
    state.dual_wan = dual_wan;
  },
  [SET_Q_MODE](state, qMode) {
    state.qMode = qMode;
  },
  [SET_SWITCH_MODE](state, switchMode) {
    state.switchMode = switchMode;
  },
  [SET_MOBILE_CONFIGURATION](state, mobile) {
    state.mobile = mobile;
  },
  [SET_LAN_PORT](state, data) {
    state.lanPort = data;
  },
  [SET_DETECT_CONNECTION](state, data) {
    state.connectionDetect = data;
  },
  [SET_REBOOT_LAN](state, data) {
    state.rebootLan = data;
  },
  [SET_REBOOT_IPV6](state, data) {
    state.rebootIpv6 = data;
  },
  [SET_GPON](state, data) {
    state.gpon = data;
  },
  [SET_GPON_GEM](state, data) {
    state.gponGem = data;
  },
  [SET_XPON](state, data) {
    state.xpon = data;
  }
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
};
