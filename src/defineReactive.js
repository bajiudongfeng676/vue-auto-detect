import observe from './observe.js'
import Dep from './dep.js'
function defineReactive(obj, key, value = obj[key]) {
   observe(value)
   // let deps = []
   let dep = new Dep() // 新增的
   Object.defineProperty(obj, key, {
      get() { 
          console.log(`属性${key}被访问了`)
         // dep.push(watcher) // 但是这个地方我们是取不到watcher的，那么怎么办呢？把watcher变成全局的呀。因此代码需要进一步修改。比如我们可以放在window.target 属性上。
          dep.depend() // 新增的
          return value; 
      },
      set(newValue) {
          if(value === newValue) return;
          console.log(`属性${key}被修改了`)
          value = newValue; 
          observe(value)
          // deps.forEach((item) => item.update() )
          dep.notify() // 新增的。
      },
    });
}
export default defineReactive