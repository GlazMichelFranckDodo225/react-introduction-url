import { Car } from "./components/Car/Car";
import { Greetings } from "./components/Greetings/Greetings";
import "./global.css"

export function App() {
    // const a = false;

    return (
        <div>
            <Car />
            <Greetings />

            {/* <div style={{
                backgroundColor: "red",
                height: a ? 100 : 200,
                width: 100,
                border: "3px solid blue"
            }}></div> */}
        </div>
    )
}