import {
  TYPE_ACCOUNT,
  ANONYMOUS_ACCOUNT,
  QMODE_TYPE,
  QMODE_OPERATION,
  STORAGE_ACCESS_TOKEN,
} from '@/common/constants';
import Utils from '@/common/utils';
import Hash_Gen from '@/common/hash-gen';

const mac_filtering_ex = {
  macfiltering_rule(rule) {
    let postData = {};
    if (rule) {
      postData = {
        active: rule.active,
        deviceId: rule.deviceId,
        macAddress: rule.macAddress,
        name: rule.name,
      };
    }

    return postData;
  },
  macfiltering_all_rules(mode) {
    let postData = {};
    if (mode) {
      postData = {
        rules: [],
        filterMode: mode,
      };
    }

    return postData;
  },
};

const ip_port_filtering_ex = {
  ip_port_filtering_rule(rule) {
    let postData = {};
    if (rule) {
      postData = {
        active: rule.active,
        name: rule.name,
        src: rule.src,
        dest: rule.dest,
        protocol: rule.protocol,
      };
    }

    return postData;
  },
};

const gateway_account_ex = {
  account_create(data) {
    let postData = {};
    postData = {
      userName: data.userName,
      password: Utils.encodedString(
        Utils.logicStringPassword(data.userName, data.password),
      ),
    };

    return postData;
  },
  user_validate(data) {
    const key = Utils.getSessionStorage(STORAGE_ACCESS_TOKEN).substr(0, 16);
    let postData = {};
    const encPassword = Hash_Gen.encodedStringAES(data.password, key);
    const stringEncodeOldPassword = Utils.logicStringPassword(
      data.userName,
      encPassword,
    );
    const passwordHashOldPassword = Utils.encodedString(
      stringEncodeOldPassword,
    );

    postData = {
      type: TYPE_ACCOUNT.WEB,
      userName: data.userName,
      password: passwordHashOldPassword,
    };

    return postData;
  },
  change_password(data) {
    const key = Utils.getSessionStorage(STORAGE_ACCESS_TOKEN).substr(0, 16);
    const noChangeUserName = data.userName === data.originUserName;
    let userNameOldPassword = data.userName;
    if (!noChangeUserName) {
      userNameOldPassword = data.originUserName;
    }
    const encOldPassword = Hash_Gen.encodedStringAES(data.oldPassword, key);
    const encNewPassword = Hash_Gen.encodedStringAES(data.newPassword, key);
    const stringEncodeOldPassword = Utils.logicStringPassword(
      userNameOldPassword,
      encOldPassword,
    );
    const passwordHashOldPassword = Utils.encodedString(
      stringEncodeOldPassword,
    );

    const stringEncodeNewPassword = Utils.logicStringPassword(
      data.userName,
      encNewPassword,
    );
    const passwordHashNewPassword = Utils.encodedString(
      stringEncodeNewPassword,
    );
    const vLevel = Utils.calculateLevel(data.newPassword);
    const postData = {
      userName: data.userName,
      oldPassword: passwordHashOldPassword,
      newPassword: passwordHashNewPassword,
      level: vLevel,
      type: TYPE_ACCOUNT.WEB,
    };
    if (!noChangeUserName) {
      postData.oldUserName = userNameOldPassword;
    }

    return postData;
  },
};
const media_share_ex = {
  ftp_update(cdata) {
    let postData = {};
    postData = {
      active: cdata.active,
      port: cdata.port,
      ftps: cdata.ftps,
      account: {
        name: cdata.account.name,
        password:
          cdata.account.name !== ANONYMOUS_ACCOUNT.value
            ? Utils.encodedString(
              Utils.logicStringPassword(
                cdata.account.name,
                cdata.account.nPassword,
              ),
            )
            : '',
      },
      networkFolder: cdata.networkFolder,
    };

    return postData;
  },
  usb_remove(cdata) {
    let postData = {};
    postData = {
      usbs: [{ id: cdata.id, name: cdata.name }],
    };

    return postData;
  },
  media_server_dlna(cdata) {
    let postData = {};
    postData = {
      active: cdata.active,
      name: cdata.name,
      scanInterval: cdata.scanInterval,
      networkFolder: cdata.networkFolder,
    };

    return postData;
  },
  windows_network(cdata) {
    let postData = {};
    postData = {
      active: cdata.active,
      connectionName: cdata.connectionName,
      account: {
        name: cdata.account.name,
        password:
          cdata.account.name !== ANONYMOUS_ACCOUNT.value
            ? Utils.encodedString(
              Utils.logicStringPassword(
                cdata.account.name,
                cdata.account.nPassword,
              ),
            )
            : '',
      },
      networkFolder: cdata.networkFolder,
    };

    return postData;
  },
  time_machine(cdata) {
    let postData = {};
    postData = {
      active: cdata.active,
      limitsize: cdata.limitsize,
      account: {
        name: cdata.account.name,
        password:
          cdata.account.name !== ANONYMOUS_ACCOUNT.value
            ? Utils.encodedString(
              Utils.logicStringPassword(
                cdata.account.name,
                cdata.account.nPassword,
              ),
            )
            : '',
      },
      networkFolder: cdata.networkFolder,
    };

    return postData;
  },
  webdav(cdata) {
    let postData = {};
    postData = {
      active: cdata.active,
      url: cdata.url,
      port: cdata.port,
      https: cdata.https,
      account: {
        name: cdata.account.name,
        password:
          cdata.account.name !== ANONYMOUS_ACCOUNT.value
            ? Utils.encodedString(
              Utils.logicStringPassword(
                cdata.account.name,
                cdata.account.nPassword,
              ),
            )
            : '',
      },
      networkFolder: cdata.networkFolder,
    };

    return postData;
  },
  torrent(cdata) {
    let postData = {};
    postData = {
      active: cdata.active,
      url: cdata.url,
      port: cdata.port,
      account: {
        name: cdata.account.name,
        password:
          cdata.account.name !== ANONYMOUS_ACCOUNT.value
            ? Utils.encodedString(
              Utils.logicStringPassword(
                cdata.account.name,
                cdata.account.nPassword,
              ),
            )
            : '',
      },
      usb: {
        id: cdata.usb.id,
        name: cdata.usb.name,
      },
    };

    return postData;
  },
};

const port_forwarding_ex = {
  port_forwarding_rule(rule) {
    let postData = {};
    if (rule) {
      const localPortArr = rule.localPort.split('-');
      const externalPortArr = rule.externalPort.split('-');
      postData = {
        active: rule.active,
        serviceType: rule.serviceType,
        ipAddress: rule.ipAddress,
        localPort: {
          start: localPortArr[0],
          end: localPortArr[1],
        },
        externalPort: {
          start: externalPortArr[0],
          end: externalPortArr[1],
        },
        protocol: rule.protocol.toLowerCase(),
      };
    }

    return postData;
  },
};
const service_ex = {
  dmz(cdata) {
    let postData = {};
    postData = {
      active: cdata.active,
      destination: cdata.destination,
    };

    return postData;
  },
  wakeOnLan_create(cdata) {
    let postData = {};
    postData = {
      deviceId: null,
      macAddress: cdata.macAddress,
      name: cdata.name,
    };

    return postData;
  },
  wakeOnLan_send(cdata) {
    let postData = {};
    postData = {
      id: cdata.id,
      macAddress: cdata.macAddress,
      deviceId: null,
    };

    return postData;
  },
};

const gateway_date_time_ex = {
  date_time_update(data) {
    let postData = {};
    const daylightSavingTime = {
      active: data.daylightSavingTime.active,
      startDate: null,
      endDate: null,
    };
    const ntp = {
      server: data.ntp.server,
      active: data.ntp.active,
    };

    postData = {
      daylightSavingTime,
      ntp,
      timeZone: data.timeZone,
    };

    return postData;
  },
};

const wireless_ex = {
  wireless_schedule_rule(rule) {
    let postData = {};
    postData = {
      active: rule.active,
      day: rule.day,
      startTime: rule.startTime,
      endTime: rule.endTime,
    };

    return postData;
  },
};

const firmware_ex = {
  upgrade_firmware_with_file(file) {
    const postFileData = new FormData();
    postFileData.append('file', file);

    return postFileData;
  },
  upgrade_firmware_without_file() {
    let postData = {};
    postData = {
      type: 'server',
    };

    return postData;
  },
};

const gateway_op_ex = {
  update_qmode(preData, OPMode) {
    const postData = {};
    postData.operation = OPMode;
    if (
      OPMode === QMODE_OPERATION.ROUTER
      || OPMode === QMODE_OPERATION.MESH_MASTER
      || OPMode === QMODE_OPERATION.MESH_ROUTER
    ) {
      postData.qmode = QMODE_TYPE.ROUTER;
    } else {
      postData.qmode = QMODE_TYPE.EXTENDER;
    }
    if (
      preData !== null
      && (OPMode === QMODE_OPERATION.REPEATER
        || OPMode === QMODE_OPERATION.MESH_SLAVE
        || OPMode === QMODE_OPERATION.MESH_ROUTER)
    ) {
      const mine = [
        {
          radio: { index: 0, active: true },
          ssid: {
            name: preData.ssid24Ghz ? preData.ssid24Ghz.ssid : preData.ssid,
            password: preData.ssid24Ghz
              ? preData.ssid24Ghz.password
              : preData.password,
          },
        },
        {
          radio: { index: 1, active: true },
          ssid: {
            name: preData.ssid5Ghz1 ? preData.ssid5Ghz1.ssid : preData.ssid,
            password: preData.ssid5Ghz1
              ? preData.ssid5Ghz1.password
              : preData.password,
          },
        },
        {
          radio: { index: 2, active: true },
          ssid: {
            name: preData.ssid5Ghz2 ? preData.ssid5Ghz2.ssid : preData.ssid,
            password: preData.ssid5Ghz2
              ? preData.ssid5Ghz2.password
              : preData.password,
          },
        },
      ];
      postData.connection = null;
      postData.mine = mine;
    } else {
      postData.connection = null;
    }

    return postData;
  },
};

const wifi_ex = {
  update__wizard_ssid(data) {
    let postData = {};
    postData = {
      APIsolate: data.APIsolate,
      accessControl: data.accessControl,
      active: data.active,
      hiddenSSID: data.hiddenSSID,
      index: data.index,
      internetOnly: data.internetOnly,
      macAddress: data.macAddress,
      name: data.name,
      enterprise: null,
      web: null,
      security: data.security,
      webUIAccess: data.webUIAccess,
      type: data.type,
    };

    return postData;
  },
};

const gateway_ex = {
  gateway_reboot_schedule(data) {
    let postData = {};
    postData = {
      active: data.active,
      day: [data.scheduleDay],
      startTime: data.startTime,
    };

    return postData;
  },
};

export default {
  mac_filtering_ex,
  ip_port_filtering_ex,
  media_share_ex,
  port_forwarding_ex,
  gateway_account_ex,
  service_ex,
  gateway_date_time_ex,
  wireless_ex,
  firmware_ex,
  gateway_op_ex,
  wifi_ex,
  gateway_ex,
};
