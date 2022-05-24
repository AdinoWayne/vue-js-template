// common
export const SHOW_LOADING = 'showLoading';
export const HIDE_LOADING = 'hideLoading';
export const SHOW_ERROR = 'showError';
export const HIDE_ERROR = 'hideError';
export const SHOW_WIZARD = 'showWizard';
export const HIDE_WIZARD = 'hideWizard';
export const CHANGE_DEVICE_TYPE = 'changeDeviceType';
export const SHOW_NAV = 'showNav';
export const HIDE_NAV = 'hideNav';
export const SHOW_SIDE = 'showSide';
export const HIDE_SIDE = 'hideSide';
export const SHOW_HELP = 'showHelp';
export const HIDE_HELP = 'hideHelp';
export const CHANGE_APP_WIDTH = 'changeAppWidth';
export const CHANGE_MODE_SCREEN = 'changeModeScreen';
export const CHANGE_RENDER = 'changeRender';
export const CHANGE_RENDER_PARENT = 'changeRenderParent';

// gateway
export const FETCH_AUTH = 'fetchAuth';
export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const FETCH_ABOUT = 'fetchAbout';
export const FETCH_CONNECTIVITY = 'fetchConnectivity';
export const FETCH_REBOOT = 'fetchReboot';
export const FETCH_REBOOT_SCHEDULE = 'fetchRebootSchedule';
export const UPDATE_REBOOT_SCHEDULE = 'updateRebootSchedule';
export const FETCH_DEVICE = 'featchDevice';
export const USER_VALIDATE = 'userValidate';
export const USER_CHANGE_PASSWORD = 'userChangePassword';
export const USER_REFRESH = 'userRefresh';
export const FETCH_DEVICE_CONNECTIVITY = 'fetchDeviceConnectivity';
export const FETCH_DEVICE_GET_ONE = 'fetchDevicGetOne';
export const UPDATE_DEVICE_ONE = 'updateDeviceOne';
export const FETCH_MESH_DEVICE = 'fetchMeshDevice';
export const UPGRADE_MESH_DEVICE = 'upgradeMeshDevice';
export const FETCH_USER_LIST = 'fetchUserList';
export const DELETE_USER_ACCOUNT = 'deleteUserAccount';
export const CREATE_USER_ACCOUNT = 'createUserAccount';

export const UPDATE_STATUS_POLICY = 'updateStatusPolicy';
export const FETCH_STATUS_POLICY = 'fetchStatusPolicy';
export const FETCH_CPU = 'fetchCpu';
export const FETCH_MEMORY = 'fetchMemory';
export const FETCH_CHECK_DEFAULT = 'fetchCheckDefault';
export const FETCH_CHECK_SECURITY_LEVEL = 'fetchCheckSecurityLevel';
export const BACKUP_SETTING = 'backupSetting';
export const RESTORE_SETTING = 'resotreSetting';
export const FETCH_FACTORY_RESET = 'fetchFactoryReset';

export const FETCH_POWER_SAVING_MODE = 'fetchPowerSavingMode';
export const UPDATE_POWER_SAVING_MODE = 'updatePowerSavingMode';

export const FIRMWARE_CHECK_NEW_UPDATE = 'firmwareCheckNewUpdate';
export const FETCH_FIRMWARE_STATUS = 'fetchFirmwareStatus';
export const UPDATE_FIRMWARE_STATUS = 'updateFirmwareStatus';
export const FETCH_LED = 'fetchLed';
export const UPDATE_LED = 'updateLed';
export const FETCH_ECO = 'fetchEco';
export const UPDATE_ECO = 'updateEco';
export const FIRMWARE_UPGRADE = 'firmwareUpgrade';
export const FIRMWARE_UPGRADE_STATUS = 'firmwareUpgradeStatus';
export const FETCH_HIDE_WIZARD = 'fetchHideWizard';

export const FORCE_ADD_USER = 'forceAddUser';
export const FETCH_RM = 'fetchRM';

// network
export const FETCH_LAN = 'fetchLan';
export const FETCH_WAN = 'fetchWan';
export const FETCH_SPECIFIC_WAN = 'fetchSpecificWan';
export const UPDATE_SPECIFIC_WAN = 'updateSpecificWan';
export const FETCH_PHYSICAL_INTERFACES = 'fetchPhysicalInterfaces';
export const UPDATE_PHYSICAL_INTERFACES = 'updatePhysicalInterfaces';
export const FETCH_CHANNEL = 'fetchChannel';
export const FETCH_DOCSIS = 'fetchDocsis';
export const FETCH_PROCEDURE = 'fetchProcedure';
export const UPDATE_LAN = 'updateLan';
export const FETCH_DUAL_WAN = 'fetchDualWan';
export const FETCH_Q_MODE = 'fetchQMode';
export const UPDATE_DUAL_WAN = 'updateDualWan';
export const UPDATE_Q_MODE = 'updateQMode';
export const FETCH_MOBILE_CONFIGURATION = 'fetchMobileConfiguration';
export const UPDATE_MOBILE_CONFIGURATION = 'updateMobileConfiguration';
export const FETCH_LAN_PORT = 'fetchLanPort';
export const UPDATE_LAN_IPV6 = 'updateLanIpv6';
export const UPDATE_WAN_IPV6 = 'updateWanIpv6';
export const FETCH_DETECT_CONNECTION = 'fetchDetectConnection';
export const UPDATE_WAN_LAN_IPV6 = 'updateWanLanIpv6';
export const CHANGE_SWITCH_MODE_BRIDGED = 'changeSwitchModeBridged';
export const CHANGE_SWITCH_MODE_ROUTER = 'changeSwitchModeRouter';
export const UPDATE_WAN_DISCONNECT = 'updateWanDisconnect';
export const UPDATE_WAN_CONNECT = 'updateWanConnect';

export const FETCH_GPON = 'fetchGpon';
export const FETCH_GPON_GEM = 'fetchGponGem';
export const FETCH_XPON = 'fetchXpon';

// service
export const FETCH_PORT_IP_FILTERING = 'fetchPortIpFiltering';
export const CREATE_PORT_IP_FILTERING = 'createPortIpFiltering';
export const UPDATE_PORT_IP_FILTERING = 'updatePortIpFiltering';
export const DELETE_PORT_IP_FILTERING = 'deletePortIpFiltering';

export const FETCH_PORT_FORWARDING = 'fetchPortForwarding';
export const CREATE_PORT_FORWARDING = 'createPortForwarding';
export const UPDATE_PORT_FORWARDING = 'updatePortForwarding';
export const DELETE_PORT_FORWARDING = 'deletePortForwarding';
export const ACTIVE_PORT_FORWARDING = 'activePortForwarding';

export const FETCH_NETWORK_OPTION = 'fetchNetworkOption';
export const UPDATE_NETWORK_OPTION = 'updateNetworkOption';

export const FETCH_MAC_FILTERING = 'fetchMacFiltering';
export const CREATE_MAC_FILTERING = 'createMacFiltering';
export const DELETE_MAC_FILTERING = 'deleteMacFiltering';
export const UPDATE_RULES_MAC_FILTERING = 'updateRulesMacFiltering';
export const UPDATE_MAC_FILTERING = 'updateMacFiltering';

export const FETCH_PORT_TRIGGERING = 'fetchPortTriggering';
export const CREATE_PORT_TRIGGERING = 'crearePortTriggering';
export const ACTIVE_PORT_TRIGGERING = 'activePortTriggering';
export const DELETE_PORT_TRIGGERING = 'deletePortTriggering';
export const UPDATE_PORT_TRIGGERING = 'updatePortTriggering';

export const FETCH_RESERVED_IP = 'fetchReservedIp';
export const UPDATE_SPECIFIC_RESERVED_IP = 'updateSpecificReservedIp';
export const CREATE_RESERVED_IP = 'createReservedIp';
export const DELETE_RESERVED_IP = 'deleteReservedIp';

export const FETCH_WOL = 'fetchWol';
export const CREATE_WOL = 'createWol';
export const DELETE_WOL_ONE = 'deleteWolOne';
export const SEND_WOL_WAKEON = 'sendWolWakeon';

export const FETCH_DDNS = 'fetchDDNS';
export const UPDATE_DDNS = 'updateDDNS';

export const FETCH_UPNP = 'fetchUpnp';
export const UPDATE_UPNP = 'updateUpnp';
export const FETCH_UPNP_PORT_MAPPING = 'fetchUpnpPortMapping';

export const FETCH_DMZ = 'fetchDmz';
export const UPDATE_DMZ = 'updateDmz';

export const FETCH_ALG = 'fetchAlg';
export const UPDATE_ALG = 'updateAlg';
export const FETCH_RIP = 'fetchRip';
export const UPDATE_RIP = 'updateRip';
export const FETCH_STATIC_ROUTE = 'fetchStaticRoute';
export const CREATE_STATIC_ROUTE = 'createStaticRoute';
export const ACTIVE_STATIC_ROUTE = 'activeStaticRoute';
export const DELETE_STATIC_ROUTE = 'deleteStaticRoute';
export const UPDATE_STATIC_ROUTE = 'updateStaticRoute';
export const FETCH_STATIC_ROUTE_IPV6 = 'fetchStaticRouteIpv6';
export const CREATE_STATIC_ROUTE_IPV6 = 'createStaticRouteIpv6';
export const ACTIVE_STATIC_ROUTE_IPV6 = 'activeStaticRouteIpv6';
export const UPDATE_STATIC_ROUTE_IPV6 = 'updateStaticRouteIpv6';
export const DELETE_STATIC_ROUTE_IPV6 = 'deleteStaticRouteIpv6';
export const FETCH_PING = 'fetchPing';
export const FETCH_TRACE_ROUTE = 'fetchTraceRoute';
export const FETCH_ROUTE_HOPS = 'fetchRouteHops';
export const FETCH_LOG = 'fetchLog';
export const FETCH_LOG_TYPE = 'fetchLogType';
export const CLEAR_LOG = 'clearLog';
export const SAVE_LOG = 'saveLog';
export const FETCH_PING_STOP = 'fetchPingStop';

// wifi
export const FETCH_RADIO = 'fetchRadio';
export const FETCH_SSID = 'fetchSsid';
export const FETCH_WPS = 'fetchWps';
export const UPDATE_WIFI_NETWORK = 'updateWifiNetwork';
export const UPDATE_SSID = 'updateSSID';
export const RESTART_WIFI = 'restartWifi';
export const RESTART_ALL_WIFI = 'restartallWifi';
export const RESTART_IFLIST_WIFI = 'restartifListWifi';
export const FETCH_ACCESS_CONTROL = 'fetchAccessControl';
export const UPDATE_ACCESS_CONTROL = 'updateAccessControl';
export const DELETE_ALL_ACCESS_CONTROL = 'deleteAllAccessControl';
export const DELETE_ONE_ACCESS_CONTROL = 'deleteOneAccessControl';
export const CREATE_ACCESS_CONTROL = 'createAccessControl';
export const UPDATE_SPECIFIC_ACCESS_CONTROL = 'updateSpecificAccess';
export const UPDATE_STATUS_ACCESS_CONTROL = 'updateStatusAccess';
export const FETCH_ALL_SSID = 'fetchAllSSID';
export const UPDATE_STATUS_SSID = 'updateStatusSSID';
export const FETCH_RESTORE_RADIO = 'fetchRestoreRadio';
export const UPDATE_RADIO = 'updateRadio';
export const UPDATE_STATUS_RADIO = 'updateStatusRadio';
export const FETCH_SCAN = 'fetchScan';
export const FETCH_SCAN_RESULT = 'fetchScanResult';
export const FETCH_SCAN_SSID = 'fetchScanSSid';
export const FETCH_SCAN_SSID_RESULT = 'fetchScanSSidResult';
export const FETCH_ACTIVE_WPS = 'fetchActivateWps';
export const FETCH_CANCEL_WPS = 'fetchCancelWps';
export const FETCH_ROUTER_PIN_WPS = 'fetchRouterPinWps';
export const UPDATE_DEVICE_PIN_WPS = 'updateDevicePinWps';
export const CREATE_GUEST_SSID = 'createGuestSSID';
export const DELETE_GUEST_SSID = 'deleteGuestSSID';
export const FETCH_WIFI_SCHEDULE = 'fetchWifiSchedule';
export const UPDATE_WIFI_SCHEDULE = 'updateWifiSchedule';
export const UPDATE_SPECIFIC_WIFI_SCHEDULE = 'updateSpecificWifiSchedule';
export const CREATE_WIFI_SCHEDULE = 'createWifiSchedule';
export const DELETE_WIFI_SCHEDULE = 'deleteWifiSchedule';
export const FETCH_WEB_ACCESS = 'fetchWebAccess';
export const UPDATE_WEB_ACCESS = 'updateWebAccess';
export const FETCH_BAND_STEERING = 'fetchBandSteering';
export const UPDATE_BAND_STEERING = 'updateBandSteering';
export const FETCH_WIFI_LIST = 'fetchWifiList';
export const FETCH_MESH_SETTING = 'fetchMeshSetting';
export const UPDATE_MESH_SETTING = 'updateMeshSetting';
export const UPDATE_AGENT_REBOOT = 'updateAgentReboot';

// system
export const FETCH_LANGUAGE = 'fetchLanguage';
export const UPDATE_LANGUAGE = 'updateLanguage';
export const FETCH_DATE_TIME = 'fetchDatetime';
export const UPDATE_DATE_TIME = 'updateDateTime';

// security
export const FETCH_FIREWALL_IPV4 = 'fetchFirewallIpv4';
export const UPDATE_FIREWALL_IPV4 = 'updateFirewallIpv4';
export const CREATE_FIREWALL_IPV4_RULE = 'createFirewallIpv4Rule';
export const DELETE_FIREWALL_IPV4_RULE = 'deleteFirewallIpv4Rule';
export const FETCH_FIREWALL_IPV6 = 'fetchFirewallIpv6';
export const UPDATE_FIREWALL_IPV6 = 'updateFirewallIpv6';
export const UPDATE_FIREWALL = 'updateFirewall';
export const FETCH_VPN_MODE = 'fetchVpnMode';
export const FETCH_VPN_SERVER = 'fetchVpnServer';
export const UPDATE_VPN_SERVER = 'updateVpnServer';
export const FETCH_VPN_CLIENT = 'fetchVpnClient';
export const UPDATE_VPN_CLIENT = 'updateVpnClient';
export const DOWNLOAD_OPEN_VPN_FILE = 'downloadOpenVpnFile';
export const UPLOAD_OPEN_VPN_FILE = 'uploadOpenVpnFile';
export const FETCH_PARENTAL_CONTROL = 'fetchParentControl';
export const CHANGE_PARENTAL_CONTROL = 'changeParentalControl';
export const GRANT_PARENTAL_CONTROL = 'grantParentalControl';
export const FETCH_PARENTAL_CONTROL_RULE = 'fetchParentalControlRule';
export const UPDATE_PARENTAL_CONTROL_RULE = 'updateParentalControlRule';
export const DELETE_PARENTAL_CONTROL_RULE = 'deleteParentalControlRule';
export const CREATE_PARENTAL_CONTROL_RULE = 'createParentalControlRule';
export const FETCH_PARENTAL_FILTER = 'fetchParentalFilter';
export const CREATE_PARENTAL_FILTER_RULE = 'createParentalFilterRule';
export const DELETE_PARENTAL_FILTER_RULE = 'deleteParentalFilterRule';

export const FETCH_IPV4_ACCESS_CONTROL = 'fetchIpv4AccessControl';
export const UPDATE_IPV4_ACCESS_CONTROL_RULE = 'updateIpv4AccessControlRule';
export const CREATE_IPV4_ACCESS_CONTROL_RULE = 'createIpv4AccessControlRule';
export const DELETE_IPV4_ACCESS_CONTROL_RULE = 'deleteIpv4AccessControlRule';
export const FETCH_IPV6_ACCESS_CONTROL = 'fetchIpv6AccessControl';
export const UPDATE_IPV6_ACCESS_CONTROL_RULE = 'updateIpv6AccessControlRule';
export const CREATE_IPV6_ACCESS_CONTROL_RULE = 'createIpv6AccessControlRule';
export const DELETE_IPV6_ACCESS_CONTROL_RULE = 'deleteIpv6AccessControlRule';

export const FETCH_TREND_MICRO = 'fetchTrendMicro';
export const UPDATE_TREND_MICRO = 'updateTrendMicro';

// privacy
export const FETCH_PRIVACY = 'fetchPrivacy';
export const FETCH_TERMS = 'fetchTerms';

// mediashare
export const FETCH_USB = 'fetchUsb';
export const REMOVE_USB = 'removeUsb';
export const FETCH_FTP_SERVER = 'fetchFtpServer';
export const UPDATE_FTP_SERVER = 'updateFTPServer';
export const FETCH_SAMBA_SERVER = 'fetchSambaServer';
export const UPDATE_SAMBA_SERVER = 'updateSambaServer';
export const FETCH_DLNA_SERVER = 'fetchDLNAServer';
export const UPDATE_DLNA_SERVER = 'updateDLNAServer';
export const SCAN_MEDIA_SERVER = 'scanMediaServer';
export const FETCH_PRINTER = 'fetchPrinter';
export const REMOVE_PRINTER = 'removePrinter';
export const FETCH_CUSTOM_FOLDER = 'fetchCustomFolder';
export const FETCH_WEBDAV_SERVER = 'fetchWebdavServer';
export const UPDATE_WEBDAV_SERVER = 'updateWebdavServer';
export const FETCH_TORRENT_SERVER = 'fetchTorrentServer';
export const UPDATE_TORRENT_SERVER = 'updateTorrentServer';
export const FETCH_TIMEMACHINE_SERVER = 'fetchTimeMachineServer';
export const UPDATE_TIMEMACHINE_SERVER = 'updateTimeMachineServer';

// qos
export const FETCH_QOS_CONFIGURATION = 'fetchQosConfiguration';
export const UPDATE_QOS_CONFIGURATION = 'updateQosConfiguration';
export const ADD_QOS_RULE = 'addQosRule';
export const CHANGE_QOS_RULE = 'changeQosRule';
export const DELETE_QOS_RULE = 'deleteQosRule';
export const FETCH_QOS_SERVICES = 'fetchQosServices';
export const FETCH_IPTV = 'fetchIptv';
export const UPDATE_IPTV = 'updateIptv';
