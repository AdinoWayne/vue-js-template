import { request } from "./base";

const users = {
  get_auth(options) {
    return request("get", "/gateway/users/login/auth", {}, options);
  },
  login(postData, options) {
    return request("post", "/gateway/users/login", postData, options);
  },
  user_validate(type, postData, options) {
    return request(
      "post",
      `/gateway/users/${type}/validate`,
      postData,
      options
    );
  },
  change_password(type, postData, options) {
    return request("post", `/gateway/users/${type}/change`, postData, options);
  },
  user_refresh(type, postData, options) {
    return request("post", `/gateway/users/${type}/refresh`, postData, options);
  },
  user_list(type, options) {
    return request("get", `/gateway/users/${type}`, {}, options);
  },
  user_delete(type, id, options) {
    return request("delete", `/gateway/users/${type}/${id}`, {}, options);
  },
  user_create(type, postData, options) {
    return request("post", `/gateway/users/${type}`, postData, options);
  },
  user_check_default(postData, options) {
    return request(
      "post",
      `/gateway/users/web/checkDefault`,
      postData,
      options
    );
  },
  security_level_passoword_get(name, options) {
    return request(
      "get",
      `/gateway/users/web/securityLevel?name=${name}`,
      {},
      options
    );
  },
  user_hide_wizard(type, postData, options) {
    return request(
      "post",
      `/gateway/users/${type}/hideWizard`,
      postData,
      options
    );
  }
};

const rm = {
  check_rm(options) {
    return request("get",`/gateway/nopassword`, {}, options);
  }
}
const about = {
  about(options) {
    return request("get", "/gateway/about", {}, options);
  }
};
const connectivity = {
  connectivity(options) {
    return request("get", "/gateway/connectivity", {}, options);
  }
};
const reboot = {
  reboot(options) {
    return request("post", "/gateway/reboot", {}, options);
  },
  reboot_schedule_get(options) {
    return request("get", "/gateway/reboot", {}, options);
  },
  reboot_schedule_update(postData, options) {
    return request("put", "/gateway/reboot", postData, options);
  }
};
const device = {
  devices_list(options) {
    return request("get", "/gateway/devices", {}, options);
  },
  devices_getOne(id, options) {
    return request("get", `/gateway/devices/${id}`, {}, options);
  },
  devices_update(id, postData, options) {
    return request("put", `/gateway/devices/${id}`, postData, options);
  },
  mesh_devices_list(options) {
    return request("get", "/gateway/meshDevices", {}, options);
  },
  mesh_device_command(postData, options) {
    return request("put", "/gateway/meshDeviceCmd", postData, options);
  }
};

const language = {
  language_get(userId, options) {
    return request("get", `/gateway/language/${userId}`, {}, options);
  },
  language_change(postData, options) {
    return request("put", `/gateway/language`, postData, options);
  }
};

const datetime = {
  datetime_get(options) {
    return request("get", `/gateway/datetime`, {}, options);
  },
  datetime_update(postData, options) {
    return request("put", `/gateway/datetime`, postData, options);
  }
};

const policy = {
  privacy_policy_get(options) {
    return request("get", `/gateway/privacyPolicy`, {}, options);
  },
  privacy_policy_set(postData, options) {
    return request("put", `/gateway/privacyPolicy`, postData, options);
  }
};

const cpu = {
  cpu_usage() {
    const options = {
      showLoading: false,
      acceptUnAuth: true
    };
    return request("get", `/gateway/statuses/cpuUsage`, {}, options);
  }
};

const memory = {
  memory_usage() {
    const options = {
      showLoading: false,
      acceptUnAuth: true
    };
    return request("get", `/gateway/statuses/memoryUsage`, {}, options);
  }
};

const command = {
  backup(options) {
    return request("post", `/gateway/backup`, {}, options);
  },
  restore(postData, options) {
    return request("post", `/gateway/restore`, postData, options);
  },
  factory_reset(options) {
    return request("post", `/gateway/factoryReset`, {}, options);
  },
  upgrade(postData, options) {
    return request("post", `/gateway/upgrade`, postData, options);
  },
  upgrade_status(options) {
    return request("post", `/gateway/upgrade/status`, {}, options);
  }
};

const powersave = {
  powersave_mode_get(options) {
    return request("get", `/gateway/powersave`, {}, options);
  },
  powersave_mode_change(postData, options) {
    return request("put", `/gateway/powersave`, postData, options);
  }
};

const firmware = {
  check_new_update(postData, options) {
    return request("post", `/gateway/firmware/checkNew`, postData, options);
  },
  firmware_get(options) {
    return request("get", `/gateway/firmware`, {}, options);
  },
  firmware_update(postData, options) {
    return request("put", `/gateway/firmware`, postData, options);
  }
};

const led = {
  led_get(options) {
    return request("get", `/gateway/led`, {}, options);
  },
  led_update(postData, options) {
    return request("put", `/gateway/led`, postData, options);
  }
};

const eco = {
  eco_get(options) {
    return request("get", `/gateway/eco`, {}, options);
  },
  eco_update(postData, options) {
    return request("put", `/gateway/eco`, postData, options);
  }
};

export default {
  users,
  about,
  connectivity,
  reboot,
  device,
  language,
  datetime,
  policy,
  cpu,
  memory,
  command,
  powersave,
  firmware,
  led,
  eco,
  rm
};
