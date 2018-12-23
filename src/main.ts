import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;


import AlertPlugin from './plugins/alert/index.js';
import ConfirmPlugin from './plugins/confirm/index.js';
import TransferDom from './directives/transfer-dom/index.js';
import LoadingPlugin from './plugins/loading/index.js';
import ToastPlugin from './plugins/toast/index.js';
import DatetimePlugin from './plugins/datetime/index.js';


// import Range from './components/range/index.vue'
import XDialog from './components/x-dialog/index.vue';
import Popup from './components/popup/index.vue';
import Checklist from './components/checklist/index.vue';
import Actionsheet from './components/actionsheet/index.vue';
import Datetime from './components/datetime/index.vue';
import PopupPicker from './components/popup-picker/index.vue';
import Cell from './components/cell/index.vue';
import Group from './components/group/index.vue';


Vue.directive('transfer-dom', TransferDom);

Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
Vue.use(DatetimePlugin);

// Vue.component("range", Range);
Vue.component('x-dialog', XDialog);
Vue.component('popup', Popup);
Vue.component('checklist', Checklist);
Vue.component('popup-picker', PopupPicker);
Vue.component('group', Group);
Vue.component('cell', Cell);
Vue.component('datetime', Datetime as any);
Vue.component('actionsheet', Actionsheet);



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
