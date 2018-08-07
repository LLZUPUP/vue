// map   weak

const map = new WeakMap()

// map.set(1, 2)
// map.set(null, 2)

var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap()
  

// WeakMap key
var o1 = {},
    o2 = function() {}

wm1.set(o1, 37)
wm2.set(o2, 'azerty')

console.log(wm1.get(o1))
console.log(wm2.get(o2))

console.log(wm1.has(o1))
console.log(wm1.delete(o1))
console.log(wm1.has(o1))