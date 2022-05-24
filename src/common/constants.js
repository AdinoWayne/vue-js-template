/* eslint-disable */
//cookie
export const STORAGE_ACCESS_TOKEN = "accessToken";
export const STORAGE_USER_ROLE = "userRole";
export const STORAGE_USER_NAME = "userName";
export const STORAGE_SWITCH_MODE = "switchMode";
export const STORAGE_PERMISSIONS = "permissions";
export const STORAGE_LANGUAGE = "storageLanguage";
export const STORAGE_STATUS_POLICY = "statusPolicy";
export const STORAGE_IS_DEFAULT_USER = "isDefaultUser";
// export const COOKIE_OPMODE = "cookieOperationMode";
export const STORAGE_SYSTEM_TIMER_PING = "storageSystemTimerPing";
export const STORAGE_FIRMWARE = "storageFirmware";
export const STORAGE_MODEL_NAME = "storageModelName";
export const STORAGE_LOGIN_TIMESTAMP = "storageLoginTimestamp";
export const STORAGE_RM = "storageRM";
export const STORAGE_MESH_MODE = "meshMode";

//type
export const REGO_TYPE = "web";

export const STATUS_CODE = {
  OK: 200,
  NOT_IMPLEMENTED: 501,
  UNAUTHORIZED: 401,
  NO_RESOURCE: 404,
  UNPROCESSABLE_ENTITY: 422,    
  // Eror Attributes
  SESSION_EXPIRED: 2003,
  EXPIRED_TOKEN: 2004,
  BACKUP_FAILED: 4001,
  RESTORE_FAILED: 4002,
  INVALID_FILE_UPDATE: 4015  
};

export const SECURITY_TYPE = {
  NONE: "NONE",
  WPA2_PSK: "WPA2-PSK",
  WPA_PSK: "WPA-PSK",
  WPA2_WPA_PSK: "WPA2/WPA-PSK",
  WPA2_ENTERPRISE: "WPA2-Enterprise",
  WPA2_WPA_ENTERPRISE: "WPA2/WPA-Enterprise",
  WPA3_SAE: "WPA3-SAE",
  WPA3_SAE_WPA2_PSK: "WPA3-SAE/WPA2-PSK"
};

export const SECURITY_ENCRYPTION_TYPE = {
  TKIP: "TKIP",
  AES: "AES",
  AES_TKIP: "AES/TKIP"
};

export const APP_URL = {
  LOGIN: {
    url: "/"
  },
  INITIAL_LOGIN: {
    url: "/initiallogin"
  },
  HOMEPAGE: {
    url: "/home"
  },
  INTERNET: {
    url: "/internet"
  },
  INTERNET_SETTING: {
    url: "internetsetting"
  },
  INTERNET_SETTING_WAN: {
    url: "internetsettingWan"
  },
  WIRELESS: {
    url: "/wireless"
  },
  PRIMARYWIRELESS: {
    url: "primarywireless"
  },
  SECONDARYWIRELESS: {
    url: "secondarywireless"
  },
  WIRELESSSCHEDULE: {
    url: "wirelessschedule"
  },
  MACACCESSCONTROL: {
    url: "macaccesscontrol"
  },
  MESHNETWORKSETTING: {
    url: "meshnetworksetting"
  },
  RESERVED_IP: {
    url: "reservedIp"
  },
  LAN: {
    url: "/lan"
  },
  LANSETTING: {
    url: "lansetting"
  },
  RESERVEDIP: {
    url: "reservedip"
  },
  PARENTAL: {
    url: "/parental"
  },
  SECURITY: {
    url: "/security"
  },
  MAC_FILTERING: {
    url: "macfiltering"
  },
  IP_FILTERING: {
    url: "ipfiltering"
  },
  CHECK: {
    url: "selfcheck"
  },
  QOS: {
    url: "/qos"
  },
  IPTV: {
    url: "iptv"
  },
  MEDIA: {
    url: "/media"
  },
  USB: {
    url: "usb"
  },
  FTP_SERVER: {
    url: "ftpserver"
  },
  MEDIA_SERVER: {
    url: "mediaserver"
  },
  WINDOW_MEDIA_SERVER: {
    url: "windowmediaserver"
  },
  WEB_DAV: {
    url: "webdav"
  },
  PRINTER_SERVER: {
    url: "printerserver"
  },
  SERVICE: {
    url: "/service"
  },
  PACKET_FILTERING: {
    url: "packetfiltering"
  },
  DDNS: {
    url: "ddns"
  },
  PORT_FORWARDING: {
    url: "portforwarding"
  },
  PORT_TRIGGERING: {
    url: "porttriggering"
  },
  DMZ: {
    url: "dmz"
  },
  WOL: {
    url: "wol"
  },
  VPN: {
    url: "vpn"
  },
  ADVANCED: {
    url: "/advanced"
  },
  NETWORK: {
    url: "network"
  },
  ETHERNET_PORT: {
    url: "ethernetport"
  },
  ADVANCED_WIRELESS: {
    url: "advancedwireless"
  },
  BASIC_SETTING: {
    url: "basicsetting"
  },
  SECONDARY_WAN: {
    url: "secondarywan"
  },
  FIREWALL: {
    url: "firewall"
  },
  ROUTING: {
    url: "routing"
  },
  UPNP: {
    url: "upnp"
  },
  IPV6: {
    url: "ipv6"
  },
  DIAGNOSTICS: {
    url: "diagnostics"
  },
  ADVANCED_SECURITY: {
    url: "advancedsecurity"
  },
  MANAGEMENT: {
    url: "/management"
  },
  FIRMWARE_UPDATE: {
    url: "firmwareupdate"
  },
  REMOTE_ACCESS: {
    url: "remoteaccess"
  },
  LOG_ANALYSIS: {
    url: "loganalysis"
  },
  BACKUP_RESTORE: {
    url: "backuprestore"
  },
  FACTORY_RESET: {
    url: "factoryreset"
  },
  LED_MODE: {
    url: "ledmode"
  },
  ECO_MODE: {
    url: "ecomode"
  },
  CHANGE_PASSWORD: {
    url: "changepassword"
  },
  DATE_TIME: {
    url: "datetime"
  },
  OPERATION_MODE: {
    url: "operationmode"
  },
  GUESTWIRELESS: {
    url: "guestwireless"
  },
  NOT_FOUND: {
    url: "*"
  }
};

export const EVENT_BUS = {
  AGREE_PRIVACY: "agree-privacy",
  CLOSE_DRAWER: "close-drawer",
  SHOW_ACTION_BAR: "show-action-bar",
  HIDE_ACTION_BAR: "hide-action-bar",
  OPEN_CONFIRM: "open-confirm",
  CLOSE_CONFIRM: "close-confirm",
  OPEN_COMPLETE: "open-complete",
  CLOSE_COMPLETE: "close-complete",
  OPEN_REBOOT: "open-reboot",
  CLOSE_REBOOT: "close-reboot",
  OPEN_ERROR_CASE: "open-error",
  CLOSE_ERROR_CASE: "close-error",
  HANDLE_PRIMARY_ACTION_BAR: "handle-primary-action-bar",
  INIT_PRIMARY_DATA: "init-primary-data",
  HANDLE_APPLY_PRIMARY_DATA: "handle-apply-primary-data",
  HANDLE_APPLY_BS_DATA: "handle-apply-bs-data",
  COMPLETE_APPLY_PRIMARY_DATA: "complete-apply-primary-data",
  HANDLE_RADIO_ACTION_BAR: "handle-radio-action-bar",
  RE_FETCH_RADIO_DATA: "re-fetch-radio-data",
  RE_FETCH_WPS_DATA: "re-fetch-wps-data",
  HANDLE_APPLY_RADIO_DATA: "handle-apply-radio-data",
  COMPLETE_APPLY_RADIO_DATA: "complete-apply-radio-data",
  RESET_INPUT_MAC_ADDRESS: "reset-input-mac-address",
  OPEN_LOADING_S: "openLoadingS",
  CLOSE_LOADING_S: "closeLoadingS",
  RESET_DIALOG_APP: "resetDialogApp",
  HANDLE_EXPAND_TABLE: "handle-expand-table",
  SENT_DATA: "sentData",
  CHANGE_TAB: "change-tab",
  //  web-socket
  WS: {
    USB_INSERTED: "usbInserted",
    USB_REMOVED: "usbRemoved"
  },
  OPEN_CREATE_PASSWORD: "openCreatePassword",
  OPEN_CHANGE_PASSWORD: "openChangePassword",
  CHANGE_AUTH_SAVED: "changeAuthSaved",
  RE_FRESH_HEADER: "refreshHeader",
  CHANGE_SKIP_WIZARD: "changeSkipWizard",
  OPEN_PRIVACY_DIALOG: "open-privacy-dialog",
  RE_FETCH_LOG_DATA: "re-fetch-log-data",
  RECEIVED_LOG_DATA: "received-log-data",
  PRI_RADIO_DATA: "pri-radio-data",
  SEC_RADIO_DATA: "sec-radio-data",
  BASIC_RADIO_DATA: "basic-radio-data"
};

export const SIDE_BAR = {
  LANGUAGE: "language",
  HELP: "help",
  LOGOUT: "logout"
};

export const SWITCH_MODE_TYPE = {
  ROUTER: "router",
  BRIDGE: "bridge",
  REPEATER: "repeater",
  AP: "ap"
};

export const QMODE_OPERATION = {
  ROUTER: "router",
  REPEATER: "repeater",
  AP: "ap",
  MESH_MASTER: "mesh master",
  MESH_SLAVE: "mesh slave",
  MESH_AP: "mesh ap",
  MESH_ROUTER: "mesh router"
};

export const MENU_TYPE = {
  MAIN: "mainMenu",
  SUB: "subMenu",
  MAP: "map",
  OTHER: "other"
};

export const CONNECTION_STATUS = {
  CONNECTED: "connected",
  DISCONNECTED: "disconnected",
  CONNECTING: "connecting"
};

export const MAC_FILTERING_MODE = {
  WHITE: {
    value: "whitelist",
    text: "mac_filtering_white_mode"
  },
  BLACK: {
    value: "blacklist",
    text: "mac_filtering_black_mode"
  }
};

export const WPS_MODE = {
  PUSH: {
    value: "push",
    text: "wps_push_radio_button"
  },
  PIN: {
    value: "usePin",
    text: "wps_use_pin_number_radio_button"
  }
};

export const LIST_SECURITY_TYPE = [
  {
    text: "wireless_homepage_security_none",
    value: "NONE"
  },
  {
    text: "wireless_homepage_security_wpa2_psk",
    value: "WPA2-PSK"
  },
  {
    text: "wireless_homepage_security_wpa2_wpa_psk",
    value: "WPA2/WPA-PSK"
  },
  {
    text: "wireless_homepage_security_wpa2_enterprise",
    value: "WPA2-Enterprise"
  },
  {
    text: "wireless_homepage_security_wpa2_wpa_enterprise",
    value: "WPA2/WPA-Enterprise"
  },
  {
    text: "wireless_homepage_security_wpa3_sae",
    value: "WPA3-SAE"
  },
  {
    text: "wireless_homepage_security_wpa3_wpa2_psk",
    value: "WPA3-SAE/WPA2-PSK"
  }
];
export const LIST_SECURITY_TYPE_PRIMARY = [
  {
    text: "wireless_homepage_security_none",
    value: "NONE"
  },
  {
    text: "wireless_homepage_security_wpa2_psk",
    value: "WPA2-PSK"
  },
  {
    text: "wireless_homepage_security_wpa2_wpa_psk",
    value: "WPA2/WPA-PSK"
  },
  {
    text: "wireless_homepage_security_wpa3_sae",
    value: "WPA3-SAE"
  },
  {
    text: "wireless_homepage_security_wpa3_wpa2_psk_mixed",
    value: "WPA3-SAE/WPA2-PSK"
  }
];

export const LIST_ENCRYPTION = [
  {
    text: "wireless_page_encryption_tkip",
    value: "TKIP"
  },
  {
    text: "wireless_page_encryption_aes",
    value: "AES"
  },
  {
    text: "wireless_page_encryption_aes_tkip",
    value: "AES/TKIP"
  }
];

export const LIST_KEY_TYPE = [
  {
    text: "wireless_page_key_type_character",
    value: "Character String"
  },
  {
    text: "wireless_page_key_type_hexadecimal",
    value: "Hexadecimal"
  }
];

export const CONFIRM_DIALOG_TYPE = {
  WARNING: "warning",
  UPGRADE_PROCESS: "upgradeProcess"
};

export const COMPLETE_DIALOG_TYPE = {
  COMPLETE: "complete",
  WARNING: "warning"
};
export const ERROR_DIALOG_TYPE = {
  ERROR: "error"
};
export const IPTV_DISABLED_VLAN = [
  "KT",
  "SKB/LGU+",
  "AIS",
  "Singapore-ExStream",
  "Malaysia-Maxis",
  "Malaysia-Unifi",
  "Bridge"
];

export const IGMP_VERSION_LIST = [
  {
    text: "v2",
    value: 2
  },
  {
    text: "v3",
    value: 3
  }
];

export const DEVICE_MODE = {
  MOBILE: 1,
  PC: 0
};

export const INTERNET_WAN_NAME = [
  {
    text: "network_wan_internet",
    value: "rg"
  },
  {
    text: "network_wan_iptv",
    value: "iptv"
  },
  {
    text: "network_wan_voice",
    value: "voice"
  },
  {
    text: "network_wan_community",
    value: "communitywifi"
  },
  {
    text: "text_menu_management",
    value: "mgmt"
  }
];

export const LIST_CONNECTION_TYPE_PPP = [
  {
    text: "internet_setting_list_on_demand",
    value: "ondemand"
  },
  {
    text: "security_firewall_card_list_led_mod_always_on",
    value: "always"
  },
  {
    text: "security_firewall_card_list_led_mod_always_off",
    value: "off"
  }
];
export const LIST_AUTHENTICATION_TYPE = [
  {
    text: "internet_setting_list_auto",
    value: "auto"
  },
  {
    text: "internet_setting_list_pap",
    value: "pap"
  },
  {
    text: "internet_setting_list_chap",
    value: "chap"
  }
];
export const IPV4 = {
  SUBNET_MASKS: ["255.255.255.0", "255.255.0.0", "255.0.0.0"],
  CLASS_IPVs: ["192", "172", "10"],
  SUB_CLASS_IPs: [
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
  ]
};

export const LIST_PROTOCOL = [
  {
    value: "tcp/udp",
    text: "TCP/UDP"
  },
  {
    value: "tcp",
    text: "TCP"
  },
  {
    value: "udp",
    text: "UDP"
  }
];
export const DEVICE_INTERFACE = {
  LAN: "lan",
  TWO_FOUR: "2.4g",
  FIVE: "5g",
  GUEST_TWO_FOUR: "guest2.4g",
  GUEST_FIVE: "guest5g",
  UNKNOWN: "Unknown"

};
export const DEVICE_NETWORK_TYPE = {
  PRIMARY: "primary",
  GUEST: "guest"
};

export const LIST_QOS_PRIORITY = [
  {
    text: "qos_page_add_edit_ultra_priority",
    value: "ultra"
  },
  {
    text: "qos_page_add_edit_high_priority",
    value: "high"
  }
];

export const ANONYMOUS_ACCOUNT = {
  value: "Anonymous",
  label: "Anonymous"
};

export const LIST_LOG_FILE_TYPE = [
  {
    text: "advanced_logs_type_general",
    value: "general"
  },
  {
    text: "advanced_logs_type_security",
    value: "security"
  },
  {
    text: "advanced_logs_type_wireless",
    value: "wlan"
  }
];

export const MEDIA_SHARE_AUTH = {
  WRITE_READ: {
    value: "rw",
    text: "mediashare_usb_network_folder_card_table_write_read"
  },
  READ: {
    value: "ro",
    text: "mediashare_usb_network_folder_card_table_read"
  }
};

export const LIST_PROTOCOL_VPN = [
  {
    text: "PPTP",
    value: "pptp"
  },
  {
    text: "L2TP",
    value: "l2tp"
  },
  {
    text: "OpenVPN",
    value: "openvpn"
  }
];
export const SERVICE_TYPE = {
  HTTP: {
    NAME: "HTTP",
    START_PORT: 80,
    END_PORT: 80,
    PROTOCOL: "TCP"
  },
  HTTPS: {
    NAME: "HTTPS",
    START_PORT: 443,
    END_PORT: 443,
    PROTOCOL: "TCP"
  },
  FTP: {
    NAME: "FTP",
    START_PORT: 20,
    END_PORT: 21,
    PROTOCOL: "TCP"
  },
  TFTP: {
    NAME: "TFTP",
    START_PORT: 69,
    END_PORT: 69,
    PROTOCOL: "UDP"
  },
  SMTP: {
    NAME: "SMTP",
    START_PORT: 25,
    END_PORT: 25,
    PROTOCOL: "TCP"
  },
  POP3: {
    NAME: "POP3",
    START_PORT: 110,
    END_PORT: 110,
    PROTOCOL: "TCP"
  },
  NNTP: {
    NAME: "NNTP",
    START_PORT: 119,
    END_PORT: 119,
    PROTOCOL: "TCP"
  },
  TELNET: {
    NAME: "Telnet",
    START_PORT: 23,
    END_PORT: 23,
    PROTOCOL: "TCP"
  },
  IRC: {
    NAME: "IRC",
    START_PORT: 194,
    END_PORT: 194,
    PROTOCOL: "TCP"
  },
  SNMP: {
    NAME: "SNMP",
    START_PORT: 161,
    END_PORT: 162,
    PROTOCOL: "UDP"
  },
  FINGER: {
    NAME: "Finger",
    START_PORT: 79,
    END_PORT: 79,
    PROTOCOL: "TCP"
  },
  GOPHER: {
    NAME: "Gopher",
    START_PORT: 70,
    END_PORT: 70,
    PROTOCOL: "TCP"
  },
  LDAP: {
    NAME: "LDAP",
    START_PORT: 389,
    END_PORT: 389,
    PROTOCOL: "TCP"
  },
  UUCP: {
    NAME: "UUCP",
    START_PORT: 540,
    END_PORT: 540,
    PROTOCOL: "TCP"
  },
  RDP: {
    NAME: "RDP",
    START_PORT: 3389,
    END_PORT: 3389,
    PROTOCOL: "TCP"
  }
};

export const SERVER_OPTIONS = [
  {
    serviceType: SERVICE_TYPE.HTTP.NAME,
    start_port: SERVICE_TYPE.HTTP.START_PORT,
    end_port: SERVICE_TYPE.HTTP.END_PORT,
    protocol: SERVICE_TYPE.HTTP.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.HTTPS.NAME,
    start_port: SERVICE_TYPE.HTTPS.START_PORT,
    end_port: SERVICE_TYPE.HTTPS.END_PORT,
    protocol: SERVICE_TYPE.HTTPS.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.FTP.NAME,
    start_port: SERVICE_TYPE.FTP.START_PORT,
    end_port: SERVICE_TYPE.FTP.END_PORT,
    protocol: SERVICE_TYPE.FTP.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.TFTP.NAME,
    start_port: SERVICE_TYPE.TFTP.START_PORT,
    end_port: SERVICE_TYPE.TFTP.END_PORT,
    protocol: SERVICE_TYPE.TFTP.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.SMTP.NAME,
    start_port: SERVICE_TYPE.SMTP.START_PORT,
    end_port: SERVICE_TYPE.SMTP.END_PORT,
    protocol: SERVICE_TYPE.SMTP.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.POP3.NAME,
    start_port: SERVICE_TYPE.POP3.START_PORT,
    end_port: SERVICE_TYPE.POP3.END_PORT,
    protocol: SERVICE_TYPE.POP3.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.NNTP.NAME,
    start_port: SERVICE_TYPE.NNTP.START_PORT,
    end_port: SERVICE_TYPE.NNTP.END_PORT,
    protocol: SERVICE_TYPE.NNTP.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.TELNET.NAME,
    start_port: SERVICE_TYPE.TELNET.START_PORT,
    end_port: SERVICE_TYPE.TELNET.END_PORT,
    protocol: SERVICE_TYPE.TELNET.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.IRC.NAME,
    start_port: SERVICE_TYPE.IRC.START_PORT,
    end_port: SERVICE_TYPE.IRC.END_PORT,
    protocol: SERVICE_TYPE.IRC.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.SNMP.NAME,
    start_port: SERVICE_TYPE.SNMP.START_PORT,
    end_port: SERVICE_TYPE.SNMP.END_PORT,
    protocol: SERVICE_TYPE.SNMP.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.FINGER.NAME,
    start_port: SERVICE_TYPE.FINGER.START_PORT,
    end_port: SERVICE_TYPE.FINGER.END_PORT,
    protocol: SERVICE_TYPE.FINGER.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.GOPHER.NAME,
    start_port: SERVICE_TYPE.GOPHER.START_PORT,
    end_port: SERVICE_TYPE.GOPHER.END_PORT,
    protocol: SERVICE_TYPE.GOPHER.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.LDAP.NAME,
    start_port: SERVICE_TYPE.LDAP.START_PORT,
    end_port: SERVICE_TYPE.LDAP.END_PORT,
    protocol: SERVICE_TYPE.LDAP.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.UUCP.NAME,
    start_port: SERVICE_TYPE.UUCP.START_PORT,
    end_port: SERVICE_TYPE.UUCP.END_PORT,
    protocol: SERVICE_TYPE.UUCP.PROTOCOL
  },
  {
    serviceType: SERVICE_TYPE.RDP.NAME,
    start_port: SERVICE_TYPE.RDP.START_PORT,
    end_port: SERVICE_TYPE.RDP.END_PORT,
    protocol: SERVICE_TYPE.RDP.PROTOCOL
  }
];

export const ACCOUNT_TYPE = {
  MEDIASHARE: "mediashare",
  VPN: "vpn",
  WEB: "web"
};

export const LIST_PROTOCOL_OPENVPN = [
  {
    text: "TCP",
    value: "tcp"
  },
  {
    text: "UDP",
    value: "udp"
  }
];

export const LIST_SENSITIVE_ID = ["admin", "Admin", "root", "Anonymous"];

export const TYPE_ACCOUNT = {
  MEDIASHARE: "mediashare",
  VPN: "vpn",
  WEB: "web"
};

export const DDNS_MODEL = {
  DYNDNS: 0,
  NOIP: 1,
  DUCKDNS: 2,
  HUMAXDNS: 3
};

export const USB_PORT_COUNT = 1;

export const USER_PW_SECURITYLEVEL = {
  WEAK: "weak",
  MEDIUM: "medium",
  STRONG: "strong"
};


export const LIST_LED_MODE = [
  {
    text: "security_firewall_card_list_led_mod_always_on",
    value: "always"
  },
  {
    text: "security_firewall_card_list_led_mod_always_off",
    value: "power"
  },
  {
    text: "management_led_mode_schedule_mode",
    value: "specific"
  }
];

export const LIST_ECO_MODE_TYPE = [
  {
    text: "eco_mode_type_speed_limit",
    value: 1
  },
  {
    text: "eco_mode_type_led_lighting",
    value: 2
  },
  {
    text: "eco_mode_type_specific_time",
    value: 3
  }
];
export const LIST_ECO_MODE_TYPE_MESS = [
  {
    text: "eco_mode_type_speed_limit_message",
    value: 1
  },
  {
    text: "eco_mode_type_led_lighting_message",
    value: 2
  },
  {
    text: "eco_mode_type_specific_time_message",
    value: 3
  }
];

export const LIST_PROTECTION_MODE = [
  {
    text: "management_eco_mode_wan_lan_1gbps",
    value: "always"
  },
  {
    text: "management_eco_mode_wan_lan_1gbps_july_september",
    value: "specific"
  }
];

export const LIST_UTILITY = [
  {
    text: "advanced_diagnostics_page_ping_test_lts_utility",
    value: "ping"
  },
  {
    text: "advanced_diagnostics_page_traceroute_lts_utility",
    value: "traceroute"
  }
];

export const DIAGNOSTICS = {
  PING: "ping",
  TRACEROUTE: "traceroute",
  REQUESTED: "requested",
  MAX_REQUEST_COUNT: 500
};

export const LIST_WAN_NAME = [
  {
    text: "advanced_secondary_wan_status_card_ethernet",
    value: "default"
  },
  {
    text: "advanced_secondary_wan_status_card_USB",
    value: "UsbMobileModem"
  },
  {
    text: "advanced_secondary_wan_status_card_android_tethering",
    value: "AndroidTethering"
  }
];

export const LIST_WAN_TYPE = [
  {
    text: "common_text_load_balance",
    value: 0
  },
  {
    text: "common_text_fail_over",
    value: 1
  }
];

export const LIST_LAN_LIST = [
  {
    text: "advanced_ethernet_port_internet_port",
    value: "internet"
  },
  {
    text: "common_lan_port_number",
    value: "lan1"
  },
  {
    text: "common_lan_port_number",
    value: "lan2"
  },
  {
    text: "common_lan_port_number",
    value: "lan3"
  },
  {
    text: "common_lan_port_number",
    value: "lan4"
  }
];

export const SPEED_OF_PORT = [
  {
    text: "advanced_ethernet_port_auto",
    value: "auto"
  },
  {
    text: "advanced_ethernet_port_1G_full",
    value: "1g full"
  },
  {
    text: "advanced_ethernet_port_100M_full",
    value: "100m full"
  },
  {
    text: "advanced_ethernet_port_100M_half",
    value: "100m half"
  },
  {
    text: "advanced_ethernet_port_10M_full",
    value: "10m full"
  },
  {
    text: "advanced_ethernet_port_10M_half",
    value: "10m half"
  }
];
export const RESTART_SCHEDULE = {
  DAY: [
    {
      text: "Monday",
      value: "mon"
    },
    {
      text: "Tuesday",
      value: "tue"
    },
    {
      text: "Wednesday",
      value: "wed"
    },
    {
      text: "Thursday",
      value: "thu"
    },
    {
      text: "Friday",
      value: "fri"
    },
    {
      text: "Saturday",
      value: "sat"
    },
    {
      text: "Sunday ",
      value: "sun"
    }
  ],
  TIME: [
    {
      value: "00:00"
    },
    {
      value: "01:00"
    },
    {
      value: "02:00"
    },
    {
      value: "03:00"
    },
    {
      value: "04:00"
    },
    {
      value: "05:00"
    },
    {
      value: "06:00"
    },
    {
      value: "07:00"
    },
    {
      value: "08:00"
    },
    {
      value: "09:00"
    },
    {
      value: "10:00"
    },
    {
      value: "11:00"
    },
    {
      value: "12:00"
    },
    {
      value: "13:00"
    },
    {
      value: "14:00"
    },
    {
      value: "15:00"
    },
    {
      value: "16:00"
    },
    {
      value: "17:00"
    },
    {
      value: "18:00"
    },
    {
      value: "19:00"
    },
    {
      value: "20:00"
    },
    {
      value: "21:00"
    },
    {
      value: "22:00"
    },
    {
      value: "23:00"
    }
  ],
  DEFAULT_DAY: "thurs",
  DEFAULT_TIME: "04:00"
};
export const WAN_IPV6_TYPE = [
  {
    text: "lan_dhcpv6",
    value: "dhcpv6"
  },
  {
    text: "advanced_ipv6_page_text_static_ipv6",
    value: "static"
  }
];
export const MODE_IPV6 = [
  {
    text: "lan_dhcpv6",
    value: "dhcpv6"
  },
  {
    text: "lan_ipv6_page_text_slaac",
    value: "slaac"
  }
];

export const LIST_SIDEBAND = [
  {
    text: "advanced_wireless_list_sideband_upper",
    value: "upper"
  },
  {
    text: "advanced_wireless_list_sideband_lower",
    value: "lower"
  }
];

export const LIST_OUTPUT_POWER = [
  {
    text: "advanced_wireless_list_output_power_high",
    value: "high"
  },
  {
    text: "advanced_wireless_list_output_power_medium",
    value: "medium"
  },
  {
    text: "advanced_wireless_list_output_power_low",
    value: "low"
  }
];

export const LIST_GUARD_INTERVAL = [
  {
    text: "advanced_wireless_list_short_guard_interval_auto",
    value: "auto"
  },
  {
    text: "advanced_wireless_list_short_guard_interval_short",
    value: "short"
  },
  {
    text: "advanced_wireless_list_short_guard_interval_normal",
    value: "normal"
  },
  {
    text: "advanced_wireless_list_short_guard_interval_long",
    value: "long"
  }
];
export const FIRMWARE_UPDATE_SELECT = {
  auto: {
    value: "auto",
    text: "management_firmware_choose_firmware_msg_radio_1"
  },
  manual: {
    value: "manual",
    text: "management_firmware_choose_firmware_msg_radio_2"
  }
};

export const LIST_PF_TYPE = [
  {
    text: "Allow",
    value: "allow"
  },
  {
    text: "Deny",
    value: "deny"
  }
];
export const LIST_PF_TARGET_INTERFACE = [
  {
    text: "WAN->LAN",
    value: 0
  },
  {
    text: "LAN->WAN",
    value: 1
  }
];
export const LIST_PF_PROTOCOL_IPv4 = [
  {
    text: "IPv4",
    value: "ipv4"
  },
  {
    text: "ICMPv4",
    value: "icmpv4"
  },
  {
    text: "TCP",
    value: "tcp"
  },
  {
    text: "UDP",
    value: "udp"
  }
];

export const LIST_PF_PROTOCOL_IPv6 = [
  {
    text: "IPv6",
    value: "ipv6"
  },
  {
    text: "ICMPv6",
    value: "icmpv6"
  },
  {
    text: "TCP",
    value: "tcp"
  },
  {
    text: "UDP",
    value: "udp"
  }
];

export const LIST_PF_ICMP_TYPE_IPv6 = [
  {
    text: "Neighbor-Advertisement",
    value: "neighbor-advertisement"
  },
  {
    text: "Neighbor-Solicitation",
    value: "neighbor-solicitation"
  },
  {
    text: "Router-Advertisement",
    value: "router-advertisement"
  },
  {
    text: "Router-Solicitation",
    value: "router-solicitation"
  }
];

export const REGIONS = [
  {
    text: "Austria",
    value: "AT"
  },
  {
    text: "Bahrain",
    value: "BH"
  },
  {
    text: "Denmark",
    value: "DK"
  },
  {
    text: "Finland",
    value: "FI"
  },
  {
    text: "France",
    value: "FR"
  },
  {
    text: "Germany",
    value: "DE"
  },
  {
    text: "Iran",
    value: "IR"
  },
  {
    text: "Italia",
    value: "IT"
  },
  {
    text: "Japan",
    value: "JP"
  },
  {
    text: "Kuwait",
    value: "KW"
  },
  {
    text: "Norway",
    value: "NO"
  },
  {
    text: "Oman",
    value: "OM"
  },
  {
    text: "Portugal",
    value: "PT"
  },
  {
    text: "Qatar",
    value: "QA"
  },
  {
    text: "Republic of Korea",
    value: "KR"
  },
  {
    text: "Russia",
    value: "RU"
  },
  {
    text: "Saudi Arabia",
    value: "SA"
  },
  {
    text: "Spain",
    value: "ES"
  },
  {
    text: "Sweden",
    value: "SE"
  },
  {
    text: "Thailand",
    value: "TH"
  },
  {
    text: "Turkey",
    value: "TR"
  },
  {
    text: "UAE",
    value: "AE"
  },
  {
    text: "United Kingdom",
    value: "GB"
  },
  {
    text: "United States of America",
    value: "US"
  },
  {
    text: "Vietnam",
    value: "VN"
  },
  {
    text: "-",
    value: "XX"
  }
];

export const WAN_CONNECTION_TYPE = [
  {
    text: "network_internet_page_card_dynamic_ip",
    value: "dynamic"
  },
  {
    text: "network_internet_page_card_static_ip",
    value: "static"
  },
  {
    text: "network_internet_page_card_pppoe",
    value: "pppoe"
  }
];

export const INTERNET_WAN_CONNECTION_TYPE = [
  {
    text: "PPPoE",
    value: "pppoe"
  },
  {
    text: "IPoE",
    value: "ipoe"
  },
  {
    text: "Bridge",
    value: "bridge"
  }
];

export const INTERNET_WAN_PROTOCOL_VERSION = [
  {
    text: "IPv4",
    value: "ipv4"
  },
  {
    text: "IPv6",
    value: "ipv6"
  },
  {
    text: "IPv4/IPv6",
    value: "ipv4/ipv6"
  }
];

export const INTERNET_WAN_IPV4_CONNECTION_TYPE = [
  {
    text: "network_internet_page_card_dynamic_ip",
    value: "dynamic"
  },
  {
    text: "network_internet_page_card_static_ip",
    value: "static"
  }
];

export const INTERNET_WAN_VLAN_MODE = [
  {
    text: "TAG",
    value: "tag"
  },
  {
    text: "UNTAG",
    value: "untag"
  }
];

export const INTERNET_WAN_NAT = [
  {
    text: "Router",
    value: "router"
  },
  {
    text: "Bridge",
    value: "bridge"
  }
];

export const LIST_SEVERITY = [
  {
    text: "emerg",
    value: 0
  },
  {
    text: "alert",
    value: 1
  },
  {
    text: "crit",
    value: 2
  },
  {
    text: "error",
    value: 3
  },
  {
    text: "warning",
    value: 4
  },
  {
    text: "notice",
    value: 5
  },
  {
    text: "info",
    value: 6
  },
  {
    text: "debug",
    value: 7
  }
];

export const USER_ROLE = {
  TECHNICIAN: "technician",
  ROOT: "root",
  ADMIN: "admin"
};

export const LIST_PON_STATE = [
  {
    text: "pon_homepage_state_initial",
    value: "O1"
  },
  {
    text: "pon_homepage_state_standby",
    value: "O2"
  },
  {
    text: "pon_homepage_state_serial_number",
    value: "O3"
  },
  {
    text: "pon_homepage_state_ranging",
    value: "O4"
  },
  {
    text: "pon_homepage_state_operation",
    value: "O5"
  }
];
export const LIST_ADDRESS_ASSIGNMENT = [
  {
    text: "internet_setting_list_auto",
    value: "auto"
  },
  {
    text: "text_manual",
    value: "manual"
  }
];
export const LIST_ROUTING_INTERFACE_TYPE = [
  {
    text: "advanced_routing_ae_interface_type_wan_pppoe",
    value: 1
  },
  {
    text: "lan_title_card",
    value: 0
  }
];
export const LIST_PROTOCOL_TYPE = [
  {
    text: "lan_ipv4",
    value: "ipv4"
  },
  {
    text: "lan_ipv6",
    value: "ipv6"
  }
];
export const LIST_IPV6_ADDR_TYPE = [
  {
    text: "advanced_diagnostics_page_ipv6_type_global_addr",
    value: "global"
  },
  {
    text: "advanced_diagnostics_page_ipv6_type_link_local_addr_lan",
    value: "linklocal"
  },
  {
    text: "advanced_diagnostics_page_ipv6_type_link_local_addr_commufa",
    value: "commufa"
  }
];
export const LIST_SECURITY_MFP_TYPE = [
  {
    text: "internet_setting_list_auto",
    value: "capable"
  },
  {
    text: "text_status_off",
    value: "disabled"
  },
  {
    text: "text_status_on",
    value: "required"
  }
];
