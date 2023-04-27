import '../App.css';

const testArray = ['a', 'b', 'c'];

// React Comp: to display and update therapy prompts in succession
// export function PromptContentTherapy(promptsArray) {
//     // `prog`: how far the user is progressing in the session (=index of prompt in array)
//     // Initial state: starting from the first prompt
//     const [prog, setProg] = useState(0);
   
//     const nextPrompt = () => {
//         setProg(prog + 1);
//     }

//     if (prog < promptsArray.length) {
//         return (
//             <div>
//                 <div className="guide glassmorphism hort-flex">
//                     {promptsArray[prog]}
//                 </div>
//                 <button className="okButton" onClick={nextPrompt}>
//                     Continue
//                 </button>
//             </div>
//          )
//     } else {
//         return (
//             <div>
//                 <div className="guide glassmorphism hort-flex">
//                     This is the end of the session. Choose what you want to do next.
//                 </div>
//                 <div className="hort-flex">
//                     {/* BUG: Linking not working - intend to link back to begining of  session (with first propmt) but not replaying*/}
//                     <Link to="/therapy/therapyTest">
//                         <button className="okButton">
//                             repeat session
//                         </button>
//                     </Link>
//                     {/* TODO: Create page to choose what therapy session to do */}
                    
//                 </div>
//             </div>
//         )
//     }
// }