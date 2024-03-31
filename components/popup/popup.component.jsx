// Styles
import "./popup.styles.scss";
// Public & Assets

// React/Next Functions

// Context & Actions

// Components

const Popup = ({children, state}) => {
    return (
        <div className="popup" style={state ? {display: "inherit"} : {display: "none"}}>
            {children}
        </div>
    );
}

export default Popup;