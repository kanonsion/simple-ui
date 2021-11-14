import Vue from 'vue'
import App from './App.vue'
import { Table, TableColumn, Pagination, Dialog } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {SimpleTable, SimpleDialog} from './../packages/index'

Vue.config.productionTip = false

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(SimpleTable)

Vue.prototype.$dialog = SimpleDialog

new Vue({
  render: h => h(App),
}).$mount('#app')
