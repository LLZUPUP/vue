// var o = {};
// o.step = 1;
// var bValue = 1;
// Object.defineProperty(o,'a',{
//     get: function() {
//         console.log('get');
//         return bValue;
//     },
//     set: function(val) {
//         console.log('设置了新的值')
//         bValue = val
//     }
// })
// o.a = 2;
// console.log(o.a)

// (function(){
//     // 'use strict'
//     console.log(this)
//     var a = {};

//     Object.defineProperty(a,'a',{
//         value: 7,
//         writable: false
//     });
//     Object.defineProperty(a,'b',{
//         value: 2,
//         enumerable: false
//     });
//     Object.defineProperty(a,'c',{
//         value: 3,
//     })
//     a.d=4;
//     for(var key in o) {
//         console.log(key,o[key])
//     }
//     console.log(Object.keys(o))
// })()
// 'use strict'
// var o = {};
// Object.defineProperty(o,"a",{
//     configurable: false,
//     get:function() {
//         return 1;
//     }
// })
// console.log(o.a);
// delete o.a;
// console.log(o.a);
function Archiver() {
    var temperature = null;
    var archive = [];

    Object.defineProperty(this,'temperature',{
        get:function() {
            console.log('get!');
            return temperature;
        },
        set:function(value) {
            temperature = value;
        }
    })


    // var data = {
    //     age: 19,
    //     name: '赵乐乐',
    // }
//     for(let key in data) {
//         Object.defineProperty(data,key,{
//             get:function() {
//                 console.log('get!')
//                 return data[key];
//             },
//             set:function(newVal) {
//                 console.log('set!');
//                 data[key] = newVal;
//             }
//         })
//     }
//     data.age = 20;
}

var arc = new Archiver();
arc.temperature = 35;
console.log(arc.temperature)
arc.temperature = 38;
console.log(arc.temperature)
