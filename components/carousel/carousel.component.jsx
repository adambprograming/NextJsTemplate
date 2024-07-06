"use client";
// Styles
import styles from "./carousel.module.scss";
// Public & Assets

// React/Next Functions
import { cloneElement } from "react";
import { useState, useEffect, useRef } from "react";
// Context & Actions

// Componenets
import Btn from "../btn/btn.component";

/*
INSTRUCTIONS

*/

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const transitionRef = useRef(null);
  const length = children.length;

  // Cloning the first and last children for the infinite loop effect
  const clonedChildren = [
    cloneElement(children[length - 1], { key: length + 1 }),
    ...children,
    cloneElement(children[0], { key: length + 2 }),
  ];

  useEffect(() => {
    if (isTransitioning) {
      const transitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex === length) {
          setCurrentIndex(0);
        } else if (currentIndex === -1) {
          setCurrentIndex(length - 1);
        }
      };
      const transitionRefCurrent = transitionRef.current;
      transitionRefCurrent.addEventListener("transitionend", transitionEnd);

      return () => {
        transitionRefCurrent.removeEventListener(
          "transitionend",
          transitionEnd
        );
      };
    }
  }, [isTransitioning, currentIndex, length]);

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleWheel = (e) => {
    if (e.deltaX > 0) {
      next();
    } else if (e.deltaX < 0) {
      prev();
    }
  };

  const handleMouseDown = (e) => {
    setStartPosition(e.pageX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.pageX;
    const diff = startPosition - currentPosition;
    if (diff > 50) {
      next();
      setIsDragging(false);
    } else if (diff < -50) {
      prev();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setStartPosition(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.touches[0].clientX;
    const diff = startPosition - currentPosition;
    if (diff > 50) {
      next();
      setIsDragging(false);
    } else if (diff < -50) {
      prev();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={styles.carousel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      <button onClick={prev} className={styles.navButton}>
        {"<"}
      </button>
      <div
        className={styles.carouselInner}
        style={{
          transform: `translateX(-${(currentIndex + 1) * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
        ref={transitionRef}
      >
        {clonedChildren}
      </div>
      <button onClick={next} className={styles.navButton}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
