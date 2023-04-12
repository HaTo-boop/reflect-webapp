import { CardButton } from "./Buttons"
import { Exit } from "./Home"
import './App.css';
import { Outlet } from "react-router-dom";

// function Welcome(props) {
//     return (
//         <div className="affirmation glassmorphism hort-flex">
//             welcome to exposure therapy
//         </div>
//     )
// }

// function UserGuide(props) {
//     return (
//         <div className="guide glassmorphism hort-flex">
//             let’s take some time and reflect on your day. <br/>
//                <br></br>
//             reflection can help you develop greater self-awareness, make more informed decisions, reduce stress and anxiety, promote personal growth, and improve your relationships with others
//         </div>
//     )
// }

export function TherapyWidget(props) {
    return (
        <div id='rest-widget' className='widget glassmorphism vert-flex'>
            <div id="timer">
                timer
            </div>

            <div id='theme'>
                monthly theme
                {/* <CardButton imgSrc="/public/balance_theme.png" content="balance"/> */}
                <div style={{ margin:"10px auto" }}><b style={{ fontSize:"35px" }}>balance</b></div>
            </div>
        </div>
    )
}

export function THERAPY(props) {
    return (
        <div>
            <TherapyWidget/>
            <Outlet/>
            <Exit/>
        </div>
    )
}