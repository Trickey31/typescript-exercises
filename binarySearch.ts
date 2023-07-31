function binarySearch(
  nums: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
): number {
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (nums[midIndex] === target) return midIndex;
    else if (nums[midIndex] < target)
      return binarySearch(nums, target, midIndex + 1, rightIndex);
    else return binarySearch(nums, target, leftIndex, midIndex - 1);
  }
  return -1;
}

// function binarySearch(nums: number[], target: number): number {
//   const length = nums.length;
//   let left = 0;
//   let right = length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) return mid;
//     else if (nums[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }
//   return -1;
// }

const arr = [-5, 2, 4, 6, 10];
const n = arr.length;
let left = 0;
let right = n - 1;

const result = binarySearch(arr, 10, left, right);
console.log(result);

// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// Big-O: O(logn)
