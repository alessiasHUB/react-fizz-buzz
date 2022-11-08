import { useState } from "react";

export function FizzBuzz() {
  const [currentNum, setNum] = useState<number>(1);

  const handleNext = () => {
    setNum(currentNum + 1);
    if (currentNum % 3 === 0) {
      outputArr.push("Fizz");
    } else if (currentNum % 5 === 0) {
      outputArr.push("Buzz");
    } else {
      outputArr.push(currentNum);
    }
  };

  return (
    <>
      <h1>Let's play a little game of FizzBuzz</h1>
      <button onClick={handleNext}>PLAY!</button>
      <MapOutputArr />
    </>
  );
}

const outputArr: (number | string)[] = [];

const MapOutputArr = () => {
  return (
    <p>
      <i>The game: </i>
      {outputArr.map((item) => {
        return <> {item} </>;
      })}
    </p>
  );
};
