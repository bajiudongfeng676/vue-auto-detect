import defineReactive from './defineReactive.js'
class Observer {
    constructor(obj){
        this.obj = obj
        this.walk()
      }
      walk() {
        // 遍历该对象，并进行数据劫持
        Object.keys(this.obj).forEach((key) => defineReactive(this.obj, key))
      }
}
export default Observer