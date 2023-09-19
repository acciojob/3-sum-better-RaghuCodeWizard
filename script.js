function threeSum(arr, target) {
    arr.sort((a, b) => a - b);
    let closestValue = Infinity;
    let minDiff = Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            let diff = Math.abs(sum - target); // Corrected "taget" to "target"

            if (sum > target) {
                right--;
            } else {
                left++;
            }

            if (diff < minDiff) {
                minDiff = diff;
                closestValue = sum;
            }
        }
    }

    return closestValue;
}

module.exports = threeSum;
