function smallestTwoNumbers(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
    console.log(sorted[0], sorted[1]);
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);