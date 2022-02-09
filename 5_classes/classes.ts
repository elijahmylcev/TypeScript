class TypeScript {
	version: string;

	constructor(version: string) {
		this.version = version;
	}

	getInfo(name: string) {
		return `[${name}]: TypeScript version is ${this.version}`;
	}
}

// class Car {
// 	readonly model: string;
// 	readonly numberOfWheels: number = 4;

// 	constructor(theModel: string) {
// 		this.model = theModel;
// 	}
// }

class Car {
	readonly numberOfWheels: number = 4;
	constructor(readonly model: string) {}
}

//============================================
// Модификаторы

class Animal {
	protected voice: string = '';
	public color: string = 'black';

	private go() {
		console.log('go');
	}
}

class Cat extends Animal {
	public setVoice(voice: string) {
		this.voice = voice;
	}
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
