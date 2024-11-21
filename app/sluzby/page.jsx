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
          width="clamp(120px, 33vw, 250px)"
          height="clamp(120px, 33vw, 250px)"
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
          width="clamp(120px, 33vw, 250px)"
          height="clamp(120px, 33vw, 250px)"
          borderSize="0"
          borderRadius="25px"
          bgColor="var(--color-primary)"
          bgHoverColor="rgb(from var(--color-secondary) r g b / 0.5)"
          flippedContent={
            <p className={`${styles.flipedContent}`}>
              Garantujeme, že váš web bude vždy dostupný a bez výpadků.
            </p>
          }
        >
          <div className={`${styles.frontContent}`}>
            <Image src={IconHtml} alt="x" />
            <span className={`${styles.frontTitle}`}>Dostupnost</span>
          </div>
        </FlipCard>
        <FlipCard
          width="clamp(120px, 33vw, 250px)"
          height="clamp(120px, 33vw, 250px)"
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
          width="clamp(120px, 33vw, 250px)"
          height="clamp(120px, 33vw, 250px)"
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
          width="clamp(120px, 33vw, 250px)"
          height="clamp(120px, 33vw, 250px)"
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
        <FlipCard
          width="clamp(120px, 33vw, 250px)"
          height="clamp(120px, 33vw, 250px)"
          borderSize="0"
          borderRadius="25px"
          bgColor="var(--color-primary)"
          bgHoverColor="rgb(from var(--color-secondary) r g b / 1)"
          flippedContent={
            <p className={`${styles.flipedContent}`}>
              Jednoduchá a přátelská spolupráce od prvního kontaktu po spuštění
              webu.
            </p>
          }
        >
          <div className={`${styles.frontContent}`}>
            <Image src={IconHtml} alt="x" />
            <span className={`${styles.frontTitle}`}>Podpora</span>
          </div>
        </FlipCard>
      </section>
      <section className={`${styles.process}`}></section>
      <section className={`${styles.cta}`}></section>
      <section className={`${styles.checkAlso}`}>
        <div className={`${styles.borderBox}`}>
          <div className={`${styles.icon}`}>
            <Image src={HeroImg} alt="Icon" />
          </div>
          <p>DISCOVER</p>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
