import { createApp, reactive, ref, unref } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

//TODO 以下是测试代码
const z = reactive({name:'zhang'})
console.log("🚀 ~ file: main.ts:7 ~ z", z)
console.log("🚀 ~ file: main.ts:7 ~ z", z.name)
const a = ref(2)
console.log("🚀 ~ file: main.ts:9 ~ a", a)
console.log("🚀 ~ file: main.ts:9 ~ a", a.value)

const b = unref(a)
console.log("🚀 ~ file: main.ts:12 ~ b", b)

let obj = {name:'TOM',age:20}
let p = new Proxy(obj,{
get(obj, prop, value){
    if (prop === 'name') {
        return obj[prop]+' proxy'
    }
    console.log("🚀 ~ file: main.ts:19 ~ obj", obj)
    console.log("🚀 ~ file: main.ts:19 ~ prop", prop)
    console.log("🚀 ~ file: main.ts:19 ~ value", value)
    
    // console.log(name)
    // return name+'proxy'
}})
console.log("🚀 ~ file: main.ts:22 ~ obj.name", p.name)
