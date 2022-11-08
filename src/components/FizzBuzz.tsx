import { useState } from "react";

export function FizzBuzz(){
    console.log("fizzbuzz is being rerendered!")
    const [currentNum, setNum] = useState<number>(1)
    
    const handleNext = () => {
        setNum(currentNum + 1);
        outputArr.push(currentNum);
    }

    return (
        <>
            <h1>Welcome to FizzBuzz</h1>
            <MapOutputArr />
            <button onClick={handleNext}>NEXT</button>
        </>
    ) 
}

const outputArr : (number|string)[] = []

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