import { useState } from "react";
import { isFizzBuzz } from "../utils/isFizzBuzz";

const outputArr: (number | string)[] = [];

export function FizzBuzz(): JSX.Element {
  const [num, setNum] = useState<number>(1);

  const handleNext = () => {
    setNum(num + 1);
    outputArr.push(isFizzBuzz(num));
  };

  return (
    <>
      <h1>Let's play a little game of FizzBuzz</h1>
      <button onClick={handleNext}>PLAY!</button>
      <p>Current count: {num - 1}</p>
      <MapOutputArr />
    </>
  );
}

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
