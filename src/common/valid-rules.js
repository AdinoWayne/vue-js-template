import Utils from '@/common/utils';

const validate = {
  existedMac(value, [list, index]) {
    if (!list) {
      return true;
    }
    const vMacAddress = value.trim();
    const vListmac = Array.from(list);
    const vIndex = index === null || index === undefined ? -1 : index;
    if (vListmac.length === 0) {
      return true;
    }
    for (let i = 0; i < vListmac.length; i++) {
      if (
        vListmac[i].id !== null
          && vListmac[i].id !== undefined
          && vIndex === vListmac[i].id
      ) {
        continue;
      } else if (
        vListmac[i].index !== null
            && vListmac[i].index !== undefined
            && vIndex === vListmac[i].index
      ) {
        continue;
      }
      if (
        vMacAddress.toUpperCase() === vListmac[i].macAddress.toUpperCase()
      ) {
        return false;
      }
    }

    return true;
  },
  validLength(value, [min]) {
    if (value.length < min) {
      return false;
    }

    return true;
  },
  matchPassword(value, [referPassword, isCheckSame]) {
    if (referPassword === null || referPassword === undefined) {
      return true;
    }
    if (isCheckSame) {
      return value !== referPassword;
    }

    return value === referPassword;
  },
  samePassword(value, [referPassword, isCheckSame]) {
    if (referPassword === null || referPassword === undefined) {
      return true;
    }
    if (isCheckSame) {
      return value !== referPassword;
    }

    return value === referPassword;
  },
  isCurrentPWCorrect(value, [isMatched]) {
    if (isMatched === undefined || isMatched === null) {
      return true;
    }

    return !!isMatched;
  },
  reservedPort(value, [list, protocol, endPort]) {
    if (list === null || list === undefined) {
      return true;
    }
    if (endPort === null || endPort === undefined) {
      return true;
    } if (endPort === '') {
      return true;
    }
    let vProtocol = '';
    const vStart = value;
    let vEnd = endPort;
    if (vEnd < vStart) {
      vEnd = vStart;
    }
    const vList = Array.from(list);
    if (protocol === null || protocol === undefined) {
      vProtocol = 'tcp';
    } else {
      vProtocol = protocol;
    }
    for (const n in vList) {
      if (
        vList[n].value
        && vList[n].limitPort
        && vList[n].value === vProtocol
      ) {
        for (const port in vList[n].limitPort) {
          if (
            vList[n].limitPort[port] >= vStart
            && vList[n].limitPort[port] <= vEnd
          ) {
            return false;
          }
        }
        break;
      }
    }

    return true;
  },
  exitedId(value, [data]) {
    if (data === null || data === undefined) {
      return true;
    }
    if (data.length === 0) {
      return true;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].userName && data[i].userName === value) {
        return false;
      }
    }

    return true;
  },
  sensitiveId(value, [data]) {
    if (data === null || data === undefined) {
      return true;
    }
    if (data.length === 0) {
      return true;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].toUpperCase() === value.toUpperCase()) {
        return false;
      }
    }

    return true;
  },
  exitedPath(value, [listPath]) {
    if (listPath === null || listPath === undefined) {
      return true;
    }
    if (listPath.length === 0) {
      return true;
    }
    for (let i = 0; i < listPath.length; i++) {
      if (listPath[i] && listPath[i].toUpperCase() === value.toUpperCase()) {
        return false;
      }
    }

    return true;
  },
  restricMac(value, [isCheck]) {
    if (!isCheck) {
      return true;
    }
    const regex = /^[1|3|5|7|9|b|d|f|B|D|F]/i;
    if (value.length === 17) {
      const vArr = value.split(':');

      return !regex.test(vArr[0][1]); // check 2nd character
    }

    return true;
  },
  isValidHost(value) {
    let specialChar = false;
    const num = "{}[]()<>?_|~`!@#$%^&*+\"'\\.,:;=/ ";
    for (let i = 0; i < value.length; i += 1) {
      if (
        num.indexOf(value.charAt(i)) != -1
        || (value.charCodeAt(i) < 32 || value.charCodeAt(i) > 126)
      ) {
        specialChar = true;
      }
    }

    return !specialChar;
  },
  isValidHyphen(value) {
    if (value.charAt(0) === '-' || value.charAt(value.length - 1) === '-') {
      return false;
    }

    return true;
  },
  isValidDomain(value) {
    let specialChar = false;
    const num = "{}[]()<>?_|~`!@#$%^&*+\"'\\:;=/ ";
    for (let i = 0; i < value.length; i += 1) {
      if (
        num.indexOf(value.charAt(i)) != -1
        || (value.charCodeAt(i) < 32 || value.charCodeAt(i) > 126)
      ) {
        specialChar = true;
      }
    }

    return !specialChar;
  },
  isNumericString(value) {
    let isCharacterNumber = false;
    for (let i = 0; i < value.length; i += 1) {
      if (isNaN(parseInt(value.charAt(i), 10))) {
        isCharacterNumber = true;
        break;
      }
    }

    return isCharacterNumber;
  },
  validMac(value) {
    const regex = /^(?!(?:ff:ff:ff:ff:ff:ff|00:00:00:00:00:00))([0-9A-Fa-f]{2}[:]){5}([0-9A-Fa-f]{2})$/;
    const partern = new RegExp(regex);

    return partern.test(value);
  },
  sameLanIP(_, [ownOctets, data, ischeck]) {
    if (data === undefined || data === null) {
      return true;
    }
    if (ischeck) {
      const ipAddr = ownOctets.join('.');

      return !(ipAddr === data);
    }

    return true;
  },
  validHexaPassword(key, [hexaType]) {
    if (hexaType) {
      const { length } = key;
      let count = 0;
      for (const i in key) {
        if (key[i] === '0') {
          count++;
        }
      }
      if (count === length) {
        return false;
      }
    }

    return true;
  },
  existedIp(_, [value, list, index]) {
    if (!list) {
      return true;
    }
    const vIpAddress = value.trim();
    const vListIp = Array.from(list);
    const vIndex = index === null || index === undefined ? -1 : index;
    if (vListIp.length === 0) {
      return true;
    }
    for (let i = 0; i < vListIp.length; i++) {
      if (
        vListIp[i].id !== null
          && vListIp[i].id !== undefined
          && vIndex === vListIp[i].id
      ) {
        continue;
      } else if (
        vListIp[i].index !== null
            && vListIp[i].index !== undefined
            && vIndex === vListIp[i].index
      ) {
        continue;
      }
      if (vIpAddress.toUpperCase() === vListIp[i].ipAddress) {
        return false;
      }
    }

    return true;
  },
  checkRangeStartEndIp(_, [value, start, end]) {
    if (!value || !start || !end) {
      return true;
    }
    const ipEnd = value.split('.')[value.split('.').length - 1];
    const startLast = start.split('.')[start.split('.').length - 1];
    const endLast = end.split('.')[end.split('.').length - 1];
    if (
      parseInt(ipEnd) < parseInt(startLast)
      || parseInt(ipEnd) > parseInt(endLast)
    ) {
      return false;
    }

    return true;
  },
  existedPrimaryOrSecondarySSID(value, [listSSID, index, interfaceId]) {
    if (listSSID === null || listSSID === undefined) {
      return true;
    }
    if (listSSID.length === 0) {
      return true;
    }
    for (let i = 0; i < listSSID.length; i++) {
      if (listSSID[i] && (listSSID[i].index === index
        && listSSID[i].interfaceId === interfaceId)) {
        continue;
      }
      if (listSSID[i] && !listSSID[i].wifiRadioActive) {
        continue;
      }
      if (listSSID[i] && !listSSID[i].active) {
        continue;
      }
      if (
        listSSID[i]
        && listSSID[i].name === value
      ) {
        return false;
      }
    }

    return true;
  },
  existedPrimarySSID(value, [listSSID, index]) {
    if (listSSID === null || listSSID === undefined) {
      return true;
    }
    if (listSSID.length === 0) {
      return true;
    }
    for (let i = 0; i < listSSID.length; i++) {
      if (
        listSSID[i]
        && listSSID[i].name === value
        && listSSID[i].index !== index
        && (index === 0 || listSSID[i].index === 0)
      ) {
        return false;
      }
    }

    return true;
  },
  existedSecondarySSID(value, [listSSID, index]) {
    if (listSSID === null || listSSID === undefined) {
      return true;
    }
    if (listSSID.length === 0) {
      return true;
    }
    for (let i = 0; i < listSSID.length; i++) {
      if (
        listSSID[i]
        && listSSID[i].name === value
        && listSSID[i].index !== index
        && listSSID[i].index !== 0
        && index !== 0
      ) {
        return false;
      }
    }

    return true;
  },
  checkSubnetMask(dnsValue, [ipAddr]) {
    if (!ipAddr) {
      return true;
    }
    const ipAddressArr = ipAddr.split('.');
    const dnsAddressArr = dnsValue.split('.');
    let isNumber = false;

    for (let i = 0; i < dnsAddressArr.length; i += 1) {
      if (!isNaN(Number(dnsAddressArr[i]))) {
        isNumber = true;
      } else {
        isNumber = false;
      }
    }

    if (isNumber) {
      if (ipAddressArr.length === 4) {
        if (ipAddressArr[0] === '192') {
          if (dnsValue === '255.255.255.0') {
            return true;
          }

          return false;
        } if (ipAddressArr[0] === '172') {
          if (dnsValue === '255.255.255.0' || dnsValue === '255.255.0.0') {
            return true;
          }

          return false;
        } if (ipAddressArr[0] === '10') {
          if (
            dnsValue === '255.255.255.0'
            || dnsValue === '255.255.0.0'
            || dnsValue === '255.0.0.0'
          ) {
            return true;
          }

          return false;
        }

        return false;
      }

      return false;
    }

    return false;
  },
  checkGateway(value, [gatewayAddr, ipAddr]) {
    if (!ipAddr) {
      return false;
    }
    let firstOctet = false;
    let secondOctet = false;
    let thirdOctet = false;
    let fourthOctet = false;

    const ipAddressArr = ipAddr.split('.');
    const gatewayAddressArr = gatewayAddr.split('.');

    if (gatewayAddressArr.length === 4) {
      if (ipAddressArr[0] === gatewayAddressArr[0]) {
        firstOctet = true;
      } else {
        firstOctet = false;
      }
      if (ipAddressArr[1] === gatewayAddressArr[1]) {
        secondOctet = true;
      } else {
        secondOctet = false;
      }
      if (ipAddressArr[2] === gatewayAddressArr[2]) {
        thirdOctet = true;
      } else {
        thirdOctet = false;
      }
      if (ipAddressArr[3] === gatewayAddressArr[3]) {
        fourthOctet = false;
      } else if (gatewayAddressArr[3] === '0' || gatewayAddressArr[3] !== '1') {
        fourthOctet = false;
      } else {
        fourthOctet = true;
      }
    } else {
      firstOctet = false;
    }

    return firstOctet && secondOctet && thirdOctet && fourthOctet;
  },
  checkIpAddress(value, [data, customRule, isIpAddress, isDisable]) {
    if (data === null || data === undefined || isDisable) {
      return true;
    }
    if (customRule) {
      const ipAddressArr = data.split('.');
      for (let i = 0; i < ipAddressArr.length; i++) {
        if (parseInt(ipAddressArr[i]) > 0) {
          return true;
        }
      }
    } else {
      const ipAddressArr = data.split('.');
      if (ipAddressArr.length === 4) {
        if (
          parseInt(ipAddressArr[0]) > 0
          && parseInt(ipAddressArr[0]) < 255
          && parseInt(ipAddressArr[3]) < 255
        ) {
          if (isIpAddress) {
            if (parseInt(ipAddressArr[3]) >= 0) {
              return true;
            }
          } else if (parseInt(ipAddressArr[3]) > 0) {
            return true;
          }
        }
      }
    }

    return false;
  },
  exitedServerUrl(value, [listRule, index]) {
    if (listRule === null || listRule === undefined) {
      return true;
    }
    if (listRule.length === 0) {
      return true;
    }
    const vIndex = index === null || index === undefined ? -1 : index;
    for (let i = 0; i < listRule.length; i++) {
      if (i === vIndex) {
        continue;
      }
      if (listRule[i] && listRule[i].toUpperCase() === value.toUpperCase()) {
        return false;
      }
    }

    return true;
  },
  checkDuplicateLanID(_, [internet, ipPhone, iptv]) {
    const listLan = [];
    listLan.push(internet);
    listLan.push(ipPhone);
    listLan.push(iptv);
    let isExist = false;
    for (let i = 0; i < listLan.length; i++) {
      for (let j = 0; j < listLan.length; j++) {
        if (listLan[i] === listLan[j] && i !== j) {
          isExist = true;
        }
      }
    }

    return !isExist;
  },
  checkValidStartAndendIP(_, [startIP, endIP]) {
    const listOctetStart = startIP.split('.');
    const listOctetEnd = endIP.split('.');
    for (let i = 0; i < listOctetStart.length; i++) {
      const startNumber = parseInt(listOctetStart[i]);
      const endNumber = parseInt(listOctetEnd[i]);

      if (startNumber > endNumber) {
        return false;
      }
    }

    return true;
  },
  checkRangeIP(_, [startIP, endIP]) {
    const listOctetStart = startIP.split('.');
    const listOctetEnd = endIP.split('.');

    let classRangeStart = 0;
    let classRangeEnd = 0;
    classRangeStart = parseInt(listOctetStart[listOctetStart.length - 2]);
    classRangeEnd = parseInt(listOctetEnd[listOctetEnd.length - 2]);
    let isClassDiff = false;
    isClassDiff = classRangeEnd > classRangeStart;
    if (isClassDiff) {
      return true;
    }

    // check minimum range size
    let rangeStart = 0;
    let rangeEnd = 0;
    rangeStart = parseInt(listOctetStart[listOctetStart.length - 1]);
    rangeEnd = parseInt(listOctetEnd[listOctetEnd.length - 1]);
    if (rangeEnd - rangeStart < 32) {
      return false;
    }

    return true;
  },
  matchParentalCode(_, [newParentalCode, reParantalCode]) {
    if (newParentalCode.length === 4 && reParantalCode.length === 4) {
      if (newParentalCode === reParantalCode) {
        return true;
      }
    }

    return false;
  },
  existParentalControlRule(value, [listRule, listRule2]) {
    if (
      !!listRule
      && listRule.length > 0
      && (!!listRule2 && listRule2.length > 0)
    ) {
      return true;
    }

    return false;
  },
  existKeyword(value, [listRule]) {
    if (!!listRule && listRule.length > 0) {
      if (listRule.findIndex(i => value === i.name) < 0) {
        return true;
      }

      return false;
    }

    return true;
  },
  checkDns(_, [dnsAddress, isCheck]) {
    if (!isCheck) {
      if (dnsAddress) {
        if (dnsAddress === '0.0.0.0') {
          return false;
        }

        return true;
      }

      return false;
    }

    return true;
  },
  checkDns2(_, [dnsAddress]) {
    const dnsAddressArr = dnsAddress.split('.');
    if (dnsAddressArr.length > 0 && dnsAddressArr[0] === '0') {
      return dnsAddress === '0.0.0.0';
    }

    return true;
  },
  checkSubnet(_, [subnet, isCheck]) {
    if (!isCheck) {
      if (subnet) {
        if (subnet !== '0.0.0.0' && subnet !== '255.255.255.255') {
          return true;
        }

        return false;
      }

      return false;
    }

    return true;
  },
  disableOnChange(_, [isChanging]) {
    return !isChanging;
  },
  validIPv6Address(_, [ipAddress]) {
    if (ipAddress === null || ipAddress === undefined) {
      return true;
    }
    if (ipAddress) {
      if (ipAddress === '0000:0000:0000:0000:0000:0000:0000:0000') {
        return false;
      }
    }

    return true;
  },
  checkDestinationSameGateway(_, [gateway, ipAddr]) {
    return !(gateway === ipAddr);
  },
  checkDestinationSameLinkLocal(_, [linkLocal, ipAddr]) {
    return !(linkLocal === ipAddr);
  },
  checkDuplicateRouteEntry(_, [id, destinationIP, listRouting]) {
    for (let i = 0; i < listRouting.length; i++) {
      if (id !== null && id !== undefined) {
        if (
          id !== listRouting[i].id
          && destinationIP === listRouting[i].destinationIP
        ) {
          return false;
        }
      } else if (destinationIP === listRouting[i].destinationIP) {
        return false;
      }
    }

    return true;
  },
  checkDurationLed(_, [start, end]) {
    if (start && end) {
      if (start === end) {
        return false;
      }
    }

    return true;
  },
  checkDurationEco(_, [start, end]) {
    if (start && end) {
      if (start === end) {
        return false;
      }
    }

    return true;
  },
  isExcludeDot(value) {
    let dotChar = false;
    for (let i = 0; i < value.length; i += 1) {
      if (value.charAt(i) === '.') {
        dotChar = true;
        break;
      }
    }

    return !dotChar;
  },
  isValidUserID(value) {
    const regexCharacter = new RegExp('^[a-zA-Z0-9!$+-@<>.()]+$');
    for (let i = 0; i < value.length; i += 1) {
      if (!regexCharacter.test(value.charAt(i))) {
        return false;
      }
    }

    return true;
  },
  existedIndex(value, [orgIndex, list]) {
    if (list === null || list === undefined) {
      return true;
    }
    if (list.length === 0) {
      return true;
    }
    for (let i = 0; i < list.length; i++) {
      if (
        list[i].index !== Number(orgIndex)
        && list[i].index === Number(value)
      ) {
        return false;
      }
    }

    return true;
  },
  ipv6AddrCheck(_, [ipAddress]) {
    if (ipAddress === null || ipAddress === undefined) {
      return true;
    }
    if (ipAddress) {
      if (ipAddress === '0000:0000:0000:0000:0000:0000:0000:0000') {
        return false;
      }
      const ipAddrArr = ipAddress.split(':');
      for (let i = 0; i < ipAddrArr.length; i++) {
        if (ipAddrArr[i] === null || ipAddrArr[i] === '') {
          return false;
        }
      }
    }

    return true;
  },
  sameLanIPV6(_, [data, ipAddr]) {
    if (data === undefined || data === null) {
      return true;
    }
    if (ipAddr === undefined || ipAddr === null) {
      return true;
    }
    const ipAddrExpand = Utils.expandIPv6Address(ipAddr);
    const dataExpand = Utils.expandIPv6Address(data);
    const dataArr = data.split(':');
    let countOctet = 0;
    for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i] !== null && dataArr[i] !== '' && dataArr[i].length === 4) {
        countOctet++;
      }
    }
    if (countOctet === dataArr.length) {
      return !(ipAddrExpand === dataExpand);
    }

    return true;
  },
  existedIpFilteringRule(_, [value, list, index]) {
    if (!list) {
      return true;
    }
    const vListRule = Array.from(list);
    const vIndex = index === null || index === undefined ? -1 : index;
    if (vListRule.length === 0) {
      return true;
    }
    for (let i = 0; i < vListRule.length; i++) {
      if (
        vListRule[i].id !== null
          && vListRule[i].id !== undefined
          && vIndex === vListRule[i].id
      ) {
        continue;
      } else if (
        vListRule[i].index !== null
            && vListRule[i].index !== undefined
            && vIndex === vListRule[i].index
      ) {
        continue;
      }
      if (
        Utils.compareObjects(vListRule[i].src, value.src)
          && Utils.compareObjects(vListRule[i].dest, value.dest)
          && vListRule[i].protocol === value.protocol
      ) {
        return false;
      }
    }

    return true;
  },
  targetChannelApply(_, [val1, val2a, val2c]) {
    if (!val1 && !val2a && !val2c) {
      return false;
    }

    return true;
  },
};

export const VALID_RULES = [
  {
    id: 'ExistedMac',
    msg: 'common_ui_alphanumeric_mac_error_duplicate',
    validate: validate.existedMac,
  },
  {
    id: 'ExistedSelectMac',
    msg: 'common_ui_alphanumeric_mac_error_duplicate',
    validate: validate.existedMac,
  },
  {
    id: 'exitedId',
    msg: 'account_setting_vpn_duplicate',
    validate: validate.exitedId,
  },
  {
    id: 'sensitiveId',
    msg: 'account_setting_card_disallowed_account',
    validate: validate.sensitiveId,
  },
  {
    id: 'validLength',
    msg: 'common_ui_password_input_error_minlength',
    validate: validate.validLength,
  },
  {
    id: 'validLength_6',
    msg: 'error_message_common_password_minlength_6',
    validate: validate.validLength,
  },
  {
    id: 'matchPassword',
    msg: 'change_pass_error_password_not_match',
    validate: validate.matchPassword,
  },
  {
    id: 'isCurrentPWCorrect',
    msg: 'change_pass_error_password_is_not_correct',
    validate: validate.isCurrentPWCorrect,
  },
  {
    id: 'samePassword',
    msg: 'error_new_password_same_as_current',
    validate: validate.samePassword,
  },
  {
    id: 'RestricMac',
    msg: 'common_ui_alphanumeric_mac_error_multicast',
    validate: validate.restricMac,
  },
  {
    id: 'isValidHost',
    msg: 'advanced_ddns_wol_invalid_hostname_msg',
    validate: validate.isValidHost,
  },
  {
    id: 'isValidHyphen',
    msg: 'advanced_ddns_wol_invalid_hostname_msg_by_hyphen',
    validate: validate.isValidHyphen,
  },
  {
    id: 'isValidDomain',
    msg: 'advanced_ddns_wol_invalid_hostname_msg',
    validate: validate.isValidDomain,
  },
  {
    id: 'isNumericString',
    msg: 'advanced_ddns_wol_invalid_hostname_msg_by_numeric',
    validate: validate.isNumericString,
  },
  {
    id: 'exitedPath',
    msg: 'mediashare_usb_network_folder_duplicate_folder',
    validate: validate.exitedPath,
  },
  {
    id: 'reservedPort',
    msg: 'advanced_port_triggering_page_col_reserved_port_msg',
    validate: validate.reservedPort,
  },
  {
    id: 'ValidMac',
    msg: 'common_invalid_mac_address',
    validate: validate.validMac,
  },
  {
    id: 'sameLanIP',
    msg: 'network_lan_page_reserved_error_duplicate_lan_ip_address',
    validate: validate.sameLanIP,
  },
  {
    id: 'validHexaPassword',
    msg: 'common_text_invalid_wep_hexa_pattern',
    validate: validate.validHexaPassword,
  },
  {
    id: 'existedIp',
    msg: 'network_lan_page_reserved_error_already_exist_ip_address',
    validate: validate.existedIp,
  },
  {
    id: 'checkRangeStartEndIp',
    msg: 'network_lan_page_reserved_error_dhcp_range_lan_ip_address',
    validate: validate.checkRangeStartEndIp,
  },
  {
    id: 'existedPrimarySSID',
    msg: 'wireless_page_same_primary_and_secondary_error_message',
    validate: validate.existedPrimarySSID,
  },
  {
    id: 'existedSecondarySSID',
    msg: 'wireless_page_same_secondary_error_message',
    validate: validate.existedSecondarySSID,
  },
  {
    id: 'checkSubnetMask',
    msg: 'common_ui_alphanumeric_subnet_mask_error_format',
    validate: validate.checkSubnetMask,
  },
  {
    id: 'checkGateway',
    msg: 'page_error_invalid_lan_gateway_address',
    validate: validate.checkGateway,
  },
  {
    id: 'passwordIsWeak',
    msg: '',
    validate: validate.isCurrentPWCorrect,
  },
  {
    id: 'checkIpAddress',
    msg: 'network_internet_setting_invalid_ip_address',
    validate: validate.checkIpAddress,
  },
  {
    id: 'ExitedServerUrl',
    msg: 'management_date_time_server_url_duplicate',
    validate: validate.exitedServerUrl,
  },
  {
    id: 'checkDuplicateLanID',
    msg: 'advanced_iptv_page_error_msg_duplicate_id',
    validate: validate.checkDuplicateLanID,
  },
  {
    id: 'checkValidStartAndendIP',
    msg: 'error_start_end_ip',
    validate: validate.checkValidStartAndendIP,
  },
  {
    id: 'checkRangeIP',
    msg: 'error_start_end_ip_range_less_than_min_2',
    validate: validate.checkRangeIP,
  },
  {
    id: 'matchParentalCode',
    msg: '',
    validate: validate.matchParentalCode,
  },
  {
    id: 'existParentalControlRule',
    msg: '',
    validate: validate.existParentalControlRule,
  },
  {
    id: 'existKeyword',
    msg: 'parental_control_already_exists_msg',
    validate: validate.existKeyword,
  },
  {
    id: 'checkDns',
    msg: 'network_internet_setting_invalid_ip_address',
    validate: validate.checkDns,
  },
  {
    id: 'disableOnChange',
    msg: '',
    validate: validate.disableOnChange,
  },
  {
    id: 'validIPv6Address',
    msg: '',
    validate: validate.validIPv6Address,
  },
  {
    id: 'checkDestinationSameGateway',
    msg: 'page_error_duplicate_lan_ip_address',
    validate: validate.checkDestinationSameGateway,
  },
  {
    id: 'checkDestinationSameLinkLocal',
    msg: 'page_error_duplicate_ip_destination_link_local_address',
    validate: validate.checkDestinationSameLinkLocal,
  },
  {
    id: 'checkDuplicateRouteEntry',
    msg: 'page_error_invalid_routing_already_exists',
    validate: validate.checkDuplicateRouteEntry,
  },
  {
    id: 'checkSubnet',
    msg: 'network_internet_setting_invalid_subnet_error',
    validate: validate.checkSubnet,
  },
  {
    id: 'checkDurationLed',
    msg: '',
    validate: validate.checkDurationLed,
  },
  {
    id: 'checkDurationEco',
    msg: '',
    validate: validate.checkDurationEco,
  },
  {
    id: 'isExcludeDot',
    msg: 'advanced_ddns_wol_invalid_hostname_msg',
    validate: validate.isExcludeDot,
  },
  {
    id: 'isValidUserID',
    msg: '',
    validate: validate.isValidUserID,
  },
  {
    id: 'existedIndex',
    msg: 'packet_filtering_existed_priority_error_msg',
    validate: validate.existedIndex,
  },
  {
    id: 'ipv6AddrCheck',
    msg: 'error_message_common_require',
    validate: validate.ipv6AddrCheck,
  },
  {
    id: 'isIpAddrZeroCheck',
    msg: 'error_message_common_require',
    validate: validate.checkDns,
  },
  {
    id: 'sameLanIPV6',
    msg: 'advanced_dmz_page_error_duplicate_lan_ip_address',
    validate: validate.sameLanIPV6,
  },
  {
    id: 'checkDns2',
    msg: 'network_internet_setting_invalid_ip_address',
    validate: validate.checkDns2,
  },
  {
    id: 'existedIpFilteringRule',
    msg: 'security_filtering_already_exists_port_filtering',
    validate: validate.existedIpFilteringRule,
  },
  {
    id: 'existedPrimaryOrSecondarySSID',
    msg: 'wireless_page_same_primary_and_secondary_error_message',
    validate: validate.existedPrimaryOrSecondarySSID,
  },
  {
    id: 'targetChannelApply',
    msg: '',
    validate: validate.targetChannelApply,
  },
];
