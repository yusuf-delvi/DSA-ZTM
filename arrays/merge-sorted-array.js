function mergeSortedArray(arr1, arr2) {
	// both can have duplicate value keep both
	// each array is already sorted

	const finalArr = [...arr1, ...arr2];

	finalArr.sort((a, b) => a - b);

	return finalArr;
}

function mergeSortedArray1(arr1, arr2) {
	const sortedArr = [];
	let el1 = arr1[0];
	let el2 = arr2[0];

	let i = 1;
	let j = 1;

	while (el1 || el2) {
		if (!el2 || el1 < el2) {
			sortedArr.push(el1);
			el1 = arr1[i];
			i++;
		} else {
			sortedArr.push(el2);
			el2 = arr2[j];
			j++;
		}
	}

	return sortedArr;
}

// mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);
// console.log(mergeSortedArray1([0, 3, 4, 31], [4, 6, 30]));
