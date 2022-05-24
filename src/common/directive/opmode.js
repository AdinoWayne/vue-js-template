/* eslint-disable */
import Vue from "vue";
import Utils from "@/common/utils";
import { COOKIE_OPMODE, QMODE_OPERATION, MENU_TYPE } from "@/common/constants";
/**
 * Operation mode directive
 * - opList (required)
 * - type (required)
 * - className (required)
 */

const getOPMode = () => {
  let vOPMode = Utils.getSessionStorage(COOKIE_OPMODE);
  if (vOPMode === undefined || vOPMode === null) {
    vOPMode = QMODE_OPERATION.ROUTER;
  }
  return vOPMode;
};
const isMatchOpMode = listOP => {
  if (listOP === null || listOP === undefined) {
    return false;
  }
  const vList = Array.from(listOP);
  if (vList.length === 0) {
    return true;
  }
  const vOPMode = getOPMode();
  for (let i = 0; i < vList.length; i++) {
    if (vList[i] === vOPMode) {
      return true;
    }
  }
  return false;
};

/* check with className = "nav-bar-menu" */
const isMatchName = el => {
  const matchedName = "nav-bar-menu";
  if (el && el.className.indexOf(matchedName) !== -1) {
    return true;
  }
  return false;
};

/* check with className = "op-map" */
const isMatchNameMap = el => {
  const matchedName = "op-map";
  if (el && el.className.indexOf(matchedName) !== -1) {
    return true;
  }
  return false;
};

const updateEl = (el, value) => {
  const classOrg = el.className;
  /* only check with current nav bar */
  if (!isMatchOpMode(value.opList) && isMatchName(el)) {
    if (value.type === MENU_TYPE.MAIN) {
      /* Add class disabled and class `disabled`*/
      if (classOrg.indexOf("disabled") < 0) {
        el.classList = el.className + " " + "disabled";
      }
      el.setAttribute("disabled", "disabled");

      if (el.childNodes.length > 0) {
        if (
          el.childNodes[0] &&
          (el.childNodes[0].nodeName === "a" ||
            el.childNodes[0].nodeName === "A")
        ) {
          /* Disabled the click event */
          el.childNodes[0].href = "javascript: void( return false;)";
          el.childNodes[0].style.pointerEvents = "none";
          el.childNodes[0].style.cursor = "text";
          el.childNodes[0].style.color = "#a6a6a6";
          el.childNodes[0].setAttribute("disabled", "disabled");
        }
        /* remove all childen sub-menu*/
        el.childNodes[1] && el.removeChild(el.childNodes[1]);
      }
    } else if (value.type === MENU_TYPE.SUB) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  }

  /* only check with current map*/
  if (!isMatchOpMode(value.opList) && isMatchNameMap(el)) {
    if (value.type === MENU_TYPE.MAP) {
      if (el) {
        el.style.pointerEvents = "none";
      }
    }
  } else if (!isMatchOpMode(value.opList) && value.type === MENU_TYPE.OTHER) {
    el.parentNode && el.parentNode.removeChild(el);
  }
};

const opmode = {
  inserted(el, binding) {
    const { value } = binding;
    updateEl(el, value);
  },
  update(el, newVal) {
    updateEl(el, newVal.value);
  }
};

// Register a global custom directive called `v-opmode`
Vue.directive("opmode", opmode);

export default opmode;
