import '../App.css';
import { Link } from 'react-router-dom';

export function ReflectionWelcome() {
    return (
        <div>
            <Heading/>
            <SubHeading />
            <Continue />
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex heading-frame">
            <div className='intro-guide-text'>
                welcome to <br /> reflection time
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="subhead">
            let's take some time to reflect on your day
        </div>
    )
}

export function Continue(){
    return (
        <Link to="/reflection/intro">
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