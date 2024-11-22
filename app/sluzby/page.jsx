// Styles
import styles from "./page.module.scss";
// Public & Assets
import HeroImg from "@/public/hero.png";
import IconHtml from "../../public/techstack/html.svg";

// React/Next Functions
import Image from "next/image";

// Context & Actions

// Componenets
import InteractiveChooser from "@/components/interactive-chooser/interactive-chooser.component";
import { FlipCard } from "@/components/card/card.component";

const ServicesPage = () => {
  return (
    <main className={styles.main}>
      <section className={`${styles.chooser}`}>
        <InteractiveChooser />
      </section>
      <section className={`${styles.benefits}`}>
        <FlipCard
          width="clamp(180px, 20vw, 200px)"
          height="clamp(180px, 20vw, 200px)"
          borderSize="0"
          borderRadius="25px"
          bgColor="var(--color-primary)"
          bgHoverColor="rgb(from var(--color-secondary) r g b / 0.5)"
          flippedContent={
            <p className={`${styles.flipedContent}`}>
              Vaše webové stránky budou bleskově rychlé a snadno zvládnou vysoký
              provoz.
            </p>
          }
        >
          <div className={`${styles.frontContent}`}>
            <Image src={IconHtml} alt="x" />
            <span className={`${styles.frontTitle}`}>Výkon</span>
          </div>
        </FlipCard>
        <FlipCard
          width="clamp(180px, 20vw, 200px)"
          height="clamp(180px, 20vw, 200px)"
          borderSize="0"
          borderRadius="25px"
          bgColor="var(--color-primary)"
          bgHoverColor="rgb(from var(--color-secondary) r g b / 0.5)"
          flippedContent={
            <p className={`${styles.flipedContent}`}>
              Moderní design, který se přizpůsobí každému zařízení.
            </p>
          }
        >
          <div className={`${styles.frontContent}`}>
            <Image src={IconHtml} alt="x" />
            <span className={`${styles.frontTitle}`}>Responsivita</span>
          </div>
        </FlipCard>
        <FlipCard
          width="clamp(180px, 20vw, 200px)"
          height="clamp(180px, 20vw, 200px)"
          borderSize="0"
          borderRadius="25px"
          bgColor="var(--color-primary)"
          bgHoverColor="rgb(from var(--color-secondary) r g b / 0.5)"
          flippedContent={
            <p className={`${styles.flipedContent}`}>
              Pomůžeme vám vyniknout ve vyhledávačích a přilákat více zákazníků.
            </p>
          }
        >
          <div className={`${styles.frontContent}`}>
            <Image src={IconHtml} alt="x" />
            <span className={`${styles.frontTitle}`}>SEO</span>
          </div>
        </FlipCard>
        <FlipCard
          width="clamp(180px, 20vw, 200px)"
          height="clamp(180px, 20vw, 200px)"
          borderSize="0"
          borderRadius="25px"
          bgColor="var(--color-primary)"
          bgHoverColor="rgb(from var(--color-secondary) r g b / 0.5)"
          flippedContent={
            <p className={`${styles.flipedContent}`}>
              Weby vytvořené na míru vašim potřebám a značce.
            </p>
          }
        >
          <div className={`${styles.frontContent}`}>
            <Image src={IconHtml} alt="x" />
            <span className={`${styles.frontTitle}`}>Autentičnost</span>
          </div>
        </FlipCard>
      </section>
      <section className={`${styles.process}`}></section>
      <section className={`${styles.cta}`}></section>
      <section className={`${styles.checkAlso}`}>
      </section>
    </main>
  );
};

export default ServicesPage;
