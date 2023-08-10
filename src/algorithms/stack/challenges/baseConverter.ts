import { Stack } from "../stack-use";

function baseConverter(decimalNumber: number, base: number) {
  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let number = decimalNumber;
  let rem: number;
  let baseString = "";

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

// console.log(baseConverter(100345, 2));
// console.log(baseConverter(100345, 8));
// console.log(baseConverter(100345, 16));
