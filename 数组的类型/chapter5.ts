//数组的类型

//类型 + 方括号」来表示数组
let arr: number[] = [1, 2, 3, 4];
console.log(arr);
//泛型数组
let arr2: Array<number> = [1, 1, 2, 3, 5];
console.log(arr2);

//接口类型数组,不推荐
interface NumberArray {
    [index: number]: number;
}

let arr3: NumberArray = [1, 1, 2, 3, 5];
console.log(arr3);


//类数组
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

interface IArguments {
    [index: number]: any;

    length: number;
    callee: Function;
}

function sum2() {
    let args: IArguments = arguments;
}

//any数组
let list: any[] = ['xcatliu', 25, {website: 'http://xcatliu.com'}];