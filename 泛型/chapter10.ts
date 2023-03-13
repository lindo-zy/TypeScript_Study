//泛型
//泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型
//而在使用的时候再指定类型的一种特性。

//定义有点像java的泛型
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

// @ts-ignore
let a = createArray<string>(3, 'x'); // ['x', 'x', 'x']
console.log(a);