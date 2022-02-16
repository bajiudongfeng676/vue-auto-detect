export default class Watcher {
  // obj 订阅的数据对象， expression 属性的表达式比如'a.m.n', callback 回调。
  constructor(obj, expression, callback) {
      this.obj = obj
      this.expression = expression
      this.callback = callback
      this.value = this.get() // this.value 是代表订阅的数据的当前值。通过obj和expression 计算出来。因此我们要实现get()函数。
  }
  // 获取当前值
  get () {
      let value = parsePath(this.obj, this.expression)
      return value
  }
  // 派发更新的函数
  update () {
      Dep.target = this // 新增的 把watcher设置到Dep.target上。
      let oldValue = this.value
      this.value = parsePath(this.obj, this.expression)
      Dep.target = null // 新增的 收集完以后设置为null，以方便后续使用。
      this.callback.call(this.obj, this.value, oldValue)
  }
  
}
// 从obj对象中取出expression代表的值。
function parsePath(obj, expression) {
  console.log('expression->', expression)
  const segments = expression.split('.')
  for (let key of segments) {
    if (!obj) return
    obj = obj[key]
  }
  return obj
}