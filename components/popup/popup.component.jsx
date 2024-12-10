// Styles
import "./popup.styles.scss";
// Public & Assets

// React/Next Functions

// Context & Actions

// Components

const Popup = ({ children, state, top, right, bottom, left }) => {
  return (
    <div
      className="popup"
      style={{
        display: `${state ? "inherit" : "none"}`,
        top: `${top}`,
        right: `${right}`,
        bottom: `${bottom}`,
        left: `${left}`,
      }}
    >
      {children}
    </div>
  );
};

export default Popup;
