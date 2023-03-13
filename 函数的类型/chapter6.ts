//函数的类型

//函数的类型声明和python类型标注几乎一样
//函数的声明
function sum(x: number, y: number): number {
    return x + y;
}

console.log(sum(1, 2));
//函数表达式
let mySum = function (x: any, y: any): any {
    return x + y;
};

console.log(mySum('1', '2'));

//完整的函数表达式声明
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};


//接口定义函数
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
};

//可选参数,放后面
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

let tomcat = buildName('Tom', 'Cat');
console.log(tomcat);

let tom2 = buildName('Tom');
console.log(tom2);

//默认参数,和python一样
function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}

let tomcat2 = buildName('Tom', 'Cat');
console.log(tomcat2);
let tom22 = buildName('Tom');
console.log(tom22);

//不定长参数，剩余参数，和java一样
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let arrayList: any[] = [];
push(arrayList, 1, 2, 3);


//函数重载，和java很像
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log(reverse('123'));
console.log(reverse(123));
//意外类型会报错
// console.log(reverse(false));