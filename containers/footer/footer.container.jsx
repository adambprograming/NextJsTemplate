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
import { useState, useEffect } from "react";
// Context & Actions

// Components
import BtnLink from "../../components/btns/btn-link/btn-link.component";
import Popup from "../../components/popup/popup.component";

const Footer = () => {
  const [popupPhone, setPopupPhone] = useState(false);
  const [popupEmail, setPopupEmail] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      changeHeights();
    });
    changeHeights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeHeights = () => {
    window.removeEventListener("resize", () => {
      changeHeights();
    });
    const heightWindow = window.innerHeight;
    const heightContent = document.querySelector("body").scrollHeight;
    const heightFooter = document.querySelector("footer").scrollHeight;
    const heightContentPlusFooter = heightContent + heightFooter;
    const isFixed = document
      .getElementById("article-footer")
      .classList.contains("fixed-footer");
    if (isFixed) {
      if (heightWindow <= heightContentPlusFooter) {
        document
          .getElementById("article-footer")
          .classList.remove("fixed-footer");
      }
    } else {
      if (heightWindow >= heightContent) {
        document.getElementById("article-footer").classList.add("fixed-footer");
      }
    }
    return () => {
      window.addEventListener("resize", () => {
        changeHeights();
      });
    };
  };
  const copyToClipboard = (toClipboard, popup) => {
    navigator.clipboard.writeText(toClipboard);
    switch (popup) {
      case "email":
        setPopupEmail(true);
        break;
      case "phone":
        setPopupPhone(true);
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
    <footer id="article-footer">
      <div className="footer-container">
        <div className="footer-container-info">
          <div className="footer-nav">
            <h4>Odkazy</h4>
            <ul>
              <li>
                <Link href="/">Domovská stránka</Link>
              </li>
              <li>
                <Link href="/about">O mně</Link>
              </li>
              <li>
                <Link href="/services">Služby</Link>
              </li>
              <li>
                <Link href="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contacts">
            <h4>Kontakty</h4>
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
              <Link href="https://facebook.com">
                <IconFacebook />
              </Link>
              <Link href="https://instagram.com">
                <IconInstagram />
              </Link>
              <Link href="https://www.tiktok.com/">
                <IconTiktok />
              </Link>
              <Link href="https://linkedin.com">
                <IconLinkedin />
              </Link>
              <Link href="https://twitter.com">
                <IconX />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-container-copyright">
          <p> NAZEV FIRMY &copy; 2022-2024.</p>
          <p>
            Vytvořil{" "}
            <BtnLink
              content="Adam Bartůšek"
              href="https://www.adam-bartusek.cz/"
              fontSize="var(--fontsize-small)"
              fontFamily="var(--font-secondary)"
              bgColor="var(--color-text-light-still)"
              opacity="0.75"
              borderRadius="20px"
            ></BtnLink>
            . Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
