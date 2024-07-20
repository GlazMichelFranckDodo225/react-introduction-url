import { Greetings } from "./Greetings";

export function App() {
    return (
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
    )
}