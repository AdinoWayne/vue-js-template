/* eslint-disable */
let CryptoJS = require("crypto-js");
const PREFIX = "hmx";
const keySize = 512 / 32;
const keySizeSalt = 256 / 32;
const hexIv = "30313233343536373839303132333435";
/**
 * keySize Note
 *  * 128 bits: 128 / 32
 *  * 256 bits: 256 / 32
 *  * 512 bits: 512 / 32
 */
export default {
  /**
   * @function getPasswordHash
   * @param password
   */
  getPasswordHash(id, password) {
    let HMXSALT = PREFIX + id;
    let salt = window.btoa(HMXSALT);
    let hash = CryptoJS.PBKDF2(password, salt, {
      keySize: keySize,
      iterations: 1000,
      hasher: CryptoJS.algo.SHA512
    });
    return hash.toString(CryptoJS.enc.Base64);
  },
  /**
   * @function getPasswordHashSalt
   * @param password
   * @param salt
   */
  getPasswordHashSalt(password, salt) {
    let hash = "";
    hash = CryptoJS.PBKDF2(password, salt, {
      keySize: keySizeSalt,
      iterations: 2048,
      hasher: CryptoJS.algo.SHA512
    });
    return hash.toString(CryptoJS.enc.Hex);
  },
  /**
   * Encode AES
   * @param str
   * @param key
   * @returns {string} - a string is encoded (HEX)
   */
  encodedStringAES(str, key) {
    const iv = CryptoJS.enc.Hex.parse(hexIv);
    const _key = CryptoJS.enc.Utf8.parse(key);
    const b64 = CryptoJS.AES.encrypt(str, _key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    }).toString();
    const e64 = CryptoJS.enc.Base64.parse(b64);
    return e64.toString(CryptoJS.enc.Hex);
  },
  /**
   * Decode AES
   * @param str
   * @param key
   * @returns {string} - a string is decoded (utf8)
   */
  decodedStringAES(str, key) {
    const iv = CryptoJS.enc.Hex.parse(hexIv);
    const b64 = CryptoJS.enc.Hex.parse(str);
    const e64 = b64.toString(CryptoJS.enc.Base64);
    const _key = CryptoJS.enc.Utf8.parse(key);
    return CryptoJS.AES.decrypt(e64, _key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    }).toString(CryptoJS.enc.Utf8);
  }
};
