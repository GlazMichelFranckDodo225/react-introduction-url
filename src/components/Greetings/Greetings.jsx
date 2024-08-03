import s from "./style.module.css";

export function Greetings(props) {
    return (
        <div>
           {/*  <p className="box">Hello !</p> */}
            {/* <p className={s.box + " " + s.box2}>Hello !</p> */}
            {/* <p className={s.box + " " + s.box2}>Hello !</p> */}
            <p className={`${s.box} ${s.box2} box`}>Hello !</p>
        </div>
    )
}