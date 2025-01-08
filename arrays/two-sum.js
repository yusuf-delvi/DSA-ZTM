// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(arr, target) {
	// O(n^2)
	// for (let i = 0; i <= arr.length - 2; i++) {
	// 	for (let j = i + 1; j <= arr.length - 1; j++) {
	// 		if (arr[i] + arr[j] === target) {
	// 			return [i, j];
	// 		}
	// 	}
	// }
	//
	// O(n)
	// const pairIdx = {};
	// for (let i = 0; i < arr.length; i++) {
	// 	const num = arr[i];
	// 	const diff = target - num;
	// 	if (diff in pairIdx) {
	// 		return [i, pairIdx[target - num]];
	// 	}
	// 	pairIdx[num] = i;
	// }
}

console.log(twoSum([3, 2, 4], 6));
