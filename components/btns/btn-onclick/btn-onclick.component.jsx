"use client";
// Styles
import "./btn-onclick.styles.scss";

/*
INSTRUCTIONS 
  disabled          defines if button is disabled (default false)
  functionOnClick   function that happend onClick
  fontSize          fontSize in px (* multiplier)
  fontFamily        fontFamily (could be like var(--font-primary), if fonts are set in variables)
  borderRadius      borderRadius (default set to 0px)
  borderSize        size of border (default set to 1px)
  borderColor       color of border
  bgColor           color of background
  textColor         color of text
  opacity           opacity of button background (default set to 1.0)
  paddingOfBtn      padding will be aplied if fontSize is not defined
  width             width of element
*/

const BtnOnClick = ({
  children,
  disabled = false,
  functionOnClick,
  fontSize = "var(--fontsize-h5)",
  fontFamily = "var(--font-primary)",
  borderRadius = "0px",
  borderSize = "1px",
  borderColor = "var(--black-100)",
  bgColor = "var(--color-primary)",
  textColor = "var(--color-text)",
  opacity = 1,
  paddingOfBtn = "10px 20px",
  width,
}) => {
  return (
    <button
      className="btn-onclick"
      disabled={disabled}
      style={{
        borderRadius: `${borderRadius}`,
        border: `${borderSize} solid ${borderColor}`,
        padding: `${paddingOfBtn}`,
        width: `${width}`,
      }}
      onClick={functionOnClick}
    >
      <span
        className="btn-onclick-bg"
        style={{ backgroundColor: `${bgColor}`, opacity: `${opacity}` }}
      ></span>
      <h4
        className="btn-onclick-text"
        style={{
          color: `${textColor}`,
          fontSize: `${fontSize}`,
          fontFamily: `${fontFamily}`,
        }}
      >
        {children}
      </h4>
    </button>
  );
};

export default BtnOnClick;
