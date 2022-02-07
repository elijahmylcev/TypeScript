interface Rect {
	readonly id: string; // Только для чтения
	color?: string; // <-- необязательный параметр
	size: {
		width: number;
		height: number;
	};
}

const rect1: Rect = {
	id: '1',
	size: {
		width: 10,
		height: 10,
	},
	color: '#fff',
};

const rect2: Rect = {
	id: '2',
	size: {
		width: 12,
		height: 10,
	},
};

rect2.color = 'black'; // Как и в JS в случае, когда const является сложным объектом(OBJ || Array) можно изменять ее внутреннее состояние, но нельзя переопределить.

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// =====================================================
// Наследование interfaces

interface RectWithArea extends Rect {
	getArea: () => number; // Так указывается тип функции, а после => то, что она возвращает
}

const rect5: RectWithArea = {
	id: '3',
	size: {
		width: 10,
		height: 10,
	},
	getArea() {
		return this.size.width * this.size.height;
	},
};

// ========================================

interface IClock {
	time: Date;
	setTime(date: Date): void;
}

class Clock implements IClock {
	time: Date = new Date();
	setTime(date: Date): void {
		this.time = date;
	}
}

// ====================================

interface Styles {
	[key: string]: string;
}

const css = {
	border: '1px solid black',
	marginTop: '2px',
};
