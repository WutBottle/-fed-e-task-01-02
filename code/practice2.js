const fp = require('lodash/fp');
const {Maybe, Container} = require('./support');

// Practice1: 使用fp.add(x, y)和fp.map(f, x)创建一个能让functor里的值增加的函数ex1
let maybe = Maybe.of([5, 6, 1]);
let ex1 = addNum => maybe
  .map(fp.map(fp.add(addNum)));
console.log(ex1(10));

// Practice2: 实现一个函数ex2, 能够使用fp.first获取列表的第一个元素
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
let ex2 = xs.map(fp.first);
console.log(ex2);

// Practice3: 实现一个函数ex3, 使用safeProp和fp.first找到user的名字和首字母
let safeProp = fp.curry(function (x, o) {
  return Maybe.of(o[x])
});
let user = {id: 2, name: "Albert"};
let ex3 = safeProp('name', user).map(fp.first);
console.log(ex3);

// Practice4: 使用Maybe重写ex4
let ex4 = n => Maybe.of(n).map(parseInt);
console.log(ex4);


