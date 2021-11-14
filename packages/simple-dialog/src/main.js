import SimpleDialog from './index.vue'
import Vue from 'vue'
const DialogConstructor = Vue.extend(SimpleDialog)

let instance
const Dialog = function (options){
        instance = new DialogConstructor({
                data: options
        })

        instance.$mount()
        document.body.appendChild(instance.$el)

        return instance
}

export default Dialog
