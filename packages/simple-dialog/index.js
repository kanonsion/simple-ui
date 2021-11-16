import SimpleDialog from './src/main'

export default {
    install(vue, options) {
        const dialog = new SimpleDialog(vue, options)
        Object.defineProperty(vue.prototype, '$dialog', {
            get() {
                return dialog
            },
            set() {
                throw new Error('disallow modify $create-contract')
            },
        })
    }
}
