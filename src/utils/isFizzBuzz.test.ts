import { isFizzBuzz } from "./isFizzBuzz";

test("Fizz", () => {
  expect(isFizzBuzz(3)).toBe("Fizz");
});

test("Buzz", () => {
  expect(isFizzBuzz(5)).toBe("Buzz");
});

test("number", () => {
  expect(isFizzBuzz(1)).toBe(1);
});
