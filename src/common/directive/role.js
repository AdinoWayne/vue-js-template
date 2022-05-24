import Vue from 'vue';
import Utils from '@/common/utils';
import { STORAGE_USER_ROLE } from '@/common/constants';

const role = {
  inserted(el, binding) {
    const { value } = binding;
    const role = Utils.getSessionStorage(STORAGE_USER_ROLE);

    if (value) {
      if (
        (typeof value === 'object' && value.findIndex(o => o === role) < 0)
        || (typeof value === 'string' && value !== role)
      ) {
        // eslint-disable-next-line no-unused-expressions
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  },
};

Vue.directive('role', role);

export default role;
