export function Bank(props) {
    // You cannot modify the value of a Prop
    props.nomBanque= "superbe " + props.nomBanque + " "

    return <h1> {"La " + props.nomBanque} te salue </h1>
}