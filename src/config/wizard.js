import { QMODE_OPERATION } from '@/common/constants';

const WIZARD_STEPS = {
  WELCOME: {
    process: null,
    step: 1,
    nextStep: 2,
    preStep: null,
    data: null,
  },
  CHANGE_PASSWORD: {
    stepText: 'management_wizard_change_password_title',
    process: 1,
    step: 2,
    nextStep: 3,
    preStep: 1,
    data: null,
    promise: {},
  },
  OPERATION_MODE: {
    stepText: 'management_wizard_operation_mode',
    process: 2,
    step: 3,
    data: null,
    promise: {},
    nextStep: [
      {
        mode: QMODE_OPERATION.ROUTER,
        step: 5,
      },
      {
        mode: QMODE_OPERATION.AP,
        step: 8,
      },
      {
        mode: QMODE_OPERATION.MESH_ROUTER,
        step: 5,
      },
      {
        mode: QMODE_OPERATION.MESH_AP,
        step: 9,
      },
    ],
    preStep: 2,
  },
  INTERNET_SETTING: {
    stepText: 'management_wizard_network_title',
    process: 3,
    step: 5,
    nextStep: 8,
    preStep: 3,
    data: null,
    promise: {},
  },
  WIRELESS: {
    stepText: 'management_wizard_wireless_title',
    process: 4,
    step: 8,
    nextStep: 9,
    preStep: 3,
    data: null,
    promise: {},
  },
  SUMMARY: {
    process: null,
    step: 9,
    nextStep: 10,
    preStep: [
      {
        mode: QMODE_OPERATION.ROUTER,
        step: 8,
      },
      {
        mode: QMODE_OPERATION.MESH_ROUTER,
        step: 8,
      },
      {
        mode: QMODE_OPERATION.AP,
        step: 8,
      },
      {
        mode: QMODE_OPERATION.MESH_AP,
        step: 3,
      },
    ],
    data: null,
  },
};

// eslint-disable-next-line import/prefer-default-export
export const wizardSteps = WIZARD_STEPS;
