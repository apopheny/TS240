function pair<T>(first: T, second: T): Array<T> {
  return [first, second];
}

const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
[pairOfNumbers, pairOfStrings].forEach((ele) => console.log(ele));
