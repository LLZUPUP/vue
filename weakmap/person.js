const privateData = new WeakMap()

class Person {
  constructor(name, age) {
    // this.name = name
    // this.age = age
    privateData.set(this, { name, age })
  }
  
  getName() {
    return privateData.get(this).name
  }
  getAge() {
    return privateData.get(this).age
  }

}

const zk = new Person('zk', 18)

console.log(zk.getName())

// zk.name = '曾凯'

// console.log(zk.name)

// public 属性公开，外