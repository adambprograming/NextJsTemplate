// Styles
import "./popup.styles.scss";
// Public & Assets

// React/Next Functions

// Context & Actions

// Components

const Popup = ({children, state, top}) => {
    return (
        <div className="popup" style={{display: `${state ? "inherit" : "none"}`, top: `${top}`}}>
            {children}
        </div>
    );
}

export default Popup;