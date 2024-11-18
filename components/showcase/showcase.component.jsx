"use client";
// Styles
import styles from "./showcase.module.scss";
// Public & Assets

// React/Next Functions
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
// Context & Actions

// Componenets

/*
INSTRUCTIONS

*/

export const ShowcaseImg = ({
  showcaseItems,
  showcaseItemsAlts,
  alwaysAnimate = false,
  paddingOfShowcase = "24px 0px",
  gap = "4rem",
  heightOfItem = "var(--fontsize-h2)",
  widthOfItem = "auto",
}) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const updateIsOverflow = () => {      
      const isOverflowing =
        showcaseRef.current.parentElement.clientWidth <
        showcaseRef.current.clientWidth;
      setIsOverflow(isOverflowing);
      console.log(isOverflowing);
    };
    updateIsOverflow();
    window.addEventListener("resize", updateIsOverflow);
    return () => {
      window.removeEventListener("resize", updateIsOverflow);
    };
  }, []);

  return (
    <div className={`${styles.showcaseImgContainer}`}>
      <div
        className={`${styles.showcaseImgGroup} ${
          alwaysAnimate || isOverflow ? styles.animated : ""
        }`}
        style={{
          padding: `${paddingOfShowcase}`,
          gap: `${gap}`,
          paddingRight: `${gap}`,
        }}
        ref={showcaseRef}
      >
        {showcaseItems.map((showcaseItem, index) => (
          <Image
            src={showcaseItem}
            alt={showcaseItemsAlts ? showcaseItemsAlts[index] : ""}
            key={index}
            style={{
              height: `${heightOfItem}`,
              width: `${widthOfItem}`,
            }}
          />
        ))}
      </div>
      {(alwaysAnimate || isOverflow) && 
      <div
      aria-hidden
      className={`${styles.showcaseImgGroup} ${
        alwaysAnimate || isOverflow ? styles.animated : ""
        }`}
        style={{
          padding: `${paddingOfShowcase}`,
          gap: `${gap}`,
          paddingRight: `${gap}`,
        }}
        >
        {showcaseItems.map((showcaseItem, index) => (
          <Image
          src={showcaseItem}
          alt={showcaseItemsAlts ? showcaseItemsAlts[index] : ""}
          key={index}
          style={{
            height: `${heightOfItem}`,
            width: `${widthOfItem}`,
          }}
          />
        ))}
      </div>
      }
      
    </div>
  );
};
