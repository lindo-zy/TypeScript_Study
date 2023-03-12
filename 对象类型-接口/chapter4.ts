//对象类型-接口

//有点像go的结构体写法
//接口名称首字母大写
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tome',
    age: 25
};

console.log(tom);

//可选属性的接口，用?标识

interface Student {
    name: string;
    age?: number;
}

let student: Student = {
    name: 'alice'
};
console.log(student);

//任意属性接口
interface Person2 {
    name: string;
    age?: number;
    //使用 [propName: string] 定义了任意属性取 string 类型的值。
    // 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
    [propName: string]: any;
}

let alice: Person2 = {
    name: 'alice',
    gender: 'female'
};
console.log(alice);

//只读属性接口
interface PersonReadOnly {
    readonly id: number;
    name: string;
    age?: number;

    [propName: string]: any;
}

let bob: PersonReadOnly = {
    id: 89757,
    name: 'Bob',
    gender: 'male'
};
//name属性可修改
bob.name = 'ann';
//id不允许修改，编译报错
//bob.id = 123;