import './App.css';
import {Time, Weather} from './Restmode';



export function INTRO_CONT(){
    return (
        <div>
            <Time />
            <Weather />
            <Heading />
            <SubHeading />
            {/* <Button /> */}
        </div>
    )
}

export function Heading(){
    return(
        <div className="hort-flex intro-guide-frame">
            <div className='intro-guide-text'>
                im here to help you take some <div className='yellow-text'>time for yourself</div>
            </div>
        </div>
    )
}

export function SubHeading(){
    return(
        <div className="inform">
            what you do is up to you 
        </div>
    )
}

// export function Button(){
//     return (
//         <Link to="/home">
//             <button className="button-outer-frame">
//                 <div className="button-inner-frame">
//                     <div className='button-text'>continue</div>
//                 </div>
//             </button>
//         </Link>
//     )
// }