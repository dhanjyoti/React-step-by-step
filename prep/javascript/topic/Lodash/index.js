// Import the lodash library
import _ from 'lodash';

// Example function using lodash
const formatNumber = (num) => {
    if (num >= 1_000_000_000) {
        return _.round(num / 1_000_000_000, 1) + "B";
    } else if (num >= 1_000_000) {
        return _.round(num / 1_000_000, 1) + "M";
    } else if (num >= 1_000) {
        return _.round(num / 1_000, 1) + "k";
    }
    return num.toString();
}

console.log(formatNumber(950));        // Outputs: "950"
console.log(formatNumber(232950));     // Outputs: "232.9k"
console.log(formatNumber(1000950));    // Outputs: "1M"
console.log(formatNumber(2350));       // Outputs: "2.4k"
console.log(formatNumber(10000));      // Outputs: "10k"
console.log(formatNumber(100000));     // Outputs: "100k"
console.log(formatNumber(1000000));    // Outputs: "1M"
console.log(formatNumber(1000000000)); // Outputs: "1B"
