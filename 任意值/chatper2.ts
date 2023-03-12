//任意值 Any

//如果普通类型，赋值后再改变类型是不行的
// @ts-ignore
let myFavoriteNumber: string = 'seven';
//以下编译会报错
//myFavoriteNumber = 7;

let myAny: any = 'tom';
console.log(myAny); //tom
myAny = 123;
console.log(myAny); //123


//未声明类型的变量，都默认为any
//编辑器会提示不规范，但是可以编译通过，不建议这样写
// @ts-ignore
let myName = 'Alice';
console.log(myName);
// @ts-ignore
myName = 456;
console.log(myName);