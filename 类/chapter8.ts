//类

//带有python类型标记的java类写法
class Animal {
    //成员变量
    public name: string;

    //构造函数 java写法
    constructor(name: string) {
        this.name = name;
    }

    //类函数
    sayHi() {
        return `my name is ${this.name}`;
    }
}

//实例化
let a: Animal = new Animal('Alice');
console.log(a.sayHi());

//类的继承
//java的extends写法
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    sayHi(): string {
        return '你好，' + super.sayHi();
    }
}

let c: Cat = new Cat('Tom');
console.log(c.sayHi());

//存取器,默认为get和set
class Animal2 {
    constructor(name: string) {
        this.name = name;
    }

    get name() {
        return 'Jack';
    }

    set name(value: string) {
        console.log('setter:' + value);
    }
}

let a2: Animal2 = new Animal2('Bob');
a2.name = 'Tony';
console.log(a2.name);//Jack

//静态方法，无需实例化直接使用
class Animal3 {
    static isAnimal(a: any) {
        return a instanceof Animal3;
    };
}

console.log(Animal3.isAnimal('123'));//false

//参数属性
class Dog {
    public constructor(public name: any) {
    }
}

let dog: Dog = new Dog('WangWang');
console.log(dog.name);

//只读属性
class Animal4 {
    readonly name: string;

    public constructor(name: string) {
        this.name = name;
    }
}

//抽象类
abstract class AbsAnimal {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    // @ts-ignore
    public abstract sayHi();
}

class Bird extends AbsAnimal {
    public eat() {
        console.log(`${this.name} is eating.`);
    }

    public sayHi() {
        console.log('我是鸟！');
    }
}