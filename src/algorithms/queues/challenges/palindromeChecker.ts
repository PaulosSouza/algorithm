import { Deque } from "../deque-use";

function palindromeChecker(characteres: string) {
  if (!characteres) {
    return false;
  }

  const deque = new Deque();
  const lowerString = characteres.toLocaleLowerCase().split(" ").join("");

  let isEqual = true;
  let firstChar, lastChar;

  for (let index = 0; index < lowerString.length; index++) {
    deque.addBack(lowerString.charAt(index));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

// console.log("a ->", palindromeChecker("a"));
// console.log("aa ->", palindromeChecker("aa"));
// console.log("kayak ->", palindromeChecker("kayak"));
// console.log("level ->", palindromeChecker("level"));
// console.log(
//   "Was it a car or a cat I saw ->",
//   palindromeChecker("Was it a car or a cat I saw")
// );
// console.log("Step on no pets ->", palindromeChecker("Step on no pets"));
