export default class Dep {
  constructor() {
      this.subs = []  // 用于存储依赖。
  }
  // 用于添加依赖(watcher)
  depend () {
      if(Dep.target) { // 这里是使用，但是要思考下在哪里设置哦。
          this.addSub(Dep.target)
      }
  }
  addSub(sub) {
      this.subs.push(sub)
  }
  // 当数据变化的时候派发数据。
  notify () {
      this.subs.forEach((watcher) => watcher.update())
  }
}