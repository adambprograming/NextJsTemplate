"use client";
// Styles
import "./btn-link.styles.scss";
// React Functions
import Link from "next/link";

/*
INSTRUCTIONS 
  disabled          defines if button is disabled (default false)
  itsScroll         false(default, link to another page)/true(link to something on page)
  href              target of button onClick (if itsScroll===true, href must be id of target element) (default set to /)
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

const BtnLink = ({
  children,
  disabled = false,
  itsScroll = false,
  href = "/",
  ariaLabel = `${children}`,
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
      className="btn-link"
      disabled={disabled}
      style={{
        borderRadius: `${borderRadius}`,
        border: `${borderSize} solid ${borderColor}`,
        padding: `${paddingOfBtn}`,
        width: `${width}`,
      }}
      onClick={() => {
        itsScroll &&
          document
            .getElementById(`${href}`)
            .scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span
        className="btn-link-bg"
        style={{ backgroundColor: `${bgColor}`, opacity: `${opacity}` }}
      ></span>
      {itsScroll === false && (
        <Link className="btn-link-link" href={href} aria-label={`${ariaLabel}`}></Link>
      )}
      <h4
        className="btn-link-text"
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

export default BtnLink;
