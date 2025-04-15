"use client";
// Styles
import styles from "./accrodion-two-level.module.scss";
// Public & Assets

// React/Next Functions
import { useState, useRef, useLayoutEffect, useEffect } from "react";

// Context & Actions

// Componenets
import { Accordion, AccordionItem } from "../accordion/accordion.component";

/*
INSTRUCTIONS

*/

const TwoLevelAccordion = ({ data }) => {
  const [openSections, setOpenSections] = useState([]);
  const [openItems, setOpenItems] = useState([]);
  const [heightsOfSections, setHeightsOfSections] = useState([]);
  const [heightsOfItems, setHeightsOfItems] = useState({});
  const sectionsRef = useRef([]);
  const itemsRef = useRef({});

  const transitionDuration = 0.3;

  useEffect(() => {
    setHeightsOfSections(
      sectionsRef.current.map((item, index) =>
        openSections.includes(index) ? item.scrollHeight : 0
      )
    );
  }, [openSections]);

  useEffect(() => {
    const newHeights = {};
    Object.entries(itemsRef.current).forEach(([key, el]) => {
      if (el && openItems.includes(key)) {
        newHeights[key] = el.scrollHeight + 20;
      } else {
        newHeights[key] = 0;
      }
    });
    setHeightsOfItems(newHeights);
    setHeightsOfSections(
      sectionsRef.current.map((item, index) =>
        openSections.includes(index) ? item.scrollHeight + 1500 : 0
      )
    );
    setTimeout(() => {
      setHeightsOfSections(
        sectionsRef.current.map((item, index) =>
          openSections.includes(index) ? item.scrollHeight : 0
        )
      );
    }, transitionDuration * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openItems]);

  const setSectionsRef = (el, index) => {
    sectionsRef.current[index] = el;
  };

  const setItemsRef = (el, index) => {
    itemsRef.current[index] = el;
  };

  const toggleSection = (index) => {
    setOpenSections(
      openSections.includes(index)
        ? openSections.filter((sectionIndex) => sectionIndex !== index)
        : [...openSections, index]
    );
  };

  const toggleItem = (index) => {
    setOpenItems(
      openItems.includes(index)
        ? openItems.filter((itemIndex) => itemIndex !== index)
        : [...openItems, index]
    );
  };

  return (
    <div
      className={styles.accordionParentLevel}
      style={{
        "--TRANSTION-DURATION": `${transitionDuration}s`,
      }}
    >
      {data.map((section, index) => {
        const half = Math.ceil(section.services.length / 2);
        const firstHalf = section.services.slice(0, half);
        const secondHalf = section.services.slice(half);
        return (
          <div
            key={index}
            className={`${styles.accordionItemSection} ${
              openSections.includes(index) ? styles.open : ""
            }`}
          >
            <button
              className={`${styles.accordionHeader} ${
                openSections.includes(index) ? styles.active : ""
              }`}
              onClick={() => toggleSection(index)}
            >
              <span>{section.sectionTitle}</span>
              <div
                className={`${styles.plusIcon} ${
                  openSections.includes(index) ? styles.open : ""
                }`}
              >
                <span className={styles.horizontalLine}></span>
                <span className={styles.verticalLine}></span>
              </div>
            </button>
            <div
              className={`${styles.accordionSectionContent} ${
                openSections.includes(index) ? styles.open : ""
              }`}
              ref={(el) => setSectionsRef(el, index)}
              style={{
                maxHeight: heightsOfSections[index] + "px",
              }}
            >
              {/* CHILD ACCORDION */}
              <div
                className={`${styles.accordionChildLevel} ${styles.firstHalf}`}
              >
                {firstHalf.map((service, sIdx) => {
                  const itemKey = `${index}-${sIdx}`;
                  return (
                    <div
                      key={itemKey}
                      className={`${styles.accordionItemSection} ${
                        openItems.includes(itemKey) ? styles.open : ""
                      }`}
                    >
                      <button
                        className={`${styles.accordionHeader} ${
                          openItems.includes(itemKey) ? styles.active : ""
                        }`}
                        onClick={() => toggleItem(itemKey)}
                      >
                        <span>{service.title}</span>
                        <div
                          className={`${styles.plusIcon} ${
                            openItems.includes(itemKey) ? styles.open : ""
                          }`}
                        >
                          <span className={styles.horizontalLine}></span>
                          <span className={styles.verticalLine}></span>
                        </div>
                      </button>
                      <div
                        className={`${styles.accordionSectionContent} ${
                          openItems.includes(itemKey) ? styles.open : ""
                        }`}
                        ref={(el) => setItemsRef(el, itemKey)}
                        style={{
                          maxHeight: heightsOfItems[itemKey] + "px",
                        }}
                      >
                        <p className={`${styles.text}`}>{service.text}</p>
                        <div className={styles.meta}>
                          <span className={styles.price}>
                            Cena: {service.price}
                          </span>
                          <span className={styles.duration}>
                            Délka: {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={`${styles.accordionChildLevel}`}>
                {secondHalf.map((service, sIdx) => {
                  const itemKey = `${index}-${sIdx}-2`;
                  return (
                    <div
                      key={itemKey}
                      className={`${styles.accordionItemSection} ${
                        openItems.includes(itemKey) ? styles.open : ""
                      }`}
                    >
                      <button
                        className={`${styles.accordionHeader} ${
                          openItems.includes(itemKey) ? styles.active : ""
                        }`}
                        onClick={() => toggleItem(itemKey)}
                      >
                        <span>{service.title}</span>
                        <div
                          className={`${styles.plusIcon} ${
                            openItems.includes(itemKey) ? styles.open : ""
                          }`}
                        >
                          <span className={styles.horizontalLine}></span>
                          <span className={styles.verticalLine}></span>
                        </div>
                      </button>
                      <div
                        className={`${styles.accordionSectionContent} ${
                          openItems.includes(itemKey) ? styles.open : ""
                        }`}
                        ref={(el) => setItemsRef(el, itemKey)}
                        style={{
                          maxHeight: heightsOfItems[itemKey] + "px",
                        }}
                      >
                        <p className={`${styles.text}`}>{service.text}</p>
                        <div className={styles.meta}>
                          <span className={styles.price}>
                            Cena: {service.price}
                          </span>
                          <span className={styles.duration}>
                            Délka: {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TwoLevelAccordion;
