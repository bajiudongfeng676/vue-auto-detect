import observe from './observe.js' 
import Watcher from './Watcher.js'
let obj = { a: { m: 1 }, b: 2 } 
observe(obj)
new Watcher(obj, 'a.m', (value, oldValue) => {
    console.log(`value is ${value}, oldValue is ${oldValue}`)
})
obj.a.m
obj.b = {d: 1}
obj.b.d