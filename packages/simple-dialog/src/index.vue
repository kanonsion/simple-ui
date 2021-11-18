<script type="text/jsx">
    export default {
        name: 'simple-dialog',
        data() {
            return {
                dialogOptions: {},
                isVisible: false,
                dom: null,
                domOptions: {},
                // 关闭后的回调
                closedCallback: null
            }
        },
        methods: {
            handleOpenDialog() {
                this.isVisible = true
            },
            handleCloseDialog() {
                this.isVisible = false
            },
        },
        watch: {
            isVisible(val) {
                if (!val) {
                    this.closedCallback()
                }
            }
        },
        render() {
            const {dialogOptions, isVisible, dom, handleCloseDialog, domOptions} = this
            const {props, on} = dialogOptions
            return (
                <el-dialog
                    visible={isVisible}
                    props={props}
                    {...{on: {'update:visible': handleCloseDialog, ...on}}}
                >
                  {dom ? <dom props={domOptions.props} on={domOptions.on}></dom> : null}
                </el-dialog>
            )
        }
    }
</script>

<style scoped>

</style>
