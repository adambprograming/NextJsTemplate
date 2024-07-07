// Styles
import styles from "./card.module.scss";
// Public & Assets

// React/Next Functions

// Context & Actions

// Componenets

/*
opacity is for cardBg
if needed opacity just for one of colors, apply "rgb(from var(--color-secondary) r g b / 0.1"
INSTRUCTIONS 
  borderRadius          (*)borderRadius (default set to 0px)
  borderHoverRadius     (2)its new radius of card
  borderSize            (*)size of border (default set to 1px)
  borderColor           (*)color of border
  opacity               (*)opacity of card background (default set to 1.0)
  paddingOfCard         (*)padding of card
  width                 (*)width of card
  height                (*)height of card
  backdropFilter        (*)backdropfilter
  filterHover           (*)filter apply on hover
  bgColor               (*)color of background
  bgHoverColor          (*)background hover color
  hoverEffect           (*)hover effect (choose from preset of effects)
                          1: bgHover (transition of bgHoverColor)
                          2: brc (border radius change) (border radius of btn change to borderHoverRadius)
*/

const Card = ({
  children,
  borderRadius = "0px",
  borderHoverRadius = "",
  borderSize = "1px",
  borderColor = "var(--color-border)",
  opacity = 1,
  paddingOfCard = "10px 20px",
  width = "",
  height = "",
  backdropFilter = "",
  filterHover = "",
  bgColor = "var(--color-secondary)",
  bgHoverColor = "",
  hoverEffect = "",
}) => {
  return (
    <div className={`${styles.card} ${styles[hoverEffect]}`} style={{
        padding: `${paddingOfCard}`,
        border: `${borderSize} solid ${borderColor}`,
        borderRadius: `${borderRadius}`,
        "--localBorderHoverRadius": `${borderHoverRadius}`,
        width: `${width}`,
        height: `${height}`,
        "--localFilterHover": `${filterHover}`,
    }}>
      <span
        className={`${styles.cardBg}`}
        style={{
          "--localBgColor": `${bgColor}`,
          opacity: `${opacity}`,
          "--localBackdropFilter": `${backdropFilter}`,
          "--localBgHoverColor": `${bgHoverColor}`,
        }}
      ></span>
      <div className={`${styles.content}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
