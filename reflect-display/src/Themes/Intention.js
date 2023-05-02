import { StartButton, Settings } from "../Restmode"
import { Exit } from "../Home"
import { DisplayTheme } from "../Checkin"
import { DisplayFeature } from "./Themes";
import { Link, Outlet } from 'react-router-dom';

import '../App.css';

export function Intention(props) {
    return (
        <div>
            <IntentionCard />
            <Change />
        </div>
    )
}

export function IntentionCard() {
    return (
        <div className='intention-frame'>
            <div className='intention-card'>
                <div className='intention-title-frame'></div>
                <div className='intention-title'>gratitude</div>
                <div className='intention-meaning-frame'> </div>
                <div className='intention-meaning'>
                    Gratitude is the practice of appreciating the good things in our lives, no matter how small they may seem. It is a powerful tool for improving our overall well-being by shifting our focus away from what we lack and towards what we already have.
                    <br></br>
                    <br></br>
                    When we make gratitude a monthly intention, we commit to regularly taking time to reflect on the positive aspects of our lives and expressing thanks for them.
                </div>
            </div>
        </div>
    )
}

export function Change(props) {
    return (
        <Link to="/themes/choose-theme">
            <button className="bottom-middle-btn">
                <div className="button-outer-frame">
                    <div className="button-inner-frame">
                        <div className='pink-btn-content'>
                            <div className='button-text'>change</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>   
    )
}