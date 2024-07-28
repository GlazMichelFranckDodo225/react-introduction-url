import React, { useState } from 'react'

export function AgeCounter(props) {
    // let age = 30;
    const [age, setAge] = useState(30);

    function increaseAge() {
        // age++;
        setAge(age + 1);
    }

    console.log("Component Rerendering");
    
    return (
        <>
            <div>You are {age} years Old !</div>
            <button onClick={increaseAge}>Increase Age</button>
        </>
    )
}
