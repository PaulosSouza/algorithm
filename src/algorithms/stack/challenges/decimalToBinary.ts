import { Stack } from "../stack-use";

function decimalToBinary(decimalNumber: number) {
  const remStack = new Stack();

  let rem: number;
  let number = decimalNumber;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

// const binary = decimalToBinary(10);
// console.log("Decimal to binary -->", binary);
