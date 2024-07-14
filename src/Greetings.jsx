export function Greetings(props) {
    console.log("My Props", props);

    return (
        <ul>
            <li>Hello {props.firstName},</li>
            <li>You are {props.age} years old.</li>
            <li>{props.children}</li>
        </ul>
    )
}