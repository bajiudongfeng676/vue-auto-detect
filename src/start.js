let obj = {
  a: {
      m: 1
  },
  b: 2,
}
// let key = 'b'
// let value = obj.b
// Object.defineProperty(obj, key, {
// get() { 
//     console.log(`属性${key}被访问了`)
//     return value; 
// },
// set(newValue) {
//     if(value === newValue) return;
//     console.log(`属性${key}被修改了`)
//     value = newValue; 
// },
// });
// obj.b // 属性b被访问了
// obj.b = 20 // 属性b被修改了


// function defineReactive(obj, key, value = obj[key]) {
//   Object.defineProperty(obj, key, {
//      get() { 
//          console.log(`属性${key}被访问了`)
//          return value; 
//      },
//      set(newValue) {
//          if(value === newValue) return;
//          console.log(`属性${key}被修改了`)
//          value = newValue; 
//      },
//    });
// }
// defineReactive(obj, 'b')
// obj.b // 属性b被访问了
// obj.b = 20 // 属性b被修改了

function walk(obj) {
  Object.keys(obj).forEach((key) => defineReactive(obj, key))
}
// 因此只需要调用walk方法即可
// walk(obj)
// obj.a
// obj.b
// obj.b = 20
// obj.a.m

function defineReactive(obj, key, value = obj[key]) {
  observe(value) // 新增的，如果value不是对象直接返回，继续后面代码，如果是对象，那么递归。
  Object.defineProperty(obj, key, {
     get() { 
         console.log(`属性${key}被访问了`)
         return value; 
     },
     set(newValue) {
         if(value === newValue) return;
         console.log(`属性${key}被修改了`)
         value = newValue; 
         observe(value) // 新增的。newValue也可能是一个对象，因此这里要记得。
     },
   });
}

function observe(obj) {
  if(typeof obj !== 'object') return
  walk(obj)
}
observe(obj)
obj.a.m
obj.b = {d: 1}
obj.b.d