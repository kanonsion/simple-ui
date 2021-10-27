<script type="text/jsx">
    /*
     * 通过解析配置项，生成表格
     * */
    export default {
        name: 'simple-table',
        data() {
            return {
                defaultTaleOptions:{
                    ref: 'simpleTable'
                }
            }
        },
        props:{
            tableOptions:{
                type: Object,
                default: () => ({})
            },
            tableData: {
                type: Array,
                default: () => []
            },
            columns: {
                type: Array,
                default: () => []
            }
        },
        methods:{
            renderTable() {
                const {defaultTaleOptions, tableOptions, tableData, columns} = this
                const {props, on} = {...defaultTaleOptions, ...tableOptions}
                return (
                  <el-table
                      props={props}
                      on={on}
                      data={tableData}>
                    {this.renderColumns(columns)}
                  </el-table>
              )
            },
            renderColumns(columns){
                return columns
                    .filter(e => !e.hidden)
                    .map(column => {
                        if (column.columns) {
                            // 多级列
                            return this.renderColumn(column, this.renderColumns(column.columns))
                        } else {
                            // 常规列或者自定义组件
                            return this.renderColumn(column)
                        }
                    })
            },
            renderColumn(column, children) {
                const {on} = column
                if (column.component){
                    // 自定义组件-component形式
                    const {dom} = column.component
                    const scopedSlots = {
                        default: (props) => <dom row={props.row}/>
                    }
                    return (
                      <el-table-column
                          props={column}
                          on={on}
                          scopedSlots={scopedSlots}>
                      </el-table-column>
                    )
                } else if (column.render){
                    // 自定义组件-render形式
                    const scopedSlots = {
                        default: (props) => column.render(props)
                    }
                    return (
                      <el-table-column
                          props={column}
                          on={on}
                          scopedSlots={scopedSlots}>
                      </el-table-column>
                    )
                } else {
                    return (
                      <el-table-column props={column} on={on}>
                        {children}
                      </el-table-column>
                    )
                }
            }
        },
        render(){
            return this.renderTable()
        }
    }
</script>