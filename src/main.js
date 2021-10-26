import Vue from 'vue'
import App from './App.vue'
import { Table, TableColumn } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  render: h => h(App),
}).$mount('#app')
