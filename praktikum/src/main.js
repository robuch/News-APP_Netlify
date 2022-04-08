import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import moment from 'moment'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.prototype.moment = moment

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')