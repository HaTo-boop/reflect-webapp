import { CardButton } from "./Buttons"
import { Exit } from "./Home"
import './App.css';
import { Outlet } from "react-router-dom";

export function ReflectionWidget(props) {
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

export function REFLECTION(props) {
    return (
        <div>
            <ReflectionWidget/>
            <Outlet/>
            <Exit/>
        </div>
    )
}