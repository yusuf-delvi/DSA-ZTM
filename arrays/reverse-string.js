// Reverse a string
// Given string it should return a reversed string
// Eg: "Hello World" -> "dlroW olleH", "Hello" -> "olleH"

function reverse(str) {
	// check input
	if (!str || str.length < 2 || typeof str !== 'string') {
		return str;
	}

	const backwards = [];
	const totalItems = str.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}

	return backwards.join('');
}

function reverse2(str) {
	return str.split('').reverse().join('');
}

// === END ===
