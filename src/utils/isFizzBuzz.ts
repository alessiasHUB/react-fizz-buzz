export function isFizzBuzz(element: number): string | number {
  if (element % 3 === 0) {
    return "Fizz";
  } else if (element % 5 === 0) {
    return "Buzz";
  } else {
    return element;
  }
}
