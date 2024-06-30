"use client";
// Styles
import styles from "./hero.module.scss";
// Public & Assets

// React/Next Functions
import Image from "next/image";
// Context & Actions

// Components

/*
INSTRUCTIONS
  variant           variant of section (default is first)
  *imgSrc           source for Image
  imgBorder         border of img
  imgBorderRadius   borderRadius of img

*/
const HeroSection = ({
  variant = "first",
  imgSrc,
  imgBorder,
  imgBorderRadius,
  title,
  titleFontSize = "var(--fontsize-h1)",
  text1Part,
  textEyeCatcher,
  text2Part,
  btns = [],
}) => {
  const renderImg = () => {
    return (
      <div className={`${styles.imgContainer}`}>
        <Image
          src={imgSrc}
          alt="Hero section image"
          style={{ border: imgBorder, borderRadius: imgBorderRadius }}
        />
      </div>
    );
  };
  const renderContent = () => {
    return (
      <div className={`${styles.contentContainer}`}>
        <h1 style={{ fontSize: titleFontSize }}>{title}</h1>
        <h4>
          {text1Part}
          <span>{textEyeCatcher}</span>
          {text2Part}
        </h4>
      </div>
    );
  };
  return (
    <section id={`${styles.heroSection}`} className={`${styles[variant]}`}>
      {renderImg()}
      {renderContent()}
      {/* {variant === "first" && (
        <>
          <div className={styles.textContainer}>
            <h1>{title}</h1>
            <div className={styles.btnContainer}>
              {btns.map((btn, index) => (
                <button key={index} onClick={btn.onClick}>
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src={imageSrc} alt="x" />
          </div>
        </>
      )}
      {variant === "second" && (
        <>
          <div className={styles.imageContainer}>
            <Image src={imageSrc} alt={title} />
          </div>
          <div className={styles.textContainer}>
            <h1>{title}</h1>
            <div className={styles.btnContainer}>
              {btns.map((btn, index) => (
                <button key={index} onClick={btn.onClick}>
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      {variant === "third" && (
        <div className={styles.fullWidthContainer}>
          <Image src={imageSrc} alt={title} />
          <div className={styles.overlay}>
            <h1>{title}</h1>
            <div className={styles.btnContainer}>
              {btns.map((btn, index) => (
                <button key={index} onClick={btn.onClick}>
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default HeroSection;
