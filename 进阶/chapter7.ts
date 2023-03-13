//进阶

//类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

//字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele: Element, event: EventNames) {
    // do something
}

//handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
//handleEvent(document.getElementById('world'), 'dblclick'); /; 报错，event 不能为 'dblclick';

//元组,和python差不多
let names: [string, number] = ['alice', 18];
console.log(names); //[ 'alice', 18 ]

//枚举
//从0到1递增,k-v形式
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days);