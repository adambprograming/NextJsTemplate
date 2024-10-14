"use client";
// Styles
import styles from "./hero.module.scss";
// Public & Assets

// React/Next Functions
import Image from "next/image";
// Context & Actions

// Components
import Btn from "@/components/btn/btn.component";

/*
INSTRUCTIONS
  *imgSrc           source for Image
*/
const HeroSection = ({ imgSrc }) => {
  return (
    <section id={`${styles.heroSection}`}>
      <div className={`${styles.contentContainer}`}>
        <h1>Vytvořím Vám úspěšný web</h1>
        <h4>
          Jmenuji se Adam Bartůšek a specializuji se na vývoj webových stránek a
          e-shopů.
        </h4>
        <div className={`${styles.btns}`}>
          <Btn
            borderSize="2px"
            borderRadius="20px"
            filter="drop-shadow(0 0 3px var(--color-text))"
            bgColor="var(--color-secondary)"
            textColor="var(--color-text-reverse)"
          >
            Kontakt
          </Btn>
          <Btn
            borderSize="2px"
            borderRadius="20px"
            bgColor="var(--color-background)"
            filter="drop-shadow(0 0 5px var(--black-50))"
            bgHoverColor="var(--color-primary)"
            textHoverColor="var(--color-text-reverse)"
            hoverEffect="cfLeft"
          >
            Nabídka
          </Btn>
        </div>
      </div>
      <div className={`${styles.imgContainer}`}>
        <Image src={imgSrc} alt="Hero section image" />
      </div>
    </section>
  );
};

export default HeroSection;
