//类与接口

interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;

    lightOff(): void;
}

//接口的实现java一致
class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }

    lightOn() {
        console.log('Car light on');
    }

    lightOff() {
        console.log('Car light off');
    }
}

//接口的继承
interface Alarm {
    alert(): void;
}

interface LightableAlarm extends Alarm {
    lightOn(): void;

    lightOff(): void;
}


//接口继承类,不建议使用
class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d);