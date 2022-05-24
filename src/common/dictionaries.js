/* eslint-disable import/prefer-default-export */
export const DICTIONARIES = {
  messages: {
    // common messages
    required: () => 'error_message_common_require',
    _default: () => 'error_invalid_field',
  },
  custom: {
    // custom messages, matching with validateprovider' name
    'input-validator': {
      required: () => 'error_message_common_require',
    },
    'ip-port-filtering-ip-v4-validator-1': {
      required: () => '',
    },
    'ip-port-filtering-ip-v4-validator-2': {
      required: () => '',
    },
    'ip-port-filtering-ip-v4-validator-3': {
      required: () => '',
      sameLanIP: () => 'advanced_dmz_page_error_duplicate_lan_ip_address',
    },
    'lan-setting-ip-v4-validator-1': {
      required: () => '',
    },
    'lan-setting-ip-v4-validator-2': {
      required: () => '',
    },
    'lan-setting-ip-v4-validator-3': {
      required: () => '',
      sameLanIP: () => 'advanced_dmz_page_error_duplicate_lan_ip_address',
    },
    'lan-setting-ip-v4-validator-4': {
      required: () => '',
    },
    'alpha-ip-v4-validator-0': {
      required: () => '',
    },
    'alpha-ip-v4-validator-1': {
      required: () => '',
    },
    'alpha-ip-v4-validator-2': {
      required: () => '',
    },
    'alpha-ip-v4-validator-3': {
      required: () => '',
    },
    'reserved-ip-ip-v4-validator-0': {
      required: () => '',
    },
    'reserved-ip-ip-v4-validator-1': {
      required: () => '',
    },
    'reserved-ip-ip-v4-validator-2': {
      required: () => '',
    },
    'reserved-ip-ip-v4-validator-3': {
      required: () => '',
      sameLanIP: () => 'advanced_dmz_page_error_duplicate_lan_ip_address',
    },
    'portforwording-ip-v4-validator-0': {
      required: () => '',
    },
    'portforwording-ip-v4-validator-1': {
      required: () => '',
    },
    'portforwording-ip-v4-validator-2': {
      required: () => '',
    },
    'portforwording-ip-v4-validator-3': {
      required: () => '',
      sameLanIP: () => 'common_text_the_same_lan_ip',
    },
    'dns-server-1-validator-0': {
      required: () => '',
    },
    'dns-server-1-validator-1': {
      required: () => '',
    },
    'dns-server-1-validator-2': {
      required: () => '',
    },
    'dns-server-1-validator-3': {
      required: () => '',
      checkDns: () => 'error_message_common_require',
    },
    'host-name-validator': {
      required: () => 'error_message_common_require',
      isValidHost: () => 'advanced_ddns_wol_invalid_hostname_msg',
      isValidHyphen: () => 'advanced_ddns_wol_invalid_hostname_msg_by_hyphen',
      isNumericString: () => 'advanced_ddns_wol_invalid_hostname_msg_by_numeric',
    },
    'domain-name-validator': {
      required: () => 'error_message_common_require',
      isValidDomain: () => 'advanced_ddns_wol_invalid_hostname_msg',
      isValidHyphen: () => 'advanced_ddns_wol_invalid_hostname_msg_by_hyphen',
      isNumericString: () => 'advanced_ddns_wol_invalid_hostname_msg_by_numeric',
    },
    'subnet-mask-validator': {
      required: () => 'error_message_common_require',
      checkSubnetMask: () => 'common_ui_alphanumeric_subnet_mask_error_format',
    },
    'change-password-re-new-validator': {
      samePassword: () => 'change_pass_error_password_not_match',
    },
    'parental-code-new-password-validator': {
      required: () => 'error_message_common_require',
      validLength: () => 'change_parental_control_code_min_length',
    },
    'parental-code-re-password-validator': {
      required: () => 'error_message_common_require',
      validLength: () => 'change_parental_control_code_min_length',
      matchPassword: () => 'parental_control_parental_code_does_not_match',
    },
    'parental-control-mac-rule-validator': {
      required: () => 'error_message_common_require',
      validLength: () => 'common_ui_password_input_error_minlength',
      ExistedMac: () => 'parental_control_already_exists_msg',
    },
    'packet-filtering-ip-address-validator-0': {
      required: () => 'error_message_common_require',
      sameLanIP: () => 'advanced_dmz_page_error_duplicate_lan_ip_address',
      isIpAddrZeroCheck: () => 'error_message_common_require',
    },
    'packet-filtering-ip-address-validator-1': {
      required: () => 'error_message_common_require',
      sameLanIP: () => 'advanced_dmz_page_error_duplicate_lan_ip_address',
      isIpAddrZeroCheck: () => 'error_message_common_require',
    },
    'packet-filtering-ip-address-validator-3': {
      required: () => 'error_message_common_require',
      sameLanIP: () => 'advanced_dmz_page_error_duplicate_lan_ip_address',
      isIpAddrZeroCheck: () => 'error_message_common_require',
    },
  },
};
