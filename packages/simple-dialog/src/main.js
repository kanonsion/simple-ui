import SimpleDialog from './index.vue'
import Vue from 'vue'

const DialogConstructor = Vue.extend(SimpleDialog)

class Dialog {
    constructor(options) {
        this.options = options
        this.instance = this.init(options)
    }

    init(options) {
        let instance = new DialogConstructor({
            data: options
        }).$mount()
        document.body.appendChild(instance.$el)
        return instance
    }

    config(options) {
        this.instance.isVisible = true
        this.instance.dialogOptions = {
            ...options,
        }

        // 链式调用
        return this
    }

    show(dom, options = {}) {
        this.instance.dom = dom
        this.instance.domOptions = {
            ...options
        }

        return this
    }

    close() {

    }
}


export default Dialog
