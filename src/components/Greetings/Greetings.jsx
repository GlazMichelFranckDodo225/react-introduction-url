export function Greetings(props) {
    return (
        <ul>
            <li>Hello {props.firstName},</li>
            <li>You are {props.age} years old.</li>
            <li>{props.children}</li>
            {/* <li>{props.isSunny && "It's nice weather"}</li> */}
            {/* <li>{props.isSunny && <ItsSunny />}</li> */}
            <li>{props.isSunny ? <ItsSunny /> : <ItsRainy />}</li>
        </ul>
    )
}

function ItsSunny() {
    return <h1>It's nice weather</h1>
}

function ItsRainy() {
    return <h1>It's raining</h1>
}