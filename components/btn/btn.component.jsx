"use client";
// Styles
import styles from "./btn.module.scss";
// React Functions
import Link from "next/link";

/*
INSTRUCTIONS 
  disabled              defines if button is disabled (default false)
  functionOnClick       function that happend onClick
  fontSize              fontSize in px (* multiplier)
  fontFamily            fontFamily (could be like var(--font-primary), if fonts are set in variables)
  borderRadius          borderRadius (default set to 0px)
  borderSize            size of border (default set to 1px)
  borderColor           color of border
  bgColor               color of background
  textColor             color of text
  opacity               opacity of button background (default set to 1.0)
  paddingOfBtn          padding will be aplied if fontSize is not defined
  width                 width of element
  backdropFilter        backdropfilter apply to btnBg as var
  filter                filter apply to btn as var
  bgHoverColor          background hover color
  bgHoverBorderRadius   border radius for hovering bg (::before)
  textHoverColor        text hover color
  hoverEffect           hover effect (choose from preset of effects)
                          1: bgHover (transition of bgHoverColor)
                          2: colorFillLeft (slide bgHoverColorFrom left with changing textHoverColor (if declared))
                          3: colorFillRight (slide bgHoverColorFrom right with changing textHoverColor (if declared))
                          4: colorFillBottom (slide bgHoverColorFrom bottom with changing textHoverColor (if declared))
                          5: colorFillTop (slide bgHoverColorFrom top with changing textHoverColor (if declared))
*/

const Btn = ({
  children,
  disabled = false,
  itsScroll = false,
  href = "",
  ariaLabel = `${children}`,
  functionOnClick,
  fontSize = "var(--fontsize-h5)",
  fontFamily = "var(--font-primary)",
  fontWeight = "",
  borderRadius = "0px",
  borderSize = "1px",
  borderColor = "var(--black-100)",
  bgColor = "var(--color-primary)",
  textColor = "var(--color-text)",
  opacity = 1,
  paddingOfBtn = "10px 20px",
  width = "",
  backdropFilter = "",
  filter = "",
  bgHoverColor = "",
  bgHoverBorderRadius = "",
  textHoverColor = "",
  hoverEffect = "",
}) => {
  const itsLinkBtn = href && !functionOnClick ? true : false;
  return (
    <button
      className={`${styles.btn} ${styles[hoverEffect]}`}
      disabled={disabled}
      style={{
        borderRadius: `${borderRadius}`,
        border: `${borderSize} solid ${borderColor}`,
        width: `${width}`,
        "--localFilter": `${filter}`,
      }}
      onClick={() => {
        itsLinkBtn
          ? itsScroll &&
            document
              .getElementById(`${href}`)
              .scrollIntoView({ behavior: "smooth" })
          : functionOnClick;
      }}
    >
      <span
        className={`${styles.btnBg}`}
        style={{
          "--localBgColor": `${bgColor}`,
          opacity: `${opacity}`,
          "--localBackdropFilter": `${backdropFilter}`,
          "--localBgHoverColor": `${bgHoverColor}`,
          "--localBgHoverBorderRadius": `${bgHoverBorderRadius}`,
        }}
      ></span>
      {itsLinkBtn && !itsScroll && (
        <Link
          className={`${styles.btnLink}`}
          href={href}
          aria-label={`${ariaLabel}`}
        ></Link>
      )}
      <h4
        className={`${styles.btnText}`}
        style={{
          "--localTextColor": `${textColor}`,
          "--localTextHoverColor": `${
            textHoverColor ? textHoverColor : textColor
          }`,
          fontSize: `${fontSize}`,
          fontFamily: `${fontFamily}`,
          fontWeight: `${fontWeight}`,
          padding: `${paddingOfBtn}`,
        }}
      >
        {children}
      </h4>
    </button>
  );
};

export default Btn;
