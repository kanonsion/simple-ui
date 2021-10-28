// 导入组件，组件必须声明 name
import SimpleTable from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
SimpleTable.install =  Vue => {
    Vue.component(SimpleTable.name, SimpleTable)
}

// 默认导出组件
export default SimpleTable