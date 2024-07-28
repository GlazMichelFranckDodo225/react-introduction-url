import React from 'react'

export function AgeDisplay(props) {
    console.log("AgeDisplay Component Rerendering");
    
    return <div>You are {props.age} years Old !</div>
}
