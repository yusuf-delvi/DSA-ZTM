const strings = ['a', 'b', 'c', 'd'];

// lookup O(1)
strings[1];

// push O(1)
strings.push('e');
strings.pop();

// insert O(n)
strings.unshift('x');

// delete O(n)
strings.splice('2', 0, 'alien');

// Types of arrays (static and dynamic)
// Static - fixed length of data we can add
// Dynamic - can grow as we add or remove data

// Build our own array
// === MY ARRAY ===
class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');

// console.log(newArray);
// === MY ARRAY ===
// === END ===
