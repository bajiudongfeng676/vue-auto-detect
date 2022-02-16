import Observer from './Observer.js'

function observe(obj) {
    if(typeof obj !== 'object') return
    new Observer(obj)
}
export default observe