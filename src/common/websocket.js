import Vue from 'vue';

let ws_url;
let support_ws = false;
let ws;

if (process.env.VUE_APP_MODEL !== '' && process.env.VUE_APP_MODEL) {
  const config = require(`@/config/config.js`);

  support_ws = config.SUPPORT_WS;

  if (process.env.NODE_ENV !== 'production') {
    ws_url = config.DEV_WS_URL;
  } else {
    console.log(`location.host : ${location.host}`);
    ws_url = `ws://${location.host}`;
  }
} else {
  const config = require('@/config/config.js');

  support_ws = config.SUPPORT_WS;

  if (process.env.NODE_ENV !== 'production') {
    ws_url = config.DEV_WS_URL;
  } else {
    console.log(`location.host : ${location.host}`);
    ws_url = `ws://${location.host}`;
  }
}

export default {
  beforeMount() {
    if (support_ws) {
      setTimeout(
        () => {
          ws = new WebSocket(ws_url);

          ws.onopen = e => {
            // eslint-disable-next-line
            console.log("open : " + e);
          };

          ws.onclose = e => {
            // eslint-disable-next-line
            console.log("close" + e);
          };

          ws.onmessage = e => {
            if (e.data) {
              const res = JSON.parse(e.data);
              if (res.msgType === 'noti') {
                Vue.prototype.$eventBus.$emit(res.msgBody.event);
                console.log(`WS Event : ${res.msgBody.event}`);
              }
            }
          };

          Vue.prototype.$ws = ws;
        },
        0,
        false,
      );
    }
  },
  destroyed() {
    if (support_ws) {
      ws.close();
      ws = null;
    }
  },
};
