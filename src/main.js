import Vue from 'vue'
import App from './App.vue'
import { Table, TableColumn, Pagination } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

new Vue({
  render: h => h(App),
}).$mount('#app')
