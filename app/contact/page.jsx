"use client";
// Styles
import styles from "./page.module.scss";
// Public & Assets
import IconPhone from "@/components/svgs/footer-icons/icon-phone.component";
import IconEmail from "@/components/svgs/footer-icons/icon-email.component";
import IconLocation from "@/components/svgs/footer-icons/icon-location.component";
import IconInstagram from "@/components/svgs/footer-icons/icon-instagram.component";
import IconLinkedin from "@/components/svgs/footer-icons/icon-linkedin.component";
import IconGithub from "@/components/svgs/footer-icons/icon-github.component";
// React/Next Functions
import { useState, useEffect } from "react";
// Context & Actions

// Componenets
import Btn from "@/components/btn/btn.component";
import FormContact from "@/components/forms/form-contant/form-contact.component";
import Popup from "@/components/popup/popup.component";
import {
  Form,
  FormTitle,
  FormRow,
  FormBtnSubmit,
  FormInputName,
  FormInputSurname,
  FormInputPhone,
  FormInputEmail,
  FormInputPrice,
  FormInput,
} from "@/components/form/form.component";

const Page = () => {
  const [phoneNumberCopied, setPhoneNumberCopied] = useState(false);
  const [emailAddressCopied, setEmailAddressCopied] = useState(false);
  const phoneNumber = "+42077780333073";
  const emailAddress = "ab@adam-bartusek.cz";

  useEffect(() => {
    if (phoneNumberCopied) {
      if (emailAddressCopied) {
        setEmailAddressCopied(false);
      }
      setTimeout(() => {
        setPhoneNumberCopied(false);
      }, 2500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumberCopied]);

  useEffect(() => {
    if (emailAddressCopied) {
      if (phoneNumberCopied) {
        setPhoneNumberCopied(false);
      }
      setTimeout(() => {
        setEmailAddressCopied(false);
      }, 2500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailAddressCopied]);

  const handleCallOrCopyNumber = () => {
    const userAgent = navigator.userAgent || window.opera;
    // Check, if device have phone functions
    if (/android|iphone|ipad|iPod/i.test(userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // If not (so desktop), just copy phone
      navigator.clipboard.writeText(phoneNumber).then(
        () => {
          setPhoneNumberCopied(true);
        },
        () => {}
      );
    }
  };

  const handleEmailOrCopy = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=Hello%20there&body=Dear%20Adam%2C%0D%0A%0D%0AI'm%20interested%20in%20your%20services.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Name]`;
    // Copy the email address to clipboard regardless of mailto success
    navigator.clipboard.writeText(emailAddress).then(
      () => {
        setEmailAddressCopied(true);
      },
      () => {}
    );
    // Attempt to open the default mail client
    window.location.href = mailtoLink;
  };

  const handleSubmit = (formdata) => {
    console.log(formdata);
  };

  return (
    <main className={styles.main}>
      <section className={`${styles.introduction}`}>
        <h1>Kontaktujte mě</h1>
        <p>
          Neváhejte mě kontaktovat! V případě, že již máte na úvod jasno, můžete
          vyplnit kontaktní formulář a já se Vám do pár dní ozvu, abysme
          domluvili další postup a první schůzku.V případě, že Vám není formulář
          příjmený, můžete rovnou zavolat a domluvíme se po telefonu.
        </p>
      </section>
      <section className={`${styles.contactsAndForm}`}>
        <div className={`${styles.contacts}`}>
          <h2>Kontakty</h2>
          <p>
            Po úvodním hovoru rád upřednostním osobní setkání a na všem se tak
            lépe domluvíme. Pokud bych zrovna nemohl vzít telefon, ozvu se jak
            jen to bude možné. Případně můžete využít SMS či e-mail.
          </p>
          <div className={`${styles.mainContacts}`}>
            <div onClick={handleCallOrCopyNumber} className={`${styles.phone}`}>
              <div className={`${styles.iconContainer}`}>
                <IconPhone />
              </div>
              <div className={`${styles.specContainer}`}>
                <h6 className={`${styles.contactTitle}`}>
                  Mobil{phoneNumberCopied && <span>Zkopírováno!</span>}
                </h6>
                <span className={`${styles.contactValue}`}>
                  +42077780333073
                </span>
              </div>
            </div>

            <div onClick={handleEmailOrCopy} className={`${styles.email}`}>
              <div className={`${styles.iconContainer}`}>
                <IconEmail />
              </div>
              <div className={`${styles.specContainer}`}>
                <h6 className={`${styles.contactTitle}`}>
                  E-mail{emailAddressCopied && <span>Zkopírováno!</span>}
                </h6>
                <span className={`${styles.contactValue}`}>
                  ab@adam-bartusek.cz
                </span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Pardubice/@50.0342266,15.4292331,10z/data=!3m1!4b1!4m6!3m5!1s0x470dc94b239307b5:0x12d59894ccf624ae!8m2!3d50.0343092!4d15.7811994!16zL20vMGNoNTQ?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.address}`}
            >
              <div className={`${styles.iconContainer}`}>
                <IconLocation />
              </div>
              <div className={`${styles.specContainer}`}>
                <h6 className={`${styles.contactTitle}`}>Město</h6>
                <span className={`${styles.contactValue}`}>Pardubice</span>
              </div>
            </a>
          </div>
          <hr style={{ width: "100%" }} />
          <h6>Sledujte mě</h6>
          <div className={`${styles.additionalContacts}`}>
            <Btn
              href="https://www.instagram.com/_adaamb/"
              borderSize="none"
              paddingOfBtn="0"
              hoverEffect="scaleForward"
            >
              <div className={`${styles.iconContainer}`}>
                <IconInstagram />
              </div>
            </Btn>
            <Btn
              href="https://github.com/adambprograming"
              borderSize="none"
              paddingOfBtn="0"
              hoverEffect="scaleForward"
            >
              <div className={`${styles.iconContainer}`}>
                <IconLinkedin />
              </div>
            </Btn>
            <Btn
              href={`https://www.linkedin.com/in/adam-bart%C5%AF%C5%A1ek-251107286/?locale=cs_CZ`}
              borderSize="none"
              paddingOfBtn="0"
              hoverEffect="scaleForward"
            >
              <div className={`${styles.iconContainer}`}>
                <IconGithub />
              </div>
            </Btn>
          </div>
        </div>
        <div className={`${styles.form}`}>
          <FormContact />
        </div>
        <div className={`${styles.form}`}></div>
        <div className={`${styles.form}`}>
          <Form onSubmit={handleSubmit} styleOfLabels="above">
            <FormTitle>Formulář</FormTitle>
            {/* <FormRow>
              <FormInputName label="Jméno:" isRequired={true} />
              <FormInputSurname label="Prijmeni:" isRequired={true} />
            </FormRow>
            <FormRow>
              <FormInputPhone label="Telefonní číslo:" isRequired={true} />
              <FormInputEmail label="E-mail:" isRequired={true} />
            </FormRow> */}
            <FormInputPrice label="Jaký je Váš rozpočet?" />
            <FormInput
              tag="age"
              label="Věk:"
              placeholder="Uveďte Váš věk"
              validationPattern={/^[0-9]{1,3}$/}
              hintText="Věk musí obsahovat 1 až 3 znaky a může obsahovat pouze čísla."
            />
            <FormRow>
              <FormInput
                tag="name"
                label="Jméno:"
                placeholder="Uveďte Vaše jméno"
                validationPattern={/^[a-zA-ZěščřžýáíéúůóďťňĚŠČŘŽÝÁÍÉÚŮÓĎŤŇ\s'-]{2,30}$/}
                hintText="Jméno musí obsahovat 2 až 30 znaků a může obsahovat pouze písmena, mezery a pomlčky."
                isRequired={true}
              />
              <FormInput
                tag="surname"
                label="Příjmení:"
                placeholder="Uveďte Vaše příjmení"
                validationPattern={/^[a-zA-ZěščřžýáíéúůóďťňĚŠČŘŽÝÁÍÉÚŮÓĎŤŇ\s'-]{2,35}$/}
                hintText="Příjmení musí obsahovat 2 až 35 znaků a může obsahovat pouze písmena, mezery a pomlčky."
                isRequired={true}
              />
            </FormRow>
            <FormRow>
              <FormInput
                tag="phone"
                label="Telefonní číslo:"
                placeholder="Uveďte Vaše telefonní číslo"
                validationPattern={/^\+?[0-9]{7,15}$/}
                hintText="Telefonní číslo musí obsahovat 7 až 15 číslic."
                isRequired={true}
              />
              <FormInput
                tag="email"
                label="E-mail:"
                placeholder="Uveďte Váš e-mail"
                validationPattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,320}$/}
                hintText="Zadejte platnou e-mailovou adresu ve formátu např. uzivatel@email.com."
                isRequired={true}
              />
            </FormRow>
            <FormBtnSubmit/>
          </Form>
        </div>
      </section>
      <section className={`${styles.process}`}>
        Jak bude naše spolupráce probíhat?
      </section>
    </main>
  );
};

export default Page;
