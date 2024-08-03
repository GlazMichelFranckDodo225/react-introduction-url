// import { Greetings } from "./Greetings";
// import { Bank } from "./exos/Bank";

import { useState } from "react";
// import { AgeCounter } from "./AgeCounter";

export function App() {
    const [movie, setMovie] = useState("The Lord of the Rings");

    function updateMovie() {
        setMovie("Fight Club");

        console.log(movie);   
    }
    
    console.log(movie);
       
    console.log("App Component Rerendering");
    
    return (
        <>
            {/* <AgeCounter /> */}
            <button onClick={updateMovie}>{movie}</button>
        </>
    )

    /* return <div>
        <Bank nomBanque="Banque centrale" />
    </div> */

    /* (
        <>
            <h1>Hello from React World !</h1>
            <Greetings 
                firstName={"Rachel"} 
                age={50} 
                car={{color: "Red", 
                speed: 110}} 
                doSomething={
                    function() {
                        console.log("Hello !");
                    }
                }
                isSunny={false}
            >
                <img src="https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_1280.jpg" width={300} alt="Screen Shot" />
            </Greetings>
        </>
    ) */
}