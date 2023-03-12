//联合类型，用|链接，和python的类型标识一样

// @ts-ignore
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber);
// @ts-ignore
myFavoriteNumber = 7;
console.log(myFavoriteNumber);

//如果修改为布尔类型，编译会报错，但是其实也可以运行，不建议这样写
// @ts-ignore
myFavoriteNumber = false;
console.log(myFavoriteNumber);
