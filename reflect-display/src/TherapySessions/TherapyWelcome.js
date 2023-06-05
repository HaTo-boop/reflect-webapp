
import { Link } from 'react-router-dom'
import '../App.css';


// Continue button link to a random therapy session
// toRandSes defined in Therapy.js
export function TherapyWelcome() {
    return (
        <div>
            <Heading />
            <SubHeading />
            <Continue/>
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                welcome to <br /> exposure therapy
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="subhead">
            let's build a better relationship with your body
        </div>
    )
}

export function Continue(){
    return (
        <Link to="/therapy/intro">
            <button className="bottom-middle-btn">
                <div className="button-outer-frame">
                    <div className="button-inner-frame">
                        <div className='pink-btn-content'>
                            <div className='button-text'>continue</div>
                        </div>
                    </div>
                </div>
            </button>
        </Link>
     )
}