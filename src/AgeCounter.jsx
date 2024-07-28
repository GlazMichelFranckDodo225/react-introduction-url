import React, { useState } from 'react'
import { AgeDisplay } from './AgeDisplay';

export function AgeCounter(props) {
    // let age = 30;
    const [age, setAge] = useState(30);

    function increaseAge() {
        // age++;
        setAge(age + 1);
    }

    console.log("AgeCounter Component Rerendering");
    
    return (
        <>
            {/* <div>You are {age} years Old !</div> */}
            <AgeDisplay age={age} />
            <button onClick={increaseAge}>Increase Age</button>
        </>
    )
}
