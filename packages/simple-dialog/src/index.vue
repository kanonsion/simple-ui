<script type="text/jsx">
    export default {
        name: "simple-dialog",
        data() {
            return {
                dialogOptions: {},
                isVisible: false,
                dom: null,
                domOptions: {}
            }
        },
        render() {
            const {dialogOptions, isVisible, dom} = this
            const {props, on} = dialogOptions
            return (
          <el-dialog visible={isVisible} props={props} on={on}>
            {dom ? <dom></dom> : null}
          </el-dialog>
      )
        }
    }
</script>

<style scoped>

</style>
