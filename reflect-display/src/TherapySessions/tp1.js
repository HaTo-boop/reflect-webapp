import { CardButton } from "../Buttons"
import { Exit } from "../Home"
import '../App.css';

import { Link } from "react-router-dom";

export function TP1(props) {
    return (
        <div> 
            <div className="affirmation hort-flex">
                it may be uncomfortable, but if you are willing, please wear garments that will allow you to have a clear reflection of you
            </div>
            <div className="okButton">
                <Link to="/therapy"><span style={{margin:"auto 50px"}}>Back</span></Link><span style={{margin:"auto 50px"}}>Continue</span>
            </div>
        </div>
    )
}