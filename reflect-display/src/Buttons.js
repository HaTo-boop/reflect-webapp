// Button for cards like emoticon buttons for checkin & themes choices
// css for CardButton (from Figma)
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// padding: 30px 20px;
// gap: 40px;

// position: absolute;
// width: 329px;
// height: 297px;
// left: 10px;
// top: 70px;


export function CardButton(props) {
    const {iconSrc, content} = props;

    return (
        <button id="card-btn">
            <div id="card-btn-content">
                <img src={iconSrc} alt={content}/>
                {content}
            </div>
        </button>
    )
}

// Button for main features
export function MainFeatButton(props) {
    const {iconSrc, content} = props;

    return (
        <button id="mf-btn">
            <div id="mf-btn-content">
                <img src={iconSrc} alt={content}/>
                {content}
            </div>
        </button>
    )
}
