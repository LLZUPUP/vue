class Vue {
  constructor(options) {
    // console.log(options)
    this.data = options.data;
    this.methods = options.methods;
    Object.keys(this.data).forEach((key)=>{
      this.proxyKeys(key)
    })
    // 发布者 数据不只用在一个地方， 模版， 指令，方法里
    observe(this.data);//发布者 订阅发布者模式是一个常用的模式，1对多的
    // 模版里面编译的过程，建立起来订阅发布关系
    new Compile(options.el, this)
    options.mounted.call(this)
  }
  proxyKeys (key) {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function getter() {
        return this.data[key]
      },
      set: function setter(newVal) {
        this.data[key] = newVal
      }
    })
  }
}