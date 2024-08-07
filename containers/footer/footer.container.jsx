"use client";
// Styles
import "./footer.styles.scss";
// Public & Assets
import IconEmail from "../../components/svgs/footer-icons/icon-email.component";
import IconFacebook from "../../components/svgs/footer-icons/icon-facebook.component";
import IconInstagram from "../../components/svgs/footer-icons/icon-instagram.component";
import IconLinkedin from "../../components/svgs/footer-icons/icon-linkedin.component";
import IconLocation from "../../components/svgs/footer-icons/icon-location.component";
import IconPhone from "../../components/svgs/footer-icons/icon-phone.component";
import IconTiktok from "../../components/svgs/footer-icons/icon-tiktok.component";
import IconX from "../../components/svgs/footer-icons/icon-x.component";
// React/Next Functions
import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
// Context & Actions
import { LanguageContext } from "@/context/lang.context";
// Components
import Btn from "@/components/btn/btn.component";
import Popup from "../../components/popup/popup.component";

const Footer = () => {
  const [popupPhone, setPopupPhone] = useState(false);
  const [popupEmail, setPopupEmail] = useState(false);
  const footerRef = useRef(null);
  const { languageDict, language } = useContext(LanguageContext)
  const dict = languageDict.containers.footer
  function listenForDomChanges(targetNode, callback) {
    // Check browser compatibility
    if (!window.MutationObserver) {
      console.warn("MutationObserver is not supported by your browser.");
      return;
    }
    // Create a MutationObserver instance
    const observer = new MutationObserver(callback);
    // Define the configuration object for the observer
    const config = {
      childList: true, // Observe changes in child nodes
      subtree: true, // Observe changes in all descendant nodes
      attributes: true, // Observe attribute changes
    };
    // Start observing the target node
    observer.observe(targetNode, config);
    // Function to disconnect the observer (optional)
    return () => {
      observer.disconnect();
    };
  }

  useEffect(() => {
    window.addEventListener("resize", changeHeights);
    const disconnectObserver = listenForDomChanges(document, changeHeights);
    return () => {
      disconnectObserver();
      window.removeEventListener("resize", changeHeights);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHeights = () => {
    try {
      const heightWindow = window.innerHeight;
      const heightContent = document.querySelector("body").scrollHeight;
      const heightFooter = footerRef.current.scrollHeight;
      const heightContentPlusFooter = heightContent + heightFooter;
      const isFixed = footerRef.current.classList.contains("fixed-footer");
      if (isFixed) {
        if (heightWindow <= heightContentPlusFooter) {
          footerRef.current.classList.remove("fixed-footer");
        }
      } else {
        if (heightWindow >= heightContent) {
          footerRef.current.classList.add("fixed-footer");
        }
      }
    } catch (error) {
      
    }
  };
  const copyToClipboard = (toClipboard, popup) => {
    navigator.clipboard.writeText(toClipboard);
    switch (popup) {
      case "email":
        setPopupEmail(true);
        setPopupPhone(false)
        break;
      case "phone":
        setPopupPhone(true);
        setPopupEmail(false)
        break;
    }
    setTimeout(() => {
      switch (popup) {
        case "email":
          setPopupEmail(false);
          break;
        case "phone":
          setPopupPhone(false);
          break;
      }
    }, 1000);
  };

  return (
    <footer id="article-footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-container-info">
          <div className="footer-nav">
            <span>{dict.nav.title}</span>
            <ul>
              <li>
                <Link href={`/${language}`} >{dict.nav.homePage}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contacts">
            <span>{dict.contacts.title}</span>
            <div className="footer-icons">
              <span
                className="footer-email"
                onClick={() => {
                  copyToClipboard("ab@adam-bartusek.cz", "email");
                }}
              >
                <IconEmail />
                <Popup state={popupEmail}>Zkopírováno!</Popup>
              </span>
              <span
                className="footer-phone"
                onClick={() => {
                  copyToClipboard("+420778033073", "phone");
                }}
              >
                <IconPhone />
                <Popup state={popupPhone}>Zkopírováno!</Popup>
              </span>
              <span
                className="footer-location"
                onClick={() => {
                  window.open(
                    `https://www.google.com/maps/place/Tolarova+568,+533+51+Pardubice+VII-Rosice/@50.0460026,15.7485499,16.89z/data=!4m6!3m5!1s0x470dcccc6c1681cb:0x402f95b9a47fb44!8m2!3d50.047553!4d15.7490569!16s%2Fg%2F11tk94pm85?entry=ttu`
                  );
                }}
              >
                <IconLocation />
              </span>
              <Link href="https://facebook.com" aria-label={dict.contacts.labels.facebook}>
                <IconFacebook />
              </Link>
              <Link href="https://instagram.com" aria-label={dict.contacts.labels.instagram}>
                <IconInstagram />
              </Link>
              <Link href="https://www.tiktok.com/" aria-label={dict.contacts.labels.tiktok}>
                <IconTiktok />
              </Link>
              <Link href="https://linkedin.com" aria-label={dict.contacts.labels.linkedin}>
                <IconLinkedin />
              </Link>
              <Link href="https://twitter.com" aria-label={dict.contacts.labels.twitter}>
                <IconX />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-container-copyright">
          <p> Adam Bartůšek &copy; 2022-2024.</p>
          <p>
          {dict.created.part1}
            <Btn
              href="https://www.adam-bartusek.cz/"
              ariaLabel="Created by Adam Bartůšek. Visit the developer website."
              fontSize="var(--fontsize-small)"
              fontFamily="var(--font-secondary)"
              textColor="var(--color-text-dark-still)"
              bgColor="var(--color-text-light-still)"
              opacity="0.75"
              borderRadius="20px"
              filter="brightness(1.15) drop-shadow(0 0 5px var(--black-50))"
            >
              Adam Bartůšek
            </Btn>
            {dict.created.part2}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
