// 响应式  观察者模式  pub-sub
function observer(value) {
    if(!value || typeof value !=='object') {
        return;
    }
    // 数据 _data里的每个key:value,都需要被defineProperty
    Object.keys(value).forEach((key)=>{
        console.log('a')
        defineReactive(value,key,value[key])
    })
}
function defineReactive(obj,key,val) {
    Object.defineProperty(obj,key,{
        enumerable: true, //可遍历的
        configurable: true,
        get: function reactiveGetter() {
            return val;
        },
        set:function reactiveSetter(newVal) {
            if(newVal == val) return;
            val = newVal;
            cb(newVal);
        }
    })
}

function cb(val) {
    console.log('视图更新了，新的值应该为'+val)
}
class Vue {
    constructor(options) {
        this._data=options.data;
        observer(this._data);
    }
}


// 发布订阅者模式是vue 数据响应的核心，
// 一对多的关系
let o = new Vue({
    data: {
        test: 'I am test',
        name: 'dzy'
    }    
})

o._data.test ='hello,test';
o._data.test ='hello,test';