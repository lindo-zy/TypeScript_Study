//布尔类型 boolean
const isDone: boolean = false;
console.log(isDone);
//构造函数不是布尔值,编译会报错
//const newBoolean:boolean=new Boolean(1);

//返回的是Boolean对象，和java有点像
let createdByNewBoolean: Boolean = new Boolean(1);
console.log(createdByNewBoolean); //[Boolean: true]

let isEnd: boolean = Boolean(0);
console.log(isEnd);

//数值类型 number
//十进制
let dec: number = 6;
//十六进制,输出的其实是十进制15
let hex: number = 0xf;
//二进制，和python一样，输出的是十进制10
let bin: number = 0b1010;
let notANumber: number = NaN;
let infinity: number = Infinity;
console.log(dec, hex, bin, notANumber, infinity);

//字符串string
// @ts-ignore
let myName: string = 'Tom';
console.log(myName);
//模板字符串
console.log(`Hello,my name is ${myName}`);


//空值
//void 不可再赋值
let unusable: void = undefined;

//undefined和null可以再赋值
let u: undefined = undefined;
let n: null = null;