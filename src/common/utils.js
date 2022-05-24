/* eslint-disable prefer-destructuring */
/* eslint-disable no-throw-literal */
/* eslint-disable no-self-compare */
/* eslint-disable no-plusplus */
/* eslint-disable no-cond-assign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import Vue from 'vue';
import Cookie from 'vue-cookie';
import mutationobserverShim from 'mutationobserver-shim';
import WebFont from 'webfontloader';
import {
  SWITCH_MODE_TYPE,
  USER_PW_SECURITYLEVEL,
  STORAGE_ACCESS_TOKEN,
  STORAGE_SWITCH_MODE,
  STORAGE_MESH_MODE,
  STORAGE_USER_ROLE,
  STORAGE_USER_NAME,
  STORAGE_OPMODE,
  STORAGE_PERMISSIONS,
  STORAGE_STATUS_POLICY,
  STORAGE_SYSTEM_TIMER_PING,
  STORAGE_FIRMWARE,
  STORAGE_IS_DEFAULT_USER,
} from '@/common/constants';
// eslint-disable-next-line camelcase
import Hash_Gen from '@/common/hash-gen';

Vue.use(Cookie);

const isArray = arr => Array.isArray(arr) || arr instanceof Array;

const isDefined = value => typeof value !== 'undefined';

const parsePassword = val => {
  let ret = '';
  const temps = val.split('');

  if (temps.length < 3) {
    throw 'Invalid format. greater than 2';
  } else if (temps.length === 3) {
    ret = temps[2];
  } else if (temps.length > 3) {
    temps.splice(0, 2);
    ret = temps.join('');
  }

  return ret;
};

const parseCookie = val => {
  let ret = '';
  const temps = val.split('');
  if (temps.length > 2) {
    throw 'Invalid format. greater than 2';
  } else if (temps.length === 2) {
    if (temps[0] === 'HS') {
      ret = temps[1];
    } else {
      return false;
    }
  }

  return ret;
};
const equals = (o1, o2) => {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
  const t1 = typeof o1;
  const t2 = typeof o2;
  let length = 0;
  let key = null;
  let keySet = null;
  if (t1 === t2 && t1 === 'object') {
    if (isArray(o1)) {
      if (!isArray(o2)) return false;
      if ((length = o1.length) === o2.length) {
        for (key = 0; key < length; key++) {
          if (!equals(o1[key], o2[key])) return false;
        }

        return true;
      }
    } else {
      if (isArray(o2)) return false;
      keySet = Object.create(null);
      for (key in o1) {
        if (!equals(o1[key], o2[key])) return false;
        keySet[key] = true;
      }
      for (key in o2) {
        if (!(key in keySet) && isDefined(o2[key])) return false;
      }

      return true;
    }
  }

  return false;
};

const createDate = dateString => {
  const ret = new Date(dateString);
  if (ret.toString() !== 'Invalid Date') {
    return ret;
  }

  const patt = /[:]|[ ]|[.]/g;
  const dateArr = dateString
    .replace(patt, '-')
    .split('-')
    .map((value, index) => {
      if (index === 1) {
        return parseInt(value) - 1;
      }

      return parseInt(value);
    });

  return new Date(
    dateArr[0],
    dateArr[1],
    dateArr[2],
    dateArr[3],
    dateArr[4],
    dateArr[5],
  );
};
const decodedCookieString = str => {
  if (!str || str === '') return '';
  try {
    return parseCookie(window.atob(str));
  } catch (error) {
    return false;
  }
};

const logicStringCookie = (cookie, prefix) => {
  const _prefix = prefix || 'HS';

  return _prefix + cookie;
};
const encodedStringCookie = str => window.btoa(unescape(encodeURIComponent(str)));
export default {
  encodedString(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  },

  mapOptions(listValue, fieldText, fieldValue) {
    const listResult = [];
    listValue.forEach(o => {
      listResult.push({
        text: o[fieldText],
        value: o[fieldValue],
      });
    });

    return listResult;
  },

  decodedString(str) {
    if (!str || str === '') return '';

    return parsePassword(window.atob(str));
  },

  logicStringPassword(userName, password, prefix) {
    const _prefix = prefix || 'HS';

    return `${_prefix + userName}${password}`;
  },

  setAuthInHeader(accessToken) {
    Vue.axios.defaults.headers.common['Access-Token'] = accessToken
      ? `${accessToken}`
      : null;
  },

  copyObject(obj) {
    let output; let v; let
      key;
    output = Array.isArray(obj) ? [] : {};

    for (key in obj) {
      v = obj[key];
      if (v) {
        output[key] = typeof v === 'object' ? this.copyObject(v) : v;
      } else {
        output[key] = v;
      }
    }

    return output;
  },

  logout() {
    sessionStorage.removeItem(STORAGE_USER_NAME);
    sessionStorage.removeItem(STORAGE_USER_ROLE);
    sessionStorage.removeItem(STORAGE_ACCESS_TOKEN);
    sessionStorage.removeItem(STORAGE_SWITCH_MODE);
    sessionStorage.removeItem(STORAGE_MESH_MODE);
    sessionStorage.removeItem(STORAGE_PERMISSIONS);
    sessionStorage.removeItem(STORAGE_STATUS_POLICY);
    sessionStorage.removeItem(STORAGE_OPMODE);
    sessionStorage.removeItem(STORAGE_FIRMWARE);
    sessionStorage.removeItem(STORAGE_SYSTEM_TIMER_PING);
    sessionStorage.removeItem(STORAGE_IS_DEFAULT_USER);
  },

  traverseAndFlatten(currentNode, target, flattenedKey) {
    for (const key in currentNode) {
      if (currentNode.hasOwnProperty(key)) {
        var newKey;
        if (flattenedKey === undefined) {
          newKey = `/${key}`;
        } else {
          newKey = `${flattenedKey}/${key}`;
        }
        const value = currentNode[key];
        if (typeof value === 'object' && value.type !== 'hidden') {
          this.traverseAndFlatten(value, target, newKey);
        } else {
          target[newKey] = value;
        }
      }
    }
  },

  flatten(obj) {
    const flattenedObject = {};
    this.traverseAndFlatten(obj, flattenedObject);

    return flattenedObject;
  },

  getSessionStorage(id) {
    if (sessionStorage.getItem(id) === null) {
      return null;
    }

    if (
      (id === STORAGE_SWITCH_MODE
        || id === STORAGE_MESH_MODE
        || id === STORAGE_USER_ROLE
        || id === STORAGE_USER_NAME
        || id === STORAGE_PERMISSIONS
        || id === STORAGE_OPMODE)
      && sessionStorage.getItem(STORAGE_ACCESS_TOKEN) !== null
    ) {
      // need to decode
      const idHash = sessionStorage.getItem(id);
      const key = sessionStorage.getItem(STORAGE_ACCESS_TOKEN).substr(0, 16);
      if (decodedCookieString(idHash)) {
        try {
          const stringDecode = Hash_Gen.decodedStringAES(
            decodedCookieString(idHash),
            key,
          );

          return stringDecode;
        } catch (error) {
          this.logout();

          return;
        }
      }

      // invalid cookie -> logout
      this.logout();

      return;
    }

    return sessionStorage.getItem(id);
  },

  setSessionStorage(id, value, opt) {
    if (
      (id === STORAGE_SWITCH_MODE
        || id === STORAGE_MESH_MODE
        || id === STORAGE_USER_ROLE
        || id === STORAGE_PERMISSIONS
        || id === STORAGE_USER_NAME
        || id === STORAGE_OPMODE)
      && sessionStorage.getItem(STORAGE_ACCESS_TOKEN) !== null
    ) {
      // need to encode
      const key = sessionStorage.getItem(STORAGE_ACCESS_TOKEN).substr(0, 16);
      const cookieAES = Hash_Gen.encodedStringAES(value, key);
      const stringTrans = logicStringCookie(cookieAES);
      const stringEncode = encodedStringCookie(stringTrans);

      sessionStorage.setItem(id, stringEncode, opt);
    } else {
      sessionStorage.setItem(id, value, opt);
    }
  },

  deleteSessionStorage(id) {
    sessionStorage.removeItem(id);
  },

  compareObjects(o1, o2) {
    return equals(o1, o2);
  },
  randomString(len, charSet) {
    charSet = charSet
      || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < len; i++) {
      const randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }

    return randomString;
  },
  checkFirstOctet(ip) {
    const firstOctet = ip.split('.')[0];
    switch (firstOctet) {
      case '192':
        return 3;
      case '172':
        return 2;
      case '10':
        return 1;
    }
  },
  convertNumber(data, defaultValue) {
    defaultValue = !isNaN(defaultValue) ? defaultValue : null;
    const number = parseInt(data);

    return isNaN(number) ? defaultValue : number;
  },
  convertString(data, defaultValue) {
    if (typeof data === 'string') {
      return data;
    }

    let string = defaultValue || '';
    if (typeof data === 'number' || typeof data === 'boolean') {
      string = data.toString();
    }

    return string;
  },
  preventInputKeydown(e) {
    /**
     * Allow: backspace, delete, tab, escape, enter
     */

    if (
      [8, 9, 13, 27, 46].indexOf(e.keyCode) !== -1

      /**
       * Allow: Ctrl+A, Command+A, Ctrl+C, Command+C, Ctrl+R, Command+R, Ctrl+V, Command+V, Ctrl+X, Command+X
       */
      || ((e.keyCode == 65
        || e.keyCode == 67
        || e.keyCode == 82
        || e.keyCode == 86
        || e.keyCode == 88)
        && (e.ctrlKey === true || e.metaKey === true))

      /**
       * Allow: home, end, left, right, down, up and allow when text is highlighted
       */
      || (e.keyCode >= 35 && e.keyCode <= 40)
      || (e.keyCode >= 112 && e.keyCode <= 123)
    ) {

    } else {
      e.preventDefault();
    }
  },

  preventNonNumeric(e) {
    /**
     * List keycode:
     * 'backspace' - 8, 'tab' - 9, 'enter' - 13, 'escape' - 27, 'home' - 35, 'end' - 36, 'delete' - 46
     * 'left' - 37, 'up' - 38, 'right' - 39, 'down' - 40
     * '0-9' - 48 - 57 and 96 -105
     * 'a' - 65, 'c' - 67, 'v' - 86, 'x' - 88
     * '.' - 110 (decimal point) and 190 (period)
     */
    /**
     * Allow: backspace, delete, tab, escape, enter
     */
    if (
      [8, 9, 13, 27, 46].indexOf(e.keyCode) !== -1

      /**
       * Allow: Ctrl+A, Command+A, Ctrl+C, Command+C, Ctrl+R, Command+R, Ctrl+V, Command+V, Ctrl+X, Command+X
       */
      || ((e.keyCode == 65
        || e.keyCode == 67
        || e.keyCode == 82
        || e.keyCode == 86
        || e.keyCode == 88)
        && (e.ctrlKey === true || e.metaKey === true))

      /**
       * Allow: home, end, left, right, down, up and allow when text is hightlighted
       */
      || (e.keyCode >= 35 && e.keyCode <= 40)
      || (e.keyCode >= 112 && e.keyCode <= 123)
    ) {
      return;
    }

    /**
     * Ensure that it is a number and stop the keypress
     */
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57)
      && (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  },
  maskMacAddress(value) {
    if (value === undefined || value === null) {
      return;
    }
    const macAddress = value || '';
    if (macAddress !== '') {
      let deviceMac = macAddress;
      deviceMac = deviceMac.toUpperCase();
      if (deviceMac.length >= 3 && deviceMac.length <= 16) {
        deviceMac = deviceMac.replace(/\W/gi, '');
        deviceMac = deviceMac.replace(/(.{2})/g, '$1:');
      }

      return deviceMac;
    }

    return value;
  },
  checkIsChangeData(listData, rule) {
    if (listData.length === null || listData.length === undefined) {
      return false;
    }
    const obj = listData.filter(e => equals(rule, e));

    return obj.length !== 1;
  },
  parseArrayForSelectBox(array, setIndex) {
    if (!Array.isArray(array) || !array) {
      return [];
    }
    const tempArr = [];
    for (let i = 0, len = array.length; i < len; i++) {
      const tempObj = {};
      if (setIndex) {
        tempObj.value = i;
      } else {
        tempObj.value = array[i];
      }
      tempObj.text = array[i].text;
      tempObj.dst = array[i].dst;
      tempArr.push(tempObj);
    }

    return tempArr;
  },
  checkSecurityLevel(input) {
    if (input === null || input === undefined || input === '') {
      return;
    }
    const pattern = {
      sameChar: new RegExp(/^(.)\1+$/),

      // textOnly: new RegExp(/^[a-zA-Z]+$/),
      // numberOnly: new RegExp(/^[0-9]+$/),
      numAndChar: new RegExp(/^[a-zA-Z0-9]+$/),
      numAndUpper: new RegExp(/^[A-Z0-9]+$/),
      numAndLower: new RegExp(/^[a-z0-9]+$/),
    };
    let level = null;
    const { length } = input;
    const minimumLengthWeak = 4;
    const minimumLengthMedium = 7;
    if (length === 0) {
      level = null;
    } else {
      level = 3;

      if (
        pattern.sameChar.test(input)

        // pattern.numberOnly.test(input) ||
        // pattern.textOnly.test(input) ||
        || (pattern.numAndUpper.test(input) && length < minimumLengthWeak)
        || (pattern.numAndLower.test(input) && length < minimumLengthWeak)
      ) {
        level = 1;
      } else if (
        length < minimumLengthMedium
        || (pattern.numAndUpper.test(input) && length >= minimumLengthWeak)
        || (pattern.numAndLower.test(input) && length >= minimumLengthWeak)
      ) {
        level = 2;
      }
    }

    return level;
  },
  checkSecurityLevelHasSpecialChar(input) {
    if (input === null || input === undefined || input === '') {
      return;
    }
    const pattern = {
      sameChar: new RegExp(/^(.)\1+$/),
      numAndChar: new RegExp(/^[a-zA-Z0-9]+$/),
      numAndUpper: new RegExp(/^[A-Z0-9]+$/),
      specialChar: new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#%^&*_+\-=\[\]\{\}\\\/<>?;\(\"$?'<\)+.,/:|~`]).*$/),
      numAndLower: new RegExp(/^[a-z0-9]+$/),
    };
    let level = null;
    const { length } = input;
    const minimumLengthWeak = 4;
    const minimumLengthMedium = 7;
    if (length === 0) {
      level = null;
    } else {
      level = 3;
      if (
        pattern.sameChar.test(input)
        || (pattern.numAndUpper.test(input) && length < minimumLengthWeak)
        || (pattern.numAndLower.test(input) && length < minimumLengthWeak)
      ) {
        level = 1;
      } else if (
        length < minimumLengthMedium
        || (pattern.numAndUpper.test(input) && length >= minimumLengthWeak)
        || (pattern.numAndLower.test(input) && length >= minimumLengthWeak)
      ) {
        level = 2;
      }
      if (!pattern.specialChar.test(input)) {
        level = 4;
      }
    }

    return level;
  },
  formatSpace(mbSpace, decimals) {
    const obj = {
      number: 0,
      unit: 'usb_text_MB',
    };

    if (typeof mbSpace === 'string') {
      mbSpace = this.convertNumber(mbSpace);
    }

    if (typeof decimals === 'string') {
      decimals = this.convertNumber(decimals);
    }

    if (typeof mbSpace === 'undefined' || mbSpace === null || mbSpace === 0) {
      return obj;
    }

    const k = 1024;
    const sizes = ['usb_text_MB', 'usb_text_GB', 'usb_text_TB'];
    const dm = typeof decimals === 'undefined' || decimals === null ? 1 : decimals;
    const i = Math.floor(Math.log(mbSpace) / Math.log(k));

    obj.number = parseFloat((mbSpace / Math.pow(k, i)).toFixed(dm));
    obj.unit = sizes[i];

    return obj;
  },
  calculateUsedSize(available, total) {
    if (typeof available === 'string') {
      available = this.convertNumber(total);
    }
    if (typeof total === 'string') {
      total = this.convertNumber(total);
    }
    const obj = {
      used: 0,
      usedPercent: '',
    };
    obj.used = total - available;
    obj.usedPercent = Math.round((obj.used / total) * 100);

    return obj;
  },
  formatDaysAgo(time, inBaseTime) {
    const obj = {
      displayDatetime: '',
      number: 0,
      text: '',
    };
    switch (typeof time) {
      case 'number':
      case 'string':
        time = createDate(time);
        break;
      case 'object':
        break;
      case 'undefined':
        return obj;
      default:
        time = new Date();
    }

    if (isNaN(time.getTime())) {
      return obj;
    }

    let baseTime;
    switch (typeof inBaseTime) {
      case 'number':
      case 'string':
        baseTime = createDate(inBaseTime);
        break;
      case 'object':
        break;
      case 'undefined':
      default:
        baseTime = new Date();
    }

    const msPerMinute = 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const elapsed = (+baseTime.getTime() - time.getTime()) / 1000;

    let months = time.getMonth() + 1;
    months = months > 9 ? months : `0${months}`;
    let date = time.getDate();
    date = date > 9 ? date : `0${date}`;

    if (elapsed < msPerDay) {
      const hours = Math.round(elapsed / msPerHour);
      obj.number = hours;
      if (hours === 1 || hours === 0) {
        obj.text = 'disconnected_devices_homepage_one_hour_ago';
      } else if (hours >= 24) {
        obj.number = 1;
        obj.text = 'disconnected_devices_homepage_one_day_ago';
      } else {
        obj.text = 'disconnected_devices_homepage_many_hours_ago';
      }
    } else {
      const days = Math.round(elapsed / msPerDay);
      obj.number = days;

      if (days === 1) {
        obj.text = 'disconnected_devices_homepage_one_day_ago';
      } else if (days >= 7) {
        obj.number = 0;
        obj.displayDatetime = `${time.getFullYear()}.${months}.${date}`;
      } else {
        obj.text = 'disconnected_devices_homepage_many_days_ago';
      }
    }

    return obj;
  },
  convertBoolean(data) {
    if (typeof data === 'boolean') {
      return data;
    }

    const boolMap = {
      no: false,
      false: false,
      unactive: false,
      0: false,
      off: false,
    };
    const checkBoolValue = bValue => (!boolMap.hasOwnProperty(bValue));

    let ret = false;
    if (typeof data === 'string') {
      const lowerCase = data.toLowerCase();
      ret = checkBoolValue(lowerCase);
    } else if (typeof data === 'number') {
      ret = checkBoolValue(data);
    }

    return ret;
  },
  getTextNameById(id, list) {
    if (id === null || id === undefined) {
      return;
    }
    const vList = Array.from(list || []);
    const vId = vList.findIndex(item => item.value === id);

    return vList[vId].text;
  },
  checkDisableAddButton(cdata) {
    if (!cdata.hasOwnProperty('rules')) {
      return false;
    } if (
      cdata.rules !== undefined
      && cdata.rules.length >= cdata.maxRules
    ) {
      return true;
    }

    return false;
  },
  getSwitchModeString(mode) {
    let str = '';
    if (!mode) {
      return str;
    }
    switch (mode) {
      case SWITCH_MODE_TYPE.ROUTER:
        str = 'header_router_mode_title';
        break;
      case SWITCH_MODE_TYPE.BRIDGE:
        str = 'header_bridge_mode_title';
        break;
      default:
        str = 'advanced_operation_mode_sub_card_router_mode_title';
    }

    return str;
  },
  calculateLevel(password) {
    let ret = USER_PW_SECURITYLEVEL.WEAK;
    const levelNumber = this.checkSecurityLevel(password);
    switch (levelNumber) {
      case 1:
        ret = USER_PW_SECURITYLEVEL.WEAK;
        break;
      case 2:
        ret = USER_PW_SECURITYLEVEL.MEDIUM;
        break;
      case 3:
        ret = USER_PW_SECURITYLEVEL.STRONG;
        break;

      default:
        ret = USER_PW_SECURITYLEVEL.WEAK;
        break;
    }

    return ret;
  },
  calculateLevelHasSpecial(password) {
    let ret = USER_PW_SECURITYLEVEL.WEAK;
    const levelNumber = this.checkSecurityLevelHasSpecialChar(password);
    switch (levelNumber) {
      case 1:
        ret = USER_PW_SECURITYLEVEL.WEAK;
        break;
      case 2:
        ret = USER_PW_SECURITYLEVEL.MEDIUM;
        break;
      case 3:
        ret = USER_PW_SECURITYLEVEL.STRONG;
        break;
      case 4:
        ret = USER_PW_SECURITYLEVEL.MISSING_SPECIAL;
        break;
      default:
        ret = USER_PW_SECURITYLEVEL.WEAK;
        break;
    }

    return ret;
  },
  makeMutationObsv() {
    window.MutationObserver = window.MutationObserver
      || window.WebKitMutationObserver
      || window.MozMutationObserver;
    let observer;
    if (window.MutationObserver) {
      observer = new MutationObserver((mutations => {
        mutations.forEach(mutation => {
          if (
            mutation.type === 'attributes'
            && mutation.attributeName === 'type'
          ) {
            if (
              mutation.target.type === 'text'
              && !mutation.target.noMutation
            ) {
              mutation.target.type = 'password';
            }
          }
        });
      }));
    } else {
      observer = new mutationobserverShim((mutations => {
        mutations.forEach(mutation => {
          if (
            mutation.type === 'attributes'
            && mutation.attributeName === 'type'
          ) {
            if (
              mutation.target.type === 'text'
              && !mutation.target.noMutation
            ) {
              mutation.target.type = 'password';
            }
          }
        });
      }));
    }

    return observer;
  },
  connMutationObsv(obsv, target) {
    const config = {
      attributes: true,
    };
    obsv.observe(target, config);
  },
  disconnMutationObsv(obsv) {
    obsv.disconnect();
  },
  expandIPv6Address(address) {
    let fullAddress = '';
    let expandedAddress = '';
    const validGroupCount = 8;
    const validGroupSize = 4;

    let ipv4 = '';
    const extractIpv4 = /([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/;
    const validateIpv4 = /((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})/;

    // look for embedded ipv4
    if (validateIpv4.test(address)) {
      groups = address.match(extractIpv4);
      for (let i = 1; i < groups.length; i++) {
        ipv4
          += (`00${parseInt(groups[i], 10).toString(16)}`).slice(-2)
          + (i == 2 ? ':' : '');
      }
      address = address.replace(extractIpv4, ipv4);
    }

    if (address.indexOf('::') == -1)

    // All eight groups are present.
    { fullAddress = address; }

    // Consecutive groups of zeroes have been collapsed with "::".
    else {
      const sides = address.split('::');
      let groupsPresent = 0;
      for (let i = 0; i < sides.length; i++) {
        groupsPresent += sides[i].split(':').length;
      }
      fullAddress += `${sides[0]}:`;
      for (let i = 0; i < validGroupCount - groupsPresent; i++) {
        fullAddress += '0000:';
      }
      fullAddress += sides[1];
    }
    let groups = fullAddress.split(':');
    for (let i = 0; i < validGroupCount; i++) {
      while (groups[i].length < validGroupSize) {
        groups[i] = `0${groups[i]}`;
      }
      expandedAddress += i != validGroupCount - 1 ? `${groups[i]}:` : groups[i];
    }

    return expandedAddress;
  },
  checkRole(item) {
    const vItem = this.copyObject(item);
    if (!vItem.roles) {
      vItem.roles = [];
    }
    const vRole = this.getSessionStorage(STORAGE_USER_ROLE);
    const hasRolePer = vItem.roles.length === 0 || vItem.roles.includes(vRole);

    return hasRolePer;
  },
  async setWEBFont(param) {
    return false;
    const agent = navigator.userAgent.toLowerCase();
    const match = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let ver = '';
    if (match !== null) {
      ver = match ? parseInt(match[1]) : 0;
    }

    // IE
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf('msie') != -1)) {
      const p = new Ping({ timeout: 1000 });
      p.ping('https://www.google.com', err => {
        if (err || !navigator.onLine) {
          return false;
        }
        WebFont.load(param);
      });
    } else if (ver !== '' && ver < 90) {
      try {
        fetch('https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5vAA.woff', {
          method: 'GET',
          headers: {
            'Content-Type': 'font/woff2',
          },
        });
        fetch('https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Me5g.woff', {
          method: 'GET',
          headers: {
            'Content-Type': 'font/woff2',
          },
        });
        fetch('https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9vAA.woff', {
          method: 'GET',
          headers: {
            'Content-Type': 'font/woff2',
          },
        });
        fetch('https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlvAA.woff', {
          method: 'GET',
          headers: {
            'Content-Type': 'font/woff2',
          },
        });
      } catch (err) {
        return false;
      }
    } else {
      try {
        const online = await window.fetch('https://www.google.com', {
          mode: 'no-cors',
        });
        const result = online.status >= 200 && online.status < 300; // either true or false
        WebFont.load(param);

        return result;
      } catch (err) {
        return false; // definitely offline
      }
    }
  },
};
