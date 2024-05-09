/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => b - a); // Sort the array in descending order

    let totalHappinessSum = 0;
    let turns = 0;

    // Calculate the maximum happiness sum
    for (let i = 0; i < k; i++) {
        // Adjust happiness and ensure it's not negative
        totalHappinessSum += Math.max(happiness[i] - turns, 0);

        // Increment turns for the next iteration
        turns++;
    }

    return totalHappinessSum;
};

// Test cases
console.log(maximumHappinessSum([1,2,3], 2)); // Output: 4
console.log(maximumHappinessSum([1,1,1,1], 2)); // Output: 1
console.log(maximumHappinessSum([2,3,4,5], 1)); // Output: 5