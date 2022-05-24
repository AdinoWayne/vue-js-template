import { request } from "./base";

const lan = {
  lan_get(options) {
    return request("get", "/network/lan", {}, options);
  },
  lan_update(postData, options) {
    return request("put", "/network/lan", postData, options);
  },
  lan_port_get(options) {
    return request("get", "/network/lan/port", {}, options);
  },
  lan_ipv6_update(postData, options) {
    return request("put", "/network/lan/ipv6", postData, options);
  }
};

const wan = {
  wan_get(options) {
    return request("get", "/network/wan2", {}, options);
  },
  wan_get_one(interfaceId, options) {
    return request("get", `/network/wan2/${interfaceId}`, {}, options);
  },
  wan_change(interfaceId, postData, options) {
    return request("put", `/network/wan2/${interfaceId}`, postData, options);
  },
  wan_ipv6_change(interfaceId, postData, options) {
    return request(
      "put",
      `/network/wan2/${interfaceId}/ipv6`,
      postData,
      options
    );
  },
  wan_lan_ipv6_change(postData, options) {
    return request("put", `/network/ipv6`, postData, options);
  },
  wan_connection_type_detect(options) {
    return request("get", "/network/wan2/connectionTypeDetect", {}, options);
  },
  switchmode_bridge(interfaceId, options) {
    return request("post", `/network/wan2/${interfaceId}/bridge`, {}, options);
  },
  switchmode_router(interfaceId, options) {
    return request("post", `/network/wan2/${interfaceId}/router`, {}, options);
  },
  connect_wan(interfaceId, options) {
    return request("post", `/network/wan2/${interfaceId}/connect`, {}, options);
  },
  disconnect_wan(interfaceId, options) {
    return request(
      "post",
      `/network/wan2/${interfaceId}/disconnect`,
      {},
      options
    );
  }
};

const docsis = {
  docsis_get(options) {
    return request("get", "/network/docsis", {}, options);
  },
  docsis_channel_get(options) {
    return request("get", "/network/docsis/channel", {}, options);
  },
  docsis_initial_procedure_get(options) {
    return request("get", "/network/docsis/procedure", {}, options);
  }
};

const physical_interfaces = {
  physical_interfaces_get(options) {
    return request("get", "/network/interfaces", {}, options);
  },
  physical_interfaces_update(postData, options) {
    return request("put", "/network/interfaces", postData, options);
  }
};

const dualwan = {
  dualwan_get(options) {
    return request("get", "/network/dualwan", {}, options);
  },
  dualwan_update(postData, options) {
    return request("put", "/network/dualwan", postData, options);
  }
};

const qmode = {
  qmode_get(options) {
    return request("get", "/network/qmode", {}, options);
  },
  qmode_update(postData, options) {
    return request("put", "/network/qmode", postData, options);
  }
};

const macclone = {
  macclone_get(interfaceId, options) {
    return request("get", `/network/wan2/${interfaceId}/macClone`, {}, options);
  },
  macclone_set(interfaceId, postData, options) {
    return request(
      "put",
      `/network/wan2/${interfaceId}/macClone`,
      postData,
      options
    );
  }
};

const mobile = {
  mobile_configuration_get(options) {
    return request("get", `/network/mobile/configuration`, {}, options);
  },
  mobile_update(postData, options) {
    return request("put", `/network/mobile/configuration`, postData, options);
  }
};

const xpon = {
  gpon_get(options) {
    return request("get", `/network/xpon/gpon`, {}, options);
  },
  gpon_gem_get(options) {
    return request("get", `/network/xpon/gpon/gem`, {}, options);
  },
  xpon_get(options) {
    return request("get", `/network/xpon`, {}, options);
  }
};

export default {
  lan,
  wan,
  physical_interfaces,
  docsis,
  dualwan,
  qmode,
  macclone,
  mobile,
  xpon
};
