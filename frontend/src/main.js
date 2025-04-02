import Vue from 'vue';
import App from './App.vue';
import { versionCheckMixin } from './version-check-mixin';

Vue.mixin(versionCheckMixin);

new Vue({
    render: h => h(App),
}).$mount('#app');    